# PayOS + Google Sheets API Documentation

## Overview

This API integrates PayOS payment system with Google Spreadsheet to automatically track customer orders and payment status.

## Setup Requirements

1. **Google Sheets Setup**: Follow `GOOGLE_SHEETS_SETUP.md` for detailed instructions
2. **Environment Variables**: Configure `.env` file with required credentials
3. **Dependencies**: Run `npm install` to install required packages

## Environment Variables

```env
# PayOS Configuration
PAYOS_CLIENT_ID=your_payos_client_id
PAYOS_API_KEY=your_payos_api_key
PAYOS_CHECKSUM_KEY=your_payos_checksum_key

# Frontend URL
CLIENT_URL=http://localhost:8080

# Google Sheets Configuration
GOOGLE_CREDENTIALS_PATH=./config/google-credentials.json
SHEET_ID=your_google_sheet_id
```

## API Endpoints

### 1. Create Payment Link

**POST** `/api/payments/payos/create`

Creates a PayOS payment link and saves order data to Google Sheets.

**Request Body:**

```json
{
  "fullName": "Nguyen Van A",
  "email": "nguyenvana@example.com",
  "phone": "0123456789",
  "dob": "1990-01-01",
  "birthPlace": "Ha Noi",
  "pkg": "BASIC"
}
```

**Response:**

```json
{
  "orderId": 12345678,
  "checkoutUrl": "https://payos.vn/checkout/...",
  "amount": 299000,
  "package": "BASIC"
}
```

### 2. PayOS Webhook

**POST** `/api/payments/payos/webhook`

Receives payment status updates from PayOS and updates Google Sheets.

**Request Body:**

```json
{
  "data": {
    "orderCode": 12345678,
    "code": "00",
    "desc": "Payment successful"
  }
}
```

### 3. Manual Status Update

**POST** `/api/payments/update-status`

Manually update order status (for testing or admin purposes).

**Request Body:**

```json
{
  "orderId": 12345678,
  "status": "success"
}
```

**Valid statuses:** `pending`, `success`, `canceled`, `failed`

### 4. Get Orders

**GET** `/api/orders`

Retrieve orders with optional filtering.

**Query Parameters:**

- `email`: Filter by customer email
- `orderId`: Filter by specific order ID
- `status`: Filter by payment status
- `limit`: Limit number of results (default: 50)

**Examples:**

```
GET /api/orders
GET /api/orders?email=nguyenvana@example.com
GET /api/orders?status=success
GET /api/orders?orderId=12345678
```

**Response:**

```json
{
  "success": true,
  "count": 10,
  "filters": {
    "status": "success"
  },
  "data": [
    {
      "fullName": "Nguyen Van A",
      "email": "nguyenvana@example.com",
      "phone": "0123456789",
      "dob": "1990-01-01",
      "birthPlace": "Ha Noi",
      "pkg": "BASIC",
      "orderId": "12345678",
      "amount": "299000",
      "status": "success",
      "createdAt": "19/8/2025, 10:30:00 SA",
      "paymentUrl": "https://payos.vn/checkout/..."
    }
  ]
}
```
