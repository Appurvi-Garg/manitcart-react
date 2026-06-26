const Product = require("./models/Product");
const connectDB = require("./db");
const express = require("express");

const app = express();
app.use(express.json());

const products = [
  {
    id: 1,
    title: "HP Laptop",
    price: 30000
  },
  {
    id: 2,
    title: "Cricket Bat",
    price: 1200
  }
];



app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.post("/products", (req, res) => {

  const newProduct = req.body;

  products.push(newProduct);

  res.json({
    message: "Product Added",
    product: newProduct
  });

});
app.delete("/products/:id", (req, res) => {

  const id = Number(req.params.id);

  const productIndex = products.findIndex(
    (product) => product.id === id
  );

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product Not Found"
    });
  }

  products.splice(productIndex, 1);

  res.json({
    message: "Product Deleted"
  });

});
connectDB();
app.listen(5000, () => {
  console.log("Server running on port 5000");
});