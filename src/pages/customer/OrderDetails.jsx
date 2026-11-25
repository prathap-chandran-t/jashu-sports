
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Package, MapPin } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function OrderDetails() {
  const { id } = useParams();
  const { currentUser } = useAuth();

  const allOrders = JSON.parse(
    localStorage.getItem("jashu-orders") || "[]"
  );

  const order = allOrders.find(
    (item) =>
      String(item.id) === id &&
      item.customer.email === currentUser?.email
  );

  if (!currentUser || !order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Order Not Found</h2>
        <Link to="/my-orders" className="mt-5 text-[#F97316]">
          Back to My Orders
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/my-orders"
          className="flex items-center gap-2 text-gray-600 mb-8 hover:text-[#F97316]"
        >
          <ArrowLeft size={18} /> Back to My Orders
        </Link>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap justify-between gap-4 border-b pb-6">
            <div>
              <h1 className="text-2xl font-bold">Order Details</h1>
              <p className="text-gray-500 mt-2">Order ID: {order.id}</p>
            </div>

            <span className="h-fit bg-green-50 text-green-600 px-4 py-2 rounded-full font-semibold">
              {order.status}
            </span>
          </div>

          <div className="py-6 border-b">
            <div className="flex items-center gap-2 mb-5">
              <Package className="text-[#F97316]" />
              <h2 className="text-lg font-bold">Ordered Products</h2>
            </div>

            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain bg-gray-50 rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <p className="font-bold">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>

          <div className="py-6 border-b">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-[#F97316]" />
              <h2 className="text-lg font-bold">Delivery Address</h2>
            </div>

            <p className="font-semibold">{order.customer.name}</p>
            <p className="text-gray-600">{order.customer.email}</p>
            <p className="text-gray-600">{order.customer.phone}</p>
            <p className="text-gray-600">{order.customer.address}</p>
            <p className="text-gray-600">
              {order.customer.city} - {order.customer.pincode}
            </p>
          </div>

          <div className="pt-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Method</span>
              <span className="font-semibold">{order.paymentMethod}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Order Date</span>
              <span className="font-semibold">{order.orderDate}</span>
            </div>

            <div className="border-t pt-4 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-[#F97316]">
                ₹{order.total.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OrderDetails;
