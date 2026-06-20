import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import "../css/productDetails.css";
import { Link } from "react-router-dom";
function ProductDetails() {

  const { id } = useParams();
  const product = products.find(
  (p) => p.id === Number(id)
);
const similarProducts = products.filter(
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
        {product.seller.name}
      </div>

      <div className="seller-college">
        {product.seller.college}
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
    ?  product.seller.phone
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
            src={item.image}
            alt={item.title}
          />

          <h4>{item.title}</h4>

          <p>{item.price}</p>

        </Link>

      ))}


    </div>

  </div>
);
}

export default ProductDetails;