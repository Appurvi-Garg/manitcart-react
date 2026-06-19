import "../css/global.css";
import "../css/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const products = [
  {
    title: "Dell Laptop",
    price: "₹20,000",
    location: "Hostel 7",
    image: "https://assets.thehansindia.com/h-upload/2023/04/26/1348625-dell.webp"
  },

  {
    title: "Headphones",
    price: "₹1,000",
    location: "Hostel 5",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
  },

  {
    title: "Shoes",
    price: "₹500",
    location: "Hostel 3",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
  }
];
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

     {products.map((product) => (

    <div className="product-card">

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

        <a href="#" className="view-btn">
          View Details
        </a>

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