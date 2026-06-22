import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/sellProduct.css";

function SellProduct() {
  const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [category, setCategory] = useState("");
const [location, setLocation] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState("");
const [message, setMessage] = useState("");

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="sell-form">

  <h1>Sell Your Product</h1>

  <input
    type="text"
    placeholder="Product Name"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <br /><br />

  <input
    type="text"
    placeholder="Price"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
  />

  <br /><br />

  <input
  type="text"
  placeholder="Category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
/>

  <br /><br />

<input
  type="text"
  placeholder="Location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
/>

<br /><br />
<textarea
  placeholder="Product Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
></textarea>

<br /><br />
<input
  type="file"
  accept="image/*"
  onChange={(e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);

  }}
/>

<br /><br />
{image && (
  <img
  src={image}
  alt="Preview"
  className="preview-image"
/>
)}

  <br /><br />
  {message && (
  <p>{message}</p>
)}
 

  <button
  onClick={() => {
    if (!title || !price || !category) {
      alert("Please fill all required fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      title,
      price,
      category,
      location,
      description,
      image,
      createdAt: new Date().toLocaleDateString(),
       seller: {
    name: "MANIT Student",
     college: "MANIT Bhopal"
  }
    };

    console.log(newProduct);
    const existingProducts =
  JSON.parse(
    localStorage.getItem("products")
  ) || [];

  existingProducts.push(newProduct);

localStorage.setItem(
  "products",
  JSON.stringify(existingProducts)
);
setMessage("✅ Product Added Successfully");
setTimeout(() => {
  setMessage("");
}, 3000);

console.log(existingProducts);
     setTitle("");
  setPrice("");
  setCategory("");
  setLocation("");
  setDescription("");
  setImage("");


  }}
>
  Submit Product
</button>
</div>
</div>

      <Footer />
    </>
  );
}

export default SellProduct;