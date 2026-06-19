function Navbar() {
  return (
    <nav>
      <div className="container nav-content">

        <div className="logo">
          MANITcart
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for books, laptops, cycles..."
          />
        </div>

        <div className="nav-links">
          <a href="#categories">Categories</a>
          <a href="#">Sell</a>
          <a href="#">My Orders</a>
          <a href="#" className="login-btn">
            Login
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;