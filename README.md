# simple-crud-app-backend

<p> Copyright © 2025 <a href="https://github.com/zhu7055">jiayi-zhu</a></p>

<details>
  <summary>Engilsh</summary>

- This project serves to backend development, aiming to build a complete RESTful CRUD API.

- The project primarily utilizes the following technologies:

# Tech Stack: 
- It uses Node.js as the runtime environment, Express as the web application framework, and MongoDB as the database (also referred to as the MERN stack, but without React). Additionally, Mongoose is a MongoDB Object Data Modeling (ODM) library for Node.js, used to simplify interaction with the MongoDB database.

# Core Functionalities (CRUD): 
- The project's core is to implement basic data operations for products, including Create, Read, Update, and Delete.
  ##  Create Product (Create):
  - Via the POST /api/products route, product data (e.g., name, quantity, price, image) is stored in the MongoDB database.
  ## Read Products (Read):
    - Retrieve a list of all products from the database via the GET /api/products route.
    - Retrieve detailed information for a single product based on its unique ID via the GET /api/product/:id route.
  ## Update Product (Update):
    - Update information for an existing product based on its ID via the PUT /api/product/:id route.
  ## Delete Product (Delete):
    - Remove a specific product from the database based on its ID via the DELETE /api/product/:id route.
    - Project Structure and Practices: To enhance code maintainability and organization, the project emphasizes breaking down API logic into different components:
    - Models: Define the structure (Schema) of product data in the database, such as fields for product name, quantity, price, and image.
    - Routes: Define paths for different API endpoints and direct them to corresponding controller functions.
    - Controllers: Contain the actual business logic for handling specific API requests, such as how to create, read, update, or delete data from the database.
# Development and Testing Tools: 
- Uses various tools to aid development and testing:
    - Visual Studio Code: As the code editor.
    - Nodemon: Automatically restarts the server during development when code changes, improving development efficiency.
    - Thunder Client, Insomnia, Postman: These are tools used for testing API endpoints, allowing users to send HTTP requests and view responses.
    - Git Bash and GitHub: Used for version control and code hosting, utilizing .gitignore to exclude large or sensitive files (like node_modules) from being committed to the repository.
# Database Setup: 
- Includes setting up a free-tier database on MongoDB Atlas, creating users, configuring IP access, and obtaining the connection string.
- In summary, this project building a complete backend API based on Node.js, Express, and MongoDB, learning how to organize code, test APIs, and deploy the project to a version control system.
</details>

<details>
  <summary>中文</summary>
  - 本專案用於後端開發，旨在建立完整的 RESTful CRUD API。

- 本專案主要使用以下技術：

# 技術堆疊：
  - 它使用 Node.js 作為執行時間環境，Express 作為 Web 應用框架，MongoDB 作為資料庫（也稱為 MERN 技術棧，但不包含 React）。此外，Mongoose 是一個用於 Node.js 的 MongoDB 物件資料建模 (ODM) 函式庫，用於簡化與 MongoDB 資料庫的交互作用。

# 核心功能 (CRUD)：
  - 此專案的核心是實現產品的基本資料操作，包括建立、讀取、更新和刪除。
## 建立產品 (Create)：
  - 透過 POST /api/products 路由，將產品資料（例如名稱、數量、價格、圖片）儲存在 MongoDB 資料庫中。
## 讀取產品 (Read)：
  - 透過 GET /api/products 路由從資料庫中檢索所有產品清單。
  - 透過 GET /api/product/:id 路由，根據產品的唯一 ID 檢索單一產品的詳細資訊。
## 更新產品 (Update)：
- 透過 PUT /api/product/:id 路由，根據產品 ID 更新現有產品的資訊。
## 刪除產品 (Delete)：
  - 透過 DELETE /api/product/:id 路由，根據產品 ID 從資料庫中刪除特定產品。
  - 專案結構和實踐：為了增強程式碼的可維護性和組織性，該專案強調將 API 邏輯分解為不同的元件：
  - 模型：定義資料庫中產品資料的結構（Schema），例如產品名稱、數量、價格和圖片等欄位。
  - 路由：定義不同 API 端點的路徑，並將其導向對應的控制器函數。
  - 控制器：包含處理特定 API 要求的實際業務邏輯，例如如何在資料庫中建立、讀取、更新或刪除資料。
# 開發和測試工具：
  - 使用各種輔助開發和測試的工具：
  - Visual Studio Code：作為程式碼編輯器。
  - Nodemon：在開發過程中，當程式碼變更時自動重新啟動伺服器，提高開發效率。
  - Thunder Client、Insomnia、Postman：這些工具用於測試 API 端點，允許使用者發送 HTTP 請求並查看回應。
  - Git Bash 和 GitHub：用於版本控制和程式碼託管，利用 .gitignore 檔案阻止大型或敏感檔案（如 node_modules）提交到程式碼庫。
# 資料庫設定：
  - 包括在 MongoDB Atlas 上設定免費資料庫、建立使用者、設定 IP 存取以及取得連接字串。
  - 總結來說，本專案基於 Node.js、Express 和 MongoDB 建立了一個完整的後端 API，學習如何組織程式碼、測試 API 以及將專案部署到版本控制系統。
</details>
