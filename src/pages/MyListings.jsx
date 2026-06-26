import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import "../css/global.css";
import "../css/myListings.css";

function MyListings() 
{
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {

  const fetchMyProducts = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/products"
      );

      const data = await response.json();

      setMyProducts(data);

    } catch (error) {

      console.log(error);

    }

  };

  fetchMyProducts();

}, []);
const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Delete this product?"
  );

  if (!confirmDelete) return;

  try {

    await fetch(
      `http://localhost:5000/products/${id}`,
      {
        method: "DELETE",
      }
    );

    setMyProducts(
      myProducts.filter(
        (product) => product._id !== id
      )
    );

  } catch (error) {

    console.log(error);

  }

};
{myProducts.map((product) => (
  <div
    className="my-listing-card"
    key={product._id}
  >
    ...
  </div>
))}

  return (
    <>
      <Navbar />

      <div className="container">

  <h1 className="my-listings-title">
  My Listings
</h1>
<p className="listing-count">
  {myProducts.length} Listings
</p>

  {myProducts.length === 0 ? (

    <h3 className="no-listings">
      No Listings Yet
    </h3>

  ) : (

    <div className="my-listings-grid">

      {myProducts.map((product) => (

        <div
          className="my-listing-card"
          key={product._id}
        >

          <img
            src={product.image}
            alt={product.title}
          />

          <div className="my-listing-content">

            <h3>{product.title}</h3>

            <p className="my-listing-price">
  ₹{product.price}
</p>

            <p className="my-listing-category">
              {product.category}
            </p>

          </div>
          <button
  className="delete-btn"
  onClick={() => handleDelete(product._id)}
>
  Delete
</button>

        </div>

      ))}

    </div>

  )}

</div>

      <Footer />
    </>
  );
}

export default MyListings;