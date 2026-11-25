import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Heart,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

function Navbar() {
  const { cartCount } = useCart();
  const { currentUser, logout } = useAuth();
  const { wishlistItems } = useWishlist();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-[#111827] shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-extrabold text-white">
            JASHU <span className="text-[#F97316]">SPORTS</span>
          </h1>
          <p className="text-xs text-gray-400 tracking-widest">
            PLAY WITH PASSION
          </p>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-[#F97316] font-semibold">
            Home
          </Link>

          <Link to="/products" className="text-gray-300 hover:text-[#F97316]">
            Products
          </Link>

          <Link to="/categories" className="text-gray-300 hover:text-[#F97316]">
            Categories
          </Link>

          <Link to="/about" className="text-gray-300 hover:text-[#F97316]">
            About
          </Link>

          <Link to="/contact" className="text-gray-300 hover:text-[#F97316]">
            Contact
          </Link>
          
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-5">
          <Link
            to="/products"
            className="text-white hover:text-[#F97316] transition"
            title="Search Products"
          >
            <Search size={22} />
          </Link>

          <Link
            to="/wishlist"
            className="relative text-white hover:text-[#F97316] transition"
          >
            <Heart size={22} />

            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#F97316] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {currentUser ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 text-white hover:text-[#F97316] transition"
              >
                <User size={20} />

                <span className="text-sm font-semibold">
                  Hi, {currentUser.name}
                </span>

                <ChevronDown size={16} />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 top-10 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <Link
                    to="/profile"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#F97316]"
                  >
                    My Profile
                  </Link>

                  <Link
                    to="/my-orders"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#F97316]"
                  >
                    My Orders
                  </Link>

                  <hr className="my-2" />

                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setIsUserMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-white hover:text-[#F97316] transition"
              title="Login"
            >
              <User size={22} />
            </Link>
          )}

          <div className="relative">
            <Link
              to="/cart"
              className="relative flex items-center gap-2 text-white hover:text-[#F97316] transition"
            >
              <div className="relative">
                <ShoppingCart size={22} />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#F97316] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>

              <span className="hidden sm:block text-sm font-semibold">
                Cart
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? "✕" : <Menu size={26} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
