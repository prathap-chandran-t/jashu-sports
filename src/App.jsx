import { Routes, Route } from "react-router-dom";
import { useCart } from "./context/CartContext";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Toast from "./components/common/Toast";

import Home from "./pages/customer/Home";
import Products from "./pages/customer/Products";
import Categories from "./pages/customer/Categories";
import About from "./pages/customer/About";
import Contact from "./pages/customer/Contact";
import ProductDetails from "./pages/customer/ProductDetails";
import Cart from "./pages/customer/Cart";
import Wishlist from "./pages/customer/Wishlist";
import Register from "./pages/customer/Register";
import Login from "./pages/customer/Login";
import Profile from "./pages/customer/Profile";
import MyOrders from "./pages/customer/MyOrders";
import Checkout from "./pages/customer/Checkout";
import OrderSuccess from "./pages/customer/OrderSuccess";
import OrderDetails from "./pages/customer/OrderDetails";
function App() {
  const { toastMessage, setToastMessage } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/my-orders/:id" element={<OrderDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
