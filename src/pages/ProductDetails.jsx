import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import "../css/productDetails.css";
import { Link } from "react-router-dom";
function ProductDetails() {

  const { id } = useParams();
  const savedProducts =
  JSON.parse(
    localStorage.getItem("products")
  ) || [];
  
const allProducts = [
  ...products,
  ...savedProducts
];
const product = allProducts.find(
  (p) => p.id === Number(id)
);
if (!product) {
  return <h2>Product Not Found</h2>;
}

const similarProducts = allProducts.filter(
  (p) => p.id !== product.id
);
const [showPhone, setShowPhone] = useState(false);
const [wishlist, setWishlist] = useState(false);

 return (
  <div className="container">

    <div className="product-layout">

      <div className="image-section">

        <img
          className="main-image"
          src={product.image}
          alt={product.title}
        />

      </div>

      <div className="product-info">

        <h1 className="product-title">
          {product.title}
        </h1>

        <div className="price">
          {product.price}
        </div>

        <div className="description">

          This item is available on MANITcart.
          Contact seller for more details.

        </div>

        <div className="location">
          {product.location}
        </div>

        <div className="condition">
          {product.condition}
        </div>

      </div>
      <div className="seller-card">

  <h3>About Seller</h3>

  <div className="seller-profile">

    <div className="avatar">
      A
    </div>

    <div>
      <div className="seller-name">
  {product.seller?.name || "MANIT Student"}
</div>

      <div className="seller-college">
  {product.seller?.college || "MANIT Bhopal"}
</div>
    </div>

  </div>

  <button className="contact-btn">
    Contact Seller
  </button>

  <button
  className="phone-btn"
  onClick={() => setShowPhone(true)}
>

  {showPhone
  ? product.seller?.phone || "9876543210"
  : "View Phone Number"}

</button>

  <button
  className="wishlist-btn"
  onClick={() => setWishlist(!wishlist)}
>

  {wishlist
    ? "💚 Added to Wishlist"
    : "❤️ Add to Wishlist"}

</button>


</div>
 </div>

    <h2>Similar Products</h2>

    <div className="similar-products">

      {similarProducts.map((item) => (

        <Link
         to={`/product/${item.id}`}
          className="similar-card"
         key={item.id}
>

          <img
  src={item.image || item.imageUrl}
  alt={item.title}
/>

          <h4>{item.title}</h4>

          <p>{item.price}</p>
          <p>
  Posted on: {product.createdAt}
</p>

        </Link>

      ))}


    </div>

  </div>
);
}

export default ProductDetails;