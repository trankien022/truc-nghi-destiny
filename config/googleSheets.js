import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class GoogleSheetsService {
  constructor() {
    this.sheets = null;
    this.auth = null;
    this.spreadsheetId = null;
    this.initialized = false;
  }

  async initialize() {
    try {
      if (this.initialized) {
        return;
      }

      // Load credentials
      const credentialsPath = process.env.GOOGLE_CREDENTIALS_PATH;
      if (!credentialsPath) {
        throw new Error(
          "GOOGLE_CREDENTIALS_PATH environment variable is not set"
        );
      }

      const fullCredentialsPath = path.resolve(credentialsPath);
      if (!fs.existsSync(fullCredentialsPath)) {
        throw new Error(
          `Credentials file not found at: ${fullCredentialsPath}`
        );
      }

      const credentials = JSON.parse(
        fs.readFileSync(fullCredentialsPath, "utf8")
      );

      // Create JWT auth
      this.auth = new google.auth.JWT(
        credentials.client_email,
        null,
        credentials.private_key,
        [
          "https://www.googleapis.com/auth/spreadsheets",
          "https://www.googleapis.com/auth/drive.file",
        ]
      );

      // Initialize sheets API
      this.sheets = google.sheets({ version: "v4", auth: this.auth });

      // Get spreadsheet ID from environment
      this.spreadsheetId = process.env.SHEET_ID;
      if (!this.spreadsheetId) {
        throw new Error("SHEET_ID environment variable is not set");
      }

      await this.verifyAccess();
      this.initialized = true;
      console.log("✅ Google Sheets service initialized successfully");
    } catch (error) {
      console.error(
        "❌ Failed to initialize Google Sheets service:",
        error.message
      );
      throw error;
    }
  }

  async verifyAccess() {
    try {
      const response = await this.sheets.spreadsheets.get({
        spreadsheetId: this.spreadsheetId,
      });
      console.log(
        `📊 Connected to spreadsheet: ${response.data.properties.title}`
      );
    } catch (error) {
      throw new Error(`Cannot access spreadsheet: ${error.message}`);
    }
  }

  async addOrder(orderData) {
    try {
      await this.initialize();

      const {
        fullName,
        email,
        phone,
        dob,
        birthPlace,
        pkg,
        orderId,
        amount,
        status,
        createdAt,
        paymentUrl,
      } = orderData;

      // Format data for spreadsheet
      const values = [
        [
          fullName,
          email,
          phone,
          dob,
          birthPlace,
          pkg,
          orderId.toString(),
          amount.toString(),
          status,
          new Date(createdAt).toLocaleString("vi-VN"),
          paymentUrl,
        ],
      ];

      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: "Sheet1!A:K",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: values,
        },
      });

      console.log(`✅ Order ${orderId} added to spreadsheet`);
      return response.data;
    } catch (error) {
      console.error(
        `❌ Failed to add order ${orderData.orderId} to spreadsheet:`,
        error.message
      );
      throw error;
    }
  }

  async updateOrderStatus(orderId, newStatus) {
    try {
      await this.initialize();

      // First, find the row with this orderId
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: "Sheet1!G:I", // Columns G (orderId), H (amount), I (status)
      });

      const rows = response.data.values;
      if (!rows) {
        throw new Error("No data found in spreadsheet");
      }

      // Find the row index (skip header row)
      let rowIndex = -1;
      for (let i = 1; i < rows.length; i++) {
        if (rows[i][0] === orderId.toString()) {
          rowIndex = i + 1; // +1 because sheets are 1-indexed
          break;
        }
      }

      if (rowIndex === -1) {
        throw new Error(`Order ${orderId} not found in spreadsheet`);
      }

      // Update the status
      await this.sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: `Sheet1!I${rowIndex}`,
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[newStatus]],
        },
      });

      console.log(`✅ Order ${orderId} status updated to: ${newStatus}`);
      return { orderId, newStatus, rowIndex };
    } catch (error) {
      console.error(
        `❌ Failed to update order ${orderId} status:`,
        error.message
      );
      throw error;
    }
  }

  async getOrders(filters = {}) {
    try {
      await this.initialize();

      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: "Sheet1!A:K",
      });

      const rows = response.data.values;
      if (!rows || rows.length <= 1) {
        return [];
      }

      // Convert to objects (skip header row)
      const headers = [
        "fullName",
        "email",
        "phone",
        "dob",
        "birthPlace",
        "pkg",
        "orderId",
        "amount",
        "status",
        "createdAt",
        "paymentUrl",
      ];
      const orders = rows.slice(1).map((row) => {
        const order = {};
        headers.forEach((header, index) => {
          order[header] = row[index] || "";
        });
        return order;
      });

      // Apply filters
      let filteredOrders = orders;

      if (filters.email) {
        filteredOrders = filteredOrders.filter((order) =>
          order.email.toLowerCase().includes(filters.email.toLowerCase())
        );
      }

      if (filters.orderId) {
        filteredOrders = filteredOrders.filter(
          (order) => order.orderId === filters.orderId.toString()
        );
      }

      if (filters.status) {
        filteredOrders = filteredOrders.filter(
          (order) => order.status.toLowerCase() === filters.status.toLowerCase()
        );
      }

      return filteredOrders;
    } catch (error) {
      console.error("❌ Failed to get orders from spreadsheet:", error.message);
      throw error;
    }
  }
}

// Create singleton instance
const googleSheetsService = new GoogleSheetsService();

export default googleSheetsService;
