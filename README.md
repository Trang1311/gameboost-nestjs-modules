# GameBoost Auto-Poster (NestJS)

NestJS service tích hợp với GameBoost API v2 để tự động đăng bài bán tài khoản và currency.

## Cấu trúc Project

```
src/
├── config/
│   └── gameboost.config.ts          # Cấu hình API token, URL, timeout
├── common/
│   ├── dto/common.dto.ts            # Shared DTOs (GameDto, DeliveryTimeDto...)
│   └── filters/global-exception.filter.ts
├── gameboost/
│   ├── gameboost-http.service.ts    # Axios wrapper (auth header, logging, error)
│   ├── gameboost.module.ts          # Shared module cung cấp HttpService
│   ├── account-offers/
│   │   ├── account-offers.dto.ts
│   │   ├── account-offers.service.ts
│   │   ├── account-offers.controller.ts
│   │   └── account-offers.module.ts
│   ├── currency-offers/
│   │   └── ...
│   └── games/
│       └── ...
├── app.module.ts
└── main.ts                          # Bootstrap + Swagger setup
```

## Cài đặt

```bash
npm install

# Copy và điền API token
cp .env.example .env
```

## Chạy dev

```bash
npm run start:dev
```

- **API Base**: http://localhost:3000/api  
- **Swagger UI**: http://localhost:3000/docs

## Lấy API Token

1. Đăng nhập [gameboost.com](https://gameboost.com)
2. Vào **Seller API Settings**
3. Tạo token và paste vào `.env`

## Quy trình đăng bài tự động

### 1. Lấy danh sách game
```
GET /api/games?search=league
```

### 2. Lấy schema cho account_data
```
GET /api/account-offers/template/league-of-legends
```

### 3. Tạo bài đăng (draft)
```
POST /api/account-offers
{
  "game_id": 1,
  "title": "Plat 1 LoL - 50 Champs",
  "description": "...",
  "price": 15.99,
  "credentials": ["Login: myuser\nPassword: mypass123"],
  "delivery_time": { "duration": 1, "unit": "hours" }
}
```

### 4. Publish bài đăng
```
POST /api/account-offers/:id/list
```

## Endpoints

| Method | URL | Mô tả |
|--------|-----|-------|
| GET | /api/games | Danh sách game |
| GET | /api/account-offers | Danh sách account offers |
| GET | /api/account-offers/template/:slug | Schema game |
| POST | /api/account-offers | Tạo mới |
| PATCH | /api/account-offers/:id | Cập nhật |
| DELETE | /api/account-offers/:id | Xóa |
| POST | /api/account-offers/:id/list | Publish |
| POST | /api/account-offers/:id/unlist | Ẩn |
| POST | /api/account-offers/:id/duplicate | Nhân bản |
| GET | /api/currency-offers | Danh sách currency offers |
| POST | /api/currency-offers | Tạo currency offer |
| PATCH | /api/currency-offers/:id/list | Publish currency |
| PATCH | /api/currency-offers/:id/archive | Archive |
