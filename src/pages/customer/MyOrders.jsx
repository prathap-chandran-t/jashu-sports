
import { Link } from "react-router-dom";
import { Package, ShoppingBag, ArrowRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function MyOrders() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900">
          Please Login First
        </h2>

        <Link
          to="/login"
          className="mt-5 bg-[#F97316] text-white px-6 py-3 rounded-lg"
        >
          Login
        </Link>
      </main>
    );
  }

  const allOrders = JSON.parse(
    localStorage.getItem("jashu-orders") || "[]"
  );

  const myOrders = allOrders.filter(
    (order) => order.customer.email === currentUser.email
  );

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[#111827]">
          My Orders
        </h1>

        <p className="text-gray-500 mt-2">
          Track and manage your orders.
        </p>

        {myOrders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 mt-10 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <Package size={40} className="text-[#F97316]" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-6">
              No Orders Yet
            </h2>

            <p className="text-gray-500 mt-3">
              You haven't placed any orders yet. Start shopping today!
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 mt-7 bg-[#F97316] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              <ShoppingBag size={20} />
              Start Shopping
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="mt-10 space-y-6">
            {myOrders.slice().reverse().map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-sm p-6"
              >
                <div className="flex flex-wrap justify-between gap-4 border-b pb-5">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <Link
                      to={`/my-orders/${order.id}`}
                      className="font-bold text-[#F97316] hover:underline"
                    >
                      {order.id}
                    </Link>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="font-semibold">{order.orderDate}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-semibold text-green-600">
                      {order.status}
                    </p>
                  </div>
                </div>

                <div className="py-5 space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain bg-gray-50 rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <p className="font-semibold">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-5 flex justify-between items-center">
                  <span className="font-semibold text-gray-600">
                    Total Amount
                  </span>

                  <span className="text-xl font-bold text-[#F97316]">
                    ₹{order.total.toLocaleString("en-IN")}
                  </span>
                </div>

                <Link
                  to={`/my-orders/${order.id}`}
                  className="inline-flex items-center gap-2 mt-5 text-[#F97316] font-semibold hover:underline"
                >
                  View Order Details
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MyOrders;
