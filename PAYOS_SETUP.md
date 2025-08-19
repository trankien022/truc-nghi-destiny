# Hướng dẫn tích hợp PayOS

## 1. Cài đặt môi trường

### Tạo file .env
Sao chép file `.env.example` thành `.env` và điền thông tin PayOS:

```bash
cp .env.example .env
```

Cập nhật file `.env`:
```env
# PayOS Configuration
PAYOS_CLIENT_ID=your_payos_client_id
PAYOS_API_KEY=your_payos_api_key
PAYOS_CHECKSUM_KEY=your_payos_checksum_key

# Frontend URL
CLIENT_URL=http://localhost:5173
```

### Lấy thông tin PayOS
1. Đăng ký tài khoản tại [PayOS](https://payos.vn)
2. Tạo ứng dụng mới
3. Lấy thông tin:
   - Client ID
   - API Key
   - Checksum Key

## 2. Chạy ứng dụng

### Chạy Backend Server
```bash
# Development mode với nodemon
npm run server:dev

# Production mode
npm run server
```

Server sẽ chạy tại: `http://localhost:3030`

### Chạy Frontend
```bash
# Development mode
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:5173`

## 3. Cấu trúc API

### POST /api/payments/payos/create
Tạo payment link PayOS

**Request Body:**
```json
{
  "fullName": "Nguyễn Văn A",
  "email": "example@email.com",
  "phone": "0123456789",
  "dob": "1990-01-01",
  "birthPlace": "Hà Nội",
  "pkg": "BASIC" // BASIC | PRO | PREMIUM
}
```

**Response:**
```json
{
  "orderId": 123456789,
  "checkoutUrl": "https://pay.payos.vn/web/...",
  "amount": 299000,
  "package": "BASIC"
}
```

### GET /api/health
Health check endpoint

## 4. Giá gói dịch vụ

- **BASIC**: 299,000 VND
- **PRO**: 499,000 VND  
- **PREMIUM**: 799,000 VND

## 5. Flow thanh toán

1. User điền form tại `/checkout`
2. Frontend gọi API `/api/payments/payos/create`
3. Backend tạo payment link PayOS
4. User được redirect đến PayOS checkout
5. Sau thanh toán, user được redirect về `/thank-you?orderId=...`

## 6. URLs quan trọng

- **Checkout Form**: `/checkout`
- **Thank You Page**: `/thank-you`
- **API Endpoint**: `http://localhost:3030/api/payments/payos/create`

## 7. Lưu ý

- Đảm bảo cả frontend và backend đều chạy
- Kiểm tra file `.env` có đầy đủ thông tin PayOS
- PayOS yêu cầu HTTPS cho production
- Webhook URL cần được cấu hình trong PayOS dashboard cho production
