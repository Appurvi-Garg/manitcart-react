import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/global.css";
import "../css/products.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

const [allProducts, setAllProducts] = useState([]);
useEffect(() => {

  const fetchProducts = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/products"
      );

      const data = await response.json();

      setAllProducts(data);

    } catch (error) {

      console.log(error);

    }

  };

  fetchProducts();

}, []);


const sortedProducts = [...allProducts];
  const filteredProducts = sortedProducts.filter((product) => {

  const matchesSearch =
    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;

});
const categories = [
  "All",
  ...new Set(
    sortedProducts.map(
      product => product.category
    )
  )
];
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

      {categories.map((category) => (

  <div
    key={category}
    className={`chip ${
      selectedCategory === category
        ? "active"
        : ""
    }`}
    onClick={() =>
      setSelectedCategory(category)
    }
  >
    {category}
  </div>

))}

    </div>

    <div className="section-title">
      

      <h2>Trending Deals</h2>

      <a href="#">
        View All
      </a>

    </div>
    <p className="product-count">
  {filteredProducts.length} Products Found
</p>
    <div className="products-grid">

 {filteredProducts.length === 0 ? (

  <h3>No products found</h3>

) : (filteredProducts.map((product) => (
    <div
     key={product._id} 
    className="product-card">

      <img
        src={product.image}
        alt={product.title}
      />

      <div className="card-content">
        <div className="category-badge">
  {product.category}
</div>

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
          to={`/product/${product._id}`}
          className="view-btn"
          >
         View Details
        </Link>
        

      </div>

    </div>

  ))
)}

</div>

  </div>

</section>

      <Footer />
    </>
  );
}

export default Products;