# QR Code 產生器

這是一個使用 **Node.js**、**Express** 和 **EJS** 製作的簡單 QR Code 產生器。使用者可以輸入文字或網址，然後生成對應的 QR Code。

## 🚀 功能
- 使用者輸入文字或網址後，產生對應的 QR Code
- 透過 `qrcode` 套件即時生成 QR Code
- 使用 EJS 渲染前端畫面

## 📦 安裝與執行

### 1. **Clone 專案**
```sh
git clone https://github.com/tyler101362/qrcode-generator.git
cd qrcode-generator
```

### 2. **安裝依賴**
```sh
npm install
```

### 3. **啟動伺服器**
```sh
node app.js
```

伺服器會運行在 `http://localhost:3000`

## 🛠 技術棧
- **後端**：Node.js + Express.js
- **前端模板**：EJS
- **QR Code 產生**：`qrcode` npm 套件
- **CSS**：簡單的 `style.css`

## 📜 專案結構
```
qrcode_generator/
│── folder/
│   └── index.ejs      # EJS 模板
│── public/
│   └── style.css      # 前端樣式
│── app.js             # 主要的 Express 伺服器
│── package.json       # 依賴與專案資訊
│── .gitignore         # 忽略 node_modules/
```

