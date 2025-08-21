import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import PayOS from "@payos/node";
import googleSheetsService from "./config/googleSheets.js";

// Load environment variables
dotenv.config();

const app = express();

// Initialize PayOS
const payOS = new PayOS(
  process.env.PAYOS_CLIENT_ID,
  process.env.PAYOS_API_KEY,
  process.env.PAYOS_CHECKSUM_KEY
);

// Middleware
const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:8080",
  "http://localhost:8080",
  "http://localhost:8081",
  "http://localhost:8083",
  "http://localhost:5173",
  "http://localhost:3000",
  "https://tuvitrucnghi.online",
  "https://www.tuvitrucnghi.online",
  "https://truc-nghi-destiny.vercel.app",
];

if (process.env.VERCEL_URL) {
  allowedOrigins.push(`https://${process.env.VERCEL_URL}`);
}

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);
app.use(express.json());

// Package pricing mapping
const PACKAGE_PRICES = {
  TEST: 10000,
  BASIC: 299000,
  PRO: 499000,
  PREMIUM: 799000,
};

// Package name mapping for display
const PACKAGE_NAMES = {
  TEST: "Test",
  BASIC: "Cơ Bản",
  PRO: "Chuyên Nghiệp",
  PREMIUM: "Cao Cấp",
};

// Route to create PayOS payment link
app.post("/api/payments/payos/create", async (req, res) => {
  try {
    const { fullName, email, phone, dob, birthPlace, pkg } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !dob || !birthPlace || !pkg) {
      return res.status(400).json({
        error: "Missing required fields",
        required: ["fullName", "email", "phone", "dob", "birthPlace", "pkg"],
      });
    }

    // Validate package
    if (!PACKAGE_PRICES[pkg]) {
      return res.status(400).json({
        error: "Invalid package",
        validPackages: Object.keys(PACKAGE_PRICES),
      });
    }

    // Generate order code (6 digits from timestamp + 2 random digits)
    const timestamp = Date.now().toString();
    const last6Digits = timestamp.slice(-6);
    const randomDigits = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");
    const orderCode = parseInt(last6Digits + randomDigits);

    // Get package price and name
    const amount = PACKAGE_PRICES[pkg];
    const packageName = PACKAGE_NAMES[pkg] || pkg;

    // Create payment body
    const body = {
      orderCode: orderCode,
      amount: amount,
      description: `${fullName} - Gói ${packageName}`,
      items: [
        {
          name: `Luận giải tử vi - Gói ${packageName} cho ${fullName}`,
          quantity: 1,
          price: amount,
        },
      ],
      returnUrl: `${
        process.env.CLIENT_URL || "http://localhost:8080"
      }/thank-you?orderId=${orderCode}`,
      cancelUrl: `${
        process.env.CLIENT_URL || "http://localhost:8080"
      }/checkout?canceled=true`,
    };

    // Create payment link
    const paymentLinkResponse = await payOS.createPaymentLink(body);

    // Prepare order data for Google Sheets
    const orderData = {
      fullName,
      email,
      phone,
      dob,
      birthPlace,
      pkg,
      orderId: orderCode,
      amount,
      status: "pending",
      createdAt: Date.now(),
      paymentUrl: paymentLinkResponse.checkoutUrl,
    };

    // Save to Google Sheets (don't block the response if it fails)
    try {
      await googleSheetsService.addOrder(orderData);
      console.log(`📊 Order ${orderCode} saved to Google Sheets`);
    } catch (sheetsError) {
      console.error(
        `⚠️ Failed to save order ${orderCode} to Google Sheets:`,
        sheetsError.message
      );
      // Continue with the response even if Google Sheets fails
    }

    // Return response for frontend to redirect
    res.json({
      orderId: orderCode,
      checkoutUrl: paymentLinkResponse.checkoutUrl,
      amount: amount,
      package: pkg,
    });
  } catch (error) {
    console.error("PayOS Error:", error);
    res.status(500).json({
      error: "Failed to create payment link",
      message: error.message,
    });
  }
});

