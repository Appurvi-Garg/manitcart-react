import "../css/global.css";
import "../css/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { products } from "../data/products";


function Home() {
  
  return (
    <>
      {/* Navbar */}

      <Navbar />

      {/* Hero Section */}

      <section className="hero">
        <div className="container hero-content">

          <div className="hero-text">
            <h1>
              Buy & Sell College <span>Essentials Easily</span>
            </h1>

            <p>
              Find what you need. Sell what you don't. All within your campus.
            </p>

            <div className="hero-buttons">
              <a href="#" className="primary-btn">
                Browse Items
              </a>

              <a href="#" className="secondary-btn">
                Sell Your Item
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://icdmb26.manit.ac.in/images/manit-bakklir.jpg"
              alt="MANIT"
            />
          </div>

        </div>
      </section>
      {/* categories Section */}
      <section id="categories" className="categories">
  <div className="container">

    <h2 className="section-title">
      Popular Categories
    </h2>

    <div className="category-grid">

      <div className="category-card">
        📚
        <h3>Books</h3>
      </div>

      <div className="category-card">
        💻
        <h3>Electronics</h3>
      </div>

      <div className="category-card">
        🚲
        <h3>Cycles</h3>
      </div>

      <div className="category-card">
        🛏️
        <h3>Hostel Items</h3>
      </div>

    </div>

  </div>
</section>
{/* listing Section */}

<section className="products">

  <div className="container">

    <h2 className="section-title">
      Latest Listings
    </h2>

    <div className="product-grid">

     {products.slice(0,3).map((product) => (

    <div className="product-card" key={product.id}>

      <img
        src={product.image}
        alt={product.title}
      />

      <div className="product-info">

        <h3>{product.title}</h3>

        <div className="price">
          {product.price}
        </div>

        <div className="location">
          {product.location}
        </div>

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

{/* footer Section */}
<Footer />

    </>
    
  );
}

export default Home;