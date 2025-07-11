# BookFlow 借書系統

## 系統簡介
BookFlow 是一套前後端分離的現代化借書系統，後端採用 Spring Boot，前端採用 Vue.js，支援 JWT 驗證、RESTful API、借書/還書/借閱紀錄等功能。

---

## 快速啟動

### 1. 資料庫初始化
- 進入 `DB/` 資料夾，執行 `schema.sql` 建立資料表，執行 `data.sql` 匯入測試資料。
- PostgreSQL 範例：
  ```sh
  psql -U <user> -d <database> -f DB/schema.sql
  psql -U <user> -d <database> -f DB/data.sql
  ```

### 2. 啟動後端（Spring Boot）
- 進入 `bookflow/` 目錄
- 安裝依賴並啟動：
  ```sh
  ./gradlew build
  ./gradlew bootRun
  ```
- 預設 API 端點：`http://localhost:8080/`

### 3. 啟動前端（Vue.js）
- 進入 `bookflow/frontend/` 目錄
- 安裝依賴並啟動：
  ```sh
  npm install
  npm run dev
---

## 使用說明

### 登入/註冊
- 以手機號碼註冊、登入。
- 登入成功後取得 JWT，前端自動帶入 API 請求。

### 書櫃
- 顯示所有書籍資訊與可借閱數量。
- 未登入時僅可瀏覽，無法借書。

### 借閱中心
- 顯示個人所有借閱紀錄。
- 尚未歸還的書可直接點擊「還書」。

### 登出
- 右上角點擊「登出」會自動導向登入頁。

---

## 資料庫操作
- 若需重設密碼，可請管理員執行儲存過程：
  ```sql
  CALL reset_user_password(<userId>, '<newPassword>');
  ```

---

## 常見問題
- **無法登入/註冊？**
  - 請確認手機號碼未重複註冊，密碼正確。
- **API 401 未授權？**
  - 請重新登入，前端會自動清除過期 token。
- **資料庫連線錯誤？**
  - 請確認 `application.properties` 內資料庫設定正確。

---

## 安全注意事項
- 所有 API 已防範 SQL Injection。
- 用戶輸入（如 userName）已防範 XSS 攻擊。