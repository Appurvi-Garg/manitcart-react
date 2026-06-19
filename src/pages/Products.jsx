import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/global.css";
import "../css/products.css";
import { products } from "../data/products";

function Products() {
  
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
      🔍 Search Products
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

      <div className="chip active">
        All
      </div>

      <div className="chip">
        Electronics
      </div>

      <div className="chip">
        Books
      </div>

      <div className="chip">
        Cycles
      </div>

      <div className="chip">
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

  {products.map((product) => (

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

        <a href="#" className="view-btn">
          View Details
        </a>

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