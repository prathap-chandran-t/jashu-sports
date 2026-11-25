
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { MapPin, Truck, ArrowLeft } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

function Checkout() {
  const { cartItems, cartTotal,clearCart} = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const newOrder = {
    id: Date.now(),
    customer: formData,
    items: cartItems,
    total: cartTotal,
    paymentMethod: "Cash on Delivery",
    status: "Order Placed",
    orderDate: new Date().toLocaleDateString(),
  };

  const existingOrders = JSON.parse(
    localStorage.getItem("jashu-orders") || "[]"
  );

  localStorage.setItem(
    "jashu-orders",
    JSON.stringify([...existingOrders, newOrder])
  );

  clearCart();

  navigate("/order-success", {
    state: { order: newOrder },
  });
};

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl font-bold text-[#111827]">
          Your Cart is Empty
        </h2>
        <Link
          to="/products"
          className="mt-5 bg-[#F97316] text-white px-6 py-3 rounded-lg"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#F97316] mb-8"
        >
          <ArrowLeft size={18} />
          Back to Cart
        </Link>

        <h1 className="text-3xl font-bold text-[#111827] mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-[#F97316]" />
              <h2 className="text-xl font-bold">Delivery Address</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
                { name: "phone", label: "Phone Number", type: "tel" },
                { name: "city", label: "City", type: "text" },
                { name: "pincode", label: "PIN Code", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold mb-2">
                    {field.label}
                  </label>
                  <input
                    required
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#F97316]"
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">
                  Full Address
                </label>
                <textarea
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  placeholder="House number, street, area..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#F97316]"
                />
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="text-[#F97316]" />
                <h2 className="text-xl font-bold">Payment Method</h2>
              </div>

              <div className="border border-orange-400 bg-orange-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800">
                  Cash on Delivery (COD)
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Pay when your order arrives.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition"
            >
              Continue to Place Order
            </button>
          </form>

          <aside className="bg-white p-6 rounded-2xl shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between gap-4 mb-4">
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="font-semibold">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </p>
              </div>
            ))}

            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{cartTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-[#F97316]">
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
