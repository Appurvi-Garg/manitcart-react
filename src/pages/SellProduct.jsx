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
const [imageUrl, setImageUrl] = useState("");

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

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="">Select Category</option>
    <option value="Electronics">Electronics</option>
    <option value="Fashion">Fashion</option>
    <option value="Hostel Items">Hostel Items</option>
  </select>

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
  type="text"
  placeholder="Image URL"
  value={imageUrl}
  onChange={(e) => setImageUrl(e.target.value)}
/>

<br /><br />
{imageUrl && (
  <img
  src={imageUrl}
  alt="Preview"
  className="preview-image"
/>
)}

  <br /><br />

 

  <button
  onClick={() => {
    if (!title || !price || !category) {
      alert("Please fill all required fields");
      return;
    }

    const newProduct = {
      title,
      price,
      category,
      location,
      description,
      imageUrl
    };

    console.log(newProduct);
     setTitle("");
  setPrice("");
  setCategory("");
  setLocation("");
  setDescription("");
  setImageUrl("");


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