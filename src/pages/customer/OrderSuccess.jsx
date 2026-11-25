
import { Link } from "react-router-dom";
import { Package, ShoppingBag, ArrowRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function MyOrders() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl font-bold text-[#111827]">
          Please Login First
        </h2>
        <Link
          to="/login"
          className="mt-5 bg-[#F97316] text-white px-6 py-3 rounded-lg"
        >
          Login
        </Link>
      </div>
    );
  }

  const allOrders = JSON.parse(
    localStorage.getItem("jashu-orders") || "[]"
  );

  const myOrders = allOrders.filter(
    (order) => order.customer.email === currentUser.email
  );

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-[#111827] mb-2">
          My Orders
        </h1>

        <p className="text-gray-500 mb-8">
          Track and view your JASHU SPORTS orders.
        </p>

        {myOrders.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <Package size={60} className="mx-auto text-gray-300 mb-5" />

            <h2 className="text-xl font-bold text-gray-800">
              No Orders Yet
            </h2>

            <p className="text-gray-500 mt-2">
              You haven't placed any orders yet.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 mt-6 bg-[#F97316] text-white px-6 py-3 rounded-lg"
            >
              Start Shopping <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {myOrders.slice().reverse().map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-sm p-6"
              >
                <div className="flex flex-wrap justify-between gap-4 border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-bold">{order.id}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="font-semibold">{order.orderDate}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Order Status</p>
                    <span className="text-green-600 font-semibold">
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="py-5 space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain bg-gray-50 rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
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

                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="font-semibold text-gray-600">
                    Total Amount
                  </span>
                  <span className="text-xl font-bold text-[#F97316]">
                    ₹{order.total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MyOrders;
