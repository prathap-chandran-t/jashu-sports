
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

function Wishlist() {
  const { wishlistItems, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-[#111827] text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#F97316] font-bold tracking-widest text-sm">
            YOUR FAVORITES
          </p>

          <h1 className="text-4xl font-extrabold mt-3">
            MY WISHLIST
          </h1>

          <p className="text-gray-300 mt-3">
            {wishlistItems.length} Saved Products
          </p>
        </div>
      </section>

      {/* Wishlist Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <Heart
              size={60}
              className="mx-auto text-gray-300"
            />

            <h2 className="text-2xl font-bold mt-5">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Save your favorite sports products here.
            </p>

            <Link
              to="/products"
              className="inline-block mt-6 bg-[#F97316] text-white px-7 py-3 rounded-lg font-semibold hover:bg-orange-600"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain"
                  />
                </Link>

                <div className="p-5">

                  <p className="text-sm text-gray-400">
                    {product.category}
                  </p>

                  <h3 className="text-lg font-bold mt-1">
                    {product.name}
                  </h3>

                  <p className="text-xl font-extrabold mt-3">
                    ₹{product.price}
                  </p>

                  <div className="flex items-center justify-between mt-5">

                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-2 bg-[#F97316] text-white px-4 py-3 rounded-lg hover:bg-orange-600"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>

                    <button
                      onClick={() => toggleWishlist(product)}
                      className="p-3 border border-gray-200 rounded-lg text-red-500 hover:bg-red-50"
                      title="Remove from Wishlist"
                    >
                      <Trash2 size={19} />
                    </button>

                  </div>
                </div>
              </div>
            ))}

          </div>
        )}
      </section>
    </main>
  );
}

export default Wishlist;
