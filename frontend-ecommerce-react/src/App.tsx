import "./App.css";
import { Button, ButtonBase, ThemeProvider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Navbar from "./customer/components/Navbar/Navbar";
import customeTheme from "./Theme/customeTheme";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetail from "./customer/pages/Page Details/ProductDetail";
import Review from "./customer/pages/Review/Review";
import Cart from "./customer/pages/Cart/Cart";
import Checkout from "./customer/pages/Checkout/Checkout";
import Account from "./customer/pages/Account/Account";
import { Route, Routes } from "react-router-dom";
import BecomeSeller from "./customer/pages/Become Seller/BecomeSeller";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        {/* <Home /> */}
        {/* <Product /> */}
        {/* {<ProductDetail />} */}
        {/* <Review /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Account /> */}
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/become-seller/*" element={<BecomeSeller />} />

        </Routes>

      </div>
    </ThemeProvider>
  );
}

export default App;
