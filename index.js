const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
//middleware
//解析JSON請求主體
app.use(express.json());

//解析urlencoded請求主體
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoute);



//啟動伺服器
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


//輸出到console
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
}); //到Browser localhost:3000/會看到Hello from Node API

/*
//Create api(Get All Products)
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}),
*/
/*
  //Get a single product
  app.get("/api/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch {
      res.status(500).json({ message: error, message });
    }
  });*/

//Create API(Create a product)
/*app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/
/*
//update a product
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    //如果找不到產品
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error, message });
  }
});
*/

/*
//delete product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/

//連接到MongoDB資料庫
mongoose
  .connect(
    "mongodb+srv://judy18258:B1IvYskVlyzQCyN4@backenddb.muouf04.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
