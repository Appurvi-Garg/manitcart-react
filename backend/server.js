const express = require("express");

const app = express();

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

app.get("/", (req, res) => {
  res.send("MANITcart Backend Running");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});