import { ShoppingCart, Star } from "lucide-react";
import products from "../../data/products";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
function FeaturedProducts() {
  const { addToCart } = useCart();
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-[#F97316] font-bold tracking-widest text-sm">
              OUR COLLECTION
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mt-3">
              FEATURED PRODUCTS
            </h2>

            <p className="text-gray-500 mt-3">
              Discover our popular sports products.
            </p>
          </div>

          <button className="hidden sm:block text-[#F97316] font-semibold hover:text-orange-700">
            <Link
              to="/products"
              className="hidden sm:block text-[#F97316] font-semibold hover:text-orange-700"
            >
              View All →
            </Link>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group"
            >
              {/* Product Image */}
              <div className="h-64 bg-gray-100 overflow-hidden">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain"
                  />
                </Link>
              </div>

              {/* Product Details */}
              <div className="p-5">
                <p className="text-sm text-gray-400">{product.category}</p>

                <h3 className="text-lg font-bold text-[#111827] mt-2">
                  <Link
                    to={`/products/${product.id}`}
                    className="font-bold text-gray-900 hover:text-orange-500"
                  >
                    {product.name}
                  </Link>
                </h3>

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
      </div>
    </section>
  );
}

export default FeaturedProducts;
