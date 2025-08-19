# Trúc Nghi Destiny — Tech Stack & Hướng dẫn ngắn

Dự án front-end xây dựng bằng Vite + React + TypeScript, sử dụng hệ sinh thái shadcn-ui (Radix UI) và Tailwind CSS. Dưới đây là mô tả các công nghệ chính đang dùng trong dự án.

---

## Công nghệ cốt lõi

- Vite (bundler/dev server)
- React 18
- TypeScript 5
- SWC (thông qua `@vitejs/plugin-react-swc`) để build/transform nhanh

## UI, Styling & Theme

- Tailwind CSS (+ PostCSS, Autoprefixer)
- tailwindcss-animate: tiện ích animation cho Tailwind
- @tailwindcss/typography: style nội dung rich text
- shadcn-ui (dựa trên Radix UI) với các package Radix:
  - @radix-ui/react-accordion, alert-dialog, aspect-ratio, avatar, checkbox,
    collapsible, context-menu, dialog, dropdown-menu, hover-card, label,
    menubar, navigation-menu, popover, progress, radio-group, scroll-area,
    select, separator, slider, slot, switch, tabs, toast, toggle, toggle-group,
    tooltip
- lucide-react: bộ icon
- next-themes: đổi theme (light/dark)

## Routing, Data & State

- react-router-dom: điều hướng client-side
- @tanstack/react-query: quản lý server state, caching, revalidation

## Form, Validation & UX

- react-hook-form: quản lý form hiệu quả
- @hookform/resolvers + zod: validate schema an toàn
- sonner: toast notification
- cmdk: command palette
- vaul: drawer/sheet
- input-otp: input OTP
- react-resizable-panels: panel kéo giãn

## Date/Time & Visualization

- date-fns: xử lý ngày giờ
- react-day-picker: chọn ngày
- recharts: vẽ biểu đồ
- embla-carousel-react: carousel/slider

## Chất lượng mã & DX

- ESLint 9 + eslint-plugin-react-hooks + eslint-plugin-react-refresh
- typescript-eslint
- Globals (định nghĩa global env cho ESLint)

## Cấu hình TypeScript (trích yếu)

- Alias đường dẫn: `@/*` → `./src/*` (tsconfig.json)
- Một số cờ an toàn đang được nới lỏng (skipLibCheck, noImplicitAny=false, strictNullChecks=false).
  - Có thể siết chặt dần khi cần nâng chất lượng type.

## Scripts quan trọng

- `npm run dev` — chạy server phát triển (Vite)
- `npm run build` — build production
- `npm run build:dev` — build ở chế độ development
- `npm run preview` — chạy bản build để xem thử
- `npm run lint` — chạy ESLint

## Cấu trúc thư mục (rút gọn)

- `src/`
  - `assets/` — tài nguyên tĩnh
  - `components/` — các component UI (shadcn + tuỳ biến)
  - `hooks/` — custom hooks
  - `lib/` — hàm tiện ích, cấu hình
  - `pages/` — các trang (phối hợp với react-router)
  - `main.tsx`, `App.tsx` — điểm vào ứng dụng
- `public/` — tài nguyên public (favicon, robots.txt, …)
- `index.html` — template HTML cho Vite
- `tailwind.config.ts`, `postcss.config.js` — cấu hình Tailwind & PostCSS
- `vite.config.ts` — cấu hình Vite

## Cách chạy nhanh

```bash
# Cài phụ thuộc (khuyến nghị dùng npm)
npm ci   # hoặc: npm install

# Chạy dev
npm run dev

# Kiểm tra lint
npm run lint

# Build và preview
npm run build
npm run preview
```

## Ghi chú

- Repo có `bun.lockb` (Bun). Nếu bạn dùng Bun, có thể thay các lệnh npm bằng Bun (`bun install`, `bun dev`, …). Mặc định README này minh họa bằng npm để thống nhất với `package-lock.json`.
- Nếu muốn thiết lập test tự động (Vitest + Testing Library) mình có thể bổ sung theo yêu cầu.
