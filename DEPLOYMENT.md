# Deployment Guide

## Environment Configuration

### Local Development

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values
VITE_API_URL=http://localhost:3030
```

### Production Deployment

#### Backend (Vercel)

1. Deploy backend to Vercel
2. Set environment variables:
   ```env
   PAYOS_CLIENT_ID=your_payos_client_id
   PAYOS_API_KEY=your_payos_api_key
   PAYOS_CHECKSUM_KEY=your_payos_checksum_key
   CLIENT_URL=https://tuvitrucnghi.online
   SHEET_ID=your_google_sheet_id
   GOOGLE_CREDENTIALS_JSON={"type":"service_account",...}
   ```

#### Frontend (Vercel)

1. Deploy frontend to Vercel
2. Set environment variable:
   ```env
   VITE_API_URL=https://your-backend-url.vercel.app
   ```

## Auto-Detection Logic

The frontend automatically detects the environment:

1. **Environment Variable**: Uses `VITE_API_URL` if set
2. **Production Detection**: Auto-detects `tuvitrucnghi.online` and uses production API
3. **Local Fallback**: Uses `http://localhost:3030` for development

## Testing

### Local Testing

```bash
# Start both frontend and backend
npm run start

# Or separately
npm run server:dev  # Backend on :3030
npm run dev         # Frontend on :5173
```

### Production Testing

```bash
# Build and preview production version
npm run preview:prod
```

## Deployment URLs

- **Frontend**: https://tuvitrucnghi.online
- **Backend**: https://tuvitrucnghi-api.vercel.app
- **Local Frontend**: http://localhost:5173
- **Local Backend**: http://localhost:3030
