import { ShoppingCart, Star } from "lucide-react";
import products from "../../data/products";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import { useState } from "react";

function Products() {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Page Heading */}
      <section className="bg-[#111827] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#F97316] font-bold tracking-widest text-sm">
            JASHU SPORTS COLLECTION
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            OUR PRODUCTS
          </h1>

          <p className="text-gray-300 mt-4">
            Explore our complete sports collection.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-[#111827]">All Products</h2>

          <p className="text-gray-500 text-sm">
            {filteredProducts.length} Products
          </p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search sports products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#F97316]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group"
            >
              <div className="relative">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain hover:scale-105 transition duration-300"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-3 right-3 z-20 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition"
                  title="Add to Wishlist"
                >
                  <Heart
                    size={22}
                    className={
                      isWishlisted(product.id)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-500"
                    }
                  />
                </button>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-400">{product.category}</p>

                <Link
                  to={`/products/${product.id}`}
                  className="text-lg font-bold text-gray-900 hover:text-orange-500"
                >
                  {product.name}
                </Link>

                <div className="flex items-center gap-1 mt-3 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <p className="text-xl font-extrabold text-[#111827]">
                    ₹{product.price}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#F97316] hover:bg-orange-600 text-white p-3 rounded-lg transition"
                    title="Add to Cart"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;
