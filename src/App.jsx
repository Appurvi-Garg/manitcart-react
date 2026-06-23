import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import SellProduct from "./pages/SellProduct";
import MyListings from "./pages/MyListings";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/sell"
          element={<SellProduct />}
        />
        <Route
  path="/my-listings"
  element={<MyListings />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;