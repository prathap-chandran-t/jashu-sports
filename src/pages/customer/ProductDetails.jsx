import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  ShoppingCart,
  Star,
  ArrowLeft,
  Minus,
  Plus,
  Heart,
} from "lucide-react";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-900">Product Not Found</h2>

        <Link
          to="/products"
          className="mt-5 bg-orange-500 text-white px-6 py-3 rounded-lg"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 mb-10"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-sm">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-xl flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              {product.category}
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-5">
              <Star size={20} className="text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-gray-500">Customer Rating</span>
            </div>

            <p className="text-3xl font-bold text-orange-500 mt-6">
              ₹{product.price}
            </p>

            <p className="text-gray-600 leading-7 mt-5">
              Explore quality sports equipment from JASHU SPORTS. Designed to
              support your performance and make every game better.
            </p>

            <div className="mt-6">
              <p className="font-semibold text-gray-800 mb-3">Quantity</p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="border border-gray-300 p-2 rounded-lg hover:bg-gray-100"
                  disabled={quantity === 1}
                >
                  <Minus size={18} />
                </button>

                <span className="font-bold text-xl w-8 text-center">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="border border-gray-300 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => toggleWishlist(product)}
              className="mt-6 flex items-center justify-center gap-3 border border-gray-300 hover:border-red-500 hover:text-red-500 font-semibold py-4 rounded-lg transition"
            >
              <Heart
                size={20}
                className={
                  isWishlisted(product.id)
                    ? "text-red-500 fill-red-500"
                    : "text-gray-500"
                }
              />
              {isWishlisted(product.id)
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
            </button>

            <button
              type="button"
              onClick={() => {
                addToCart({ ...product, quantity });
                setQuantity(1);
              }}
              className="mt-8 flex items-center justify-center gap-3 bg-[#111827] hover:bg-orange-500 text-white font-semibold py-4 rounded-lg transition"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
