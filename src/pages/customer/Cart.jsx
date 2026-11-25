import { Link } from "react-router-dom";
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from "lucide-react";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <div className="mb-10">
          <p className="text-[#F97316] font-bold tracking-widest text-sm">
            JASHU SPORTS
          </p>

          <h1 className="text-4xl font-extrabold text-[#111827] mt-3">
            SHOPPING CART
          </h1>

          <p className="text-gray-500 mt-2">
            Review your selected sports products.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <ShoppingCart size={55} className="mx-auto text-gray-300" />

            <h2 className="text-2xl font-bold mt-5 text-[#111827]">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some sports products to your cart.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 mt-7 bg-[#F97316] text-white px-7 py-3 rounded-lg font-semibold hover:bg-orange-600"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Products */}
            <div className="lg:col-span-2 space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row gap-6"
                >
                  {/* Product Image */}
                  <div className="bg-gray-100 rounded-xl w-full sm:w-40 h-40 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-3"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">{item.category}</p>

                    <h3 className="text-xl font-bold text-[#111827] mt-2">
                      {item.name}
                    </h3>

                    <p className="text-orange-500 font-bold text-lg mt-3">
                      ₹{item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-5">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                        className="border rounded-lg p-2 disabled:opacity-40"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="font-bold w-6 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="border rounded-lg p-2 hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700 flex items-center gap-2"
                      >
                        <Trash2 size={18} />
                        <span className="text-sm">Remove</span>
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="sm:text-right">
                    <p className="text-sm text-gray-500">Subtotal</p>

                    <p className="text-xl font-extrabold text-[#111827] mt-2">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-7 shadow-sm h-fit">
              <h2 className="text-xl font-bold text-[#111827]">
                Order Summary
              </h2>

              <div className="flex justify-between mt-7 text-gray-600">
                <span>Total Items</span>
                <span>
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>

              <div className="flex justify-between mt-5 text-gray-600">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>

              <div className="flex justify-between mt-5 text-gray-600">
                <span>Delivery</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>

              <div className="border-t mt-6 pt-6 flex justify-between">
                <span className="font-bold text-lg">Total</span>
                <span className="font-extrabold text-xl text-orange-500">
                  ₹{cartTotal}
                </span>
              </div>

              <Link
                to="/checkout"
                className="block w-full text-center bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/products"
                className="flex items-center justify-center gap-2 mt-5 text-gray-600 hover:text-orange-500"
              >
                <ArrowLeft size={17} />
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;
