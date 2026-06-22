import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/global.css";
import "../css/products.css";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

const [allProducts, setAllProducts] = useState(products);
useEffect(() => {

  const savedProducts =
    JSON.parse(
      localStorage.getItem("products")
    ) || [];

  setAllProducts([
    ...products,
    ...savedProducts
  ]);

}, []);
  const filteredProducts = allProducts.filter((product) => {

  const matchesSearch =
    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;

});
  return (
    <>
      <Navbar />

      
      {/* HERO */}

      <section className="container hero">

        <div className="hero-text">

          <h1>Browse Products</h1>

          <p>
            Find affordable books, electronics,
            hostel essentials and more from students
            across MANIT campus.
          </p>

        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Student"
        />

      </section>
       {/* TOP FILTERS */}

  <div className="container top-filters">

    <div className="filter-box">

  <input
    type="text"
    placeholder="Search Products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

</div>

    <div className="filter-box">
      📂 All Categories
    </div>

    <div className="filter-box">
      💰 Price Range
    </div>

    <div className="filter-box">
      ⚡ Newest First
    </div>

  </div>
  <section className="container main-layout">

  {/* Sidebar */}

  <aside className="sidebar">

    <h3>Categories</h3>

    <ul>

      <li>💻 Electronics</li>
      <li>📚 Books</li>
      <li>🚲 Cycles</li>
      <li>🛏 Hostel Items</li>
      <li>🎒 Fashion</li>
      <li>⚽ Sports</li>

    </ul>

  </aside>

  {/* Product Area */}

  <div>

    <div className="chips">

      <div
       className={`chip ${
       selectedCategory === "All" ? "active" : ""
      }`}
       onClick={() => setSelectedCategory("All")}
      >
        All
      </div>

      <div
  className={`chip ${
    selectedCategory === "Electronics" ? "active" : ""
  }`}
  onClick={() => setSelectedCategory("Electronics")}
>
  Electronics
</div>

      <div
  className={`chip ${
    selectedCategory === "Fashion" ? "active" : ""
  }`}
  onClick={() => setSelectedCategory("Fashion")}
>
  Fashion
</div>

      <div
  className={`chip ${
    selectedCategory === "Cycles" ? "active" : ""
  }`}
  onClick={() => setSelectedCategory("Cycles")}
>
  Cycles
</div>

      <div
  className={`chip ${
    selectedCategory === "Hostel Items" ? "active" : ""
  }`}
  onClick={() => setSelectedCategory("Hostel Items")}
>
  Hostel Items
</div>

    </div>

    <div className="section-title">
      

      <h2>Trending Deals</h2>

      <a href="#">
        View All
      </a>

    </div>
    <div className="products-grid">

 {filteredProducts.map((product) => (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
      />

      <div className="card-content">

        <div className="product-title">
          {product.title}
        </div>

        <div className="price">
          {product.price}
        </div>

        <div className="location">
          {product.location}
        </div>

        <div className="condition">
          {product.condition}
        </div>

        <br />

        <Link
          to={`/product/${product.id}`}
          className="view-btn"
          >
         View Details
        </Link>

      </div>

    </div>

  ))}

</div>

  </div>

</section>

      <Footer />
    </>
  );
}

export default Products;