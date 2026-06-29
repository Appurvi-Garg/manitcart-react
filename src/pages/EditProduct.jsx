
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/sellProduct.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [category, setCategory] = useState("");
const [location, setLocation] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState("");
const [message, setMessage] = useState("");
const { id } = useParams();
const navigate = useNavigate();
useEffect(() => {

    const fetchProduct = async () => {

        const response = await fetch(
            `http://localhost:5000/products/${id}`
        );

        const data = await response.json();

        setTitle(data.title);
setPrice(data.price);
setCategory(data.category);
setLocation(data.location);
setDescription(data.description);
setImage(data.image);

    };

    fetchProduct();

}, [id]);

const handleUpdate = async () => {

  try {

    const response = await fetch(
      `http://localhost:5000/products/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          category,
          location,
          description,
          image,
        }),
      }
    );

    const updatedProduct = await response.json();

    console.log(updatedProduct);

    alert("Product Updated Successfully!");
    setTimeout(() => {
  navigate("/my-listings");
}, 1000);

  } catch (error) {

    console.log(error);

  }

};

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
 

  <button onClick={handleUpdate}>
   Update Product
</button>
</div>
</div>

      <Footer />
    </>
  );
}

export default EditProduct;