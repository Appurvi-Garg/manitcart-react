import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="container nav-content">

        <Link
  to="/"
  className="logo"
>
  MANITcart
</Link>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for books, laptops, cycles..."
          />
        </div>

        <div className="nav-links">
          <Link to="/">
    Home
  </Link>

  <a href="#categories">
    Categories
  </a>

  <Link to="/sell">
    Sell
  </Link>

  <Link to="/my-listings">
    My Listings
  </Link>

  <a href="#" className="login-btn">
    Login
  </a>

</div>

      </div>
    </nav>
  );
}

export default Navbar;