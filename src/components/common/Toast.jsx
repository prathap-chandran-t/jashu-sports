
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

function Toast({ message, onClose }) {

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-24 right-6 z-[100] flex items-center gap-3 bg-white shadow-xl border border-gray-200 rounded-xl px-5 py-4">
      <CheckCircle className="text-green-500" size={22} />

      <p className="text-sm font-semibold text-gray-800">
        {message}
      </p>
    </div>
  );
}

export default Toast;
