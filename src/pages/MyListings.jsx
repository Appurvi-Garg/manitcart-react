import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import "../css/global.css";
import "../css/myListings.css";

function MyListings() 
{
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {

  const savedProducts =
    JSON.parse(
      localStorage.getItem("products")
    ) || [];

  setMyProducts(savedProducts);

}, []);
const handleDelete = (id) => {

  if (!window.confirm("Delete this product?")) {
    return;
  }

  const updatedProducts =
    myProducts.filter(
      (product) => product.id !== id
    );

  localStorage.setItem(
    "products",
    JSON.stringify(updatedProducts)
  );

  setMyProducts(updatedProducts);

};

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
          key={product.id}
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
  onClick={() => handleDelete(product.id)}
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