// PayOS webhook/callback endpoint
app.post("/api/payments/payos/webhook", async (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !data.orderCode) {
      return res.status(400).json({ error: "Invalid webhook data" });
    }

    const { orderCode, code, desc } = data;

    // Determine status based on PayOS response
    let status = "pending";
    if (code === "00") {
      status = "success";
    } else if (code === "01") {
      status = "canceled";
    } else {
      status = "failed";
    }

    console.log(`🔔 PayOS webhook received for order ${orderCode}: ${status}`);

    // Update status in Google Sheets
    try {
      await googleSheetsService.updateOrderStatus(orderCode, status);
      console.log(
        `📊 Order ${orderCode} status updated in Google Sheets: ${status}`
      );
    } catch (sheetsError) {
      console.error(
        `⚠️ Failed to update order ${orderCode} in Google Sheets:`,
        sheetsError.message
      );
    }

    res.json({ success: true, message: "Webhook processed successfully" });
  } catch (error) {
    console.error("PayOS Webhook Error:", error);
    res.status(500).json({
      error: "Failed to process webhook",
      message: error.message,
    });
  }
});

// Manual payment status update endpoint (for testing or manual updates)
app.post("/api/payments/update-status", async (req, res) => {
  try {
    const { orderId, status } = req.body;

    if (!orderId || !status) {
      return res.status(400).json({
        error: "Missing required fields",
        required: ["orderId", "status"],
      });
    }

    // Validate status
    const validStatuses = ["pending", "success", "canceled", "failed"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        error: "Invalid status",
        validStatuses,
      });
    }

    // Update status in Google Sheets
    const result = await googleSheetsService.updateOrderStatus(orderId, status);

    res.json({
      success: true,
      message: `Order ${orderId} status updated to ${status}`,
      data: result,
    });
  } catch (error) {
    console.error("Update Status Error:", error);
    res.status(500).json({
      error: "Failed to update order status",
      message: error.message,
    });
  }
});

// Get orders endpoint with filtering
app.get("/api/orders", async (req, res) => {
  try {
    const { email, orderId, status, limit = 50 } = req.query;

    // Build filters object
    const filters = {};
    if (email) filters.email = email;
    if (orderId) filters.orderId = orderId;
    if (status) filters.status = status;

    // Get orders from Google Sheets
    let orders = await googleSheetsService.getOrders(filters);

    // Apply limit
    if (limit && !isNaN(limit)) {
      orders = orders.slice(0, parseInt(limit));
    }

    // Sort by creation date (newest first)
    orders.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });

    res.json({
      success: true,
      count: orders.length,
      filters: filters,
      data: orders,
    });
  } catch (error) {
    console.error("Get Orders Error:", error);
    res.status(500).json({
      error: "Failed to retrieve orders",
      message: error.message,
    });
  }
});

// Get specific order by ID
app.get("/api/orders/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;

    const orders = await googleSheetsService.getOrders({ orderId });

    if (orders.length === 0) {
      return res.status(404).json({
        error: "Order not found",
        orderId,
      });
    }

    res.json({
      success: true,
      data: orders[0],
    });
  } catch (error) {
    console.error("Get Order Error:", error);
    res.status(500).json({
      error: "Failed to retrieve order",
      message: error.message,
    });
  }
});

// Get orders statistics
app.get("/api/orders/stats/summary", async (req, res) => {
  try {
    const orders = await googleSheetsService.getOrders();

    const stats = {
      total: orders.length,
      pending: orders.filter((o) => o.status === "pending").length,
      success: orders.filter((o) => o.status === "success").length,
      canceled: orders.filter((o) => o.status === "canceled").length,
      failed: orders.filter((o) => o.status === "failed").length,
      totalAmount: orders
        .filter((o) => o.status === "success")
        .reduce((sum, o) => sum + (parseInt(o.amount) || 0), 0),
      packages: {},
    };

    // Count by package
    orders.forEach((order) => {
      if (order.pkg) {
        stats.packages[order.pkg] = (stats.packages[order.pkg] || 0) + 1;
      }
    });

    res.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Get Stats Error:", error);
    res.status(500).json({
      error: "Failed to retrieve statistics",
      message: error.message,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Test CORS endpoint
app.get("/api/test-cors", (req, res) => {
  res.json({
    message: "CORS test successful",
    origin: req.headers.origin,
    timestamp: new Date().toISOString(),
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error("🚨 Unhandled error:", error);
  res.status(500).json({
    error: "Internal server error",
    message:
      process.env.NODE_ENV === "development"
        ? error.message
        : "Something went wrong",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Not found",
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// Initialize Google Sheets service on startup
(async () => {
  try {
    await googleSheetsService.initialize();
    console.log("✅ Google Sheets service ready");
  } catch (error) {
    console.error(
      "❌ Google Sheets service failed to initialize:",
      error.message
    );
    console.error(
      "⚠️ Server will continue but Google Sheets features will not work"
    );
  }
})();

// Export the app for Vercel
export default app;
