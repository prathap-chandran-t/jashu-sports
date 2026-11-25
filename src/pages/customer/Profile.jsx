
import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, ArrowLeft, Phone, Edit, Save, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { currentUser, updateProfile } = useAuth();

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
  });

  if (!currentUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900">
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile(formData);
    setIsEditing(false);

    alert("Profile updated successfully!");
  };

  return (
    <main className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#F97316] mb-8"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center">
              <User size={38} className="text-[#F97316]" />
            </div>

            <h1 className="text-3xl font-bold text-[#111827] mt-4">
              My Profile
            </h1>

            <p className="text-gray-500 mt-2">
              Welcome to JASHU SPORTS
            </p>
          </div>

          {!isEditing ? (
            <>
              <div className="space-y-5">
                <div className="border rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-2">Full Name</p>
                  <div className="flex items-center gap-3">
                    <User className="text-[#F97316]" size={20} />
                    <p className="font-semibold">{currentUser.name}</p>
                  </div>
                </div>

                <div className="border rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-2">Email Address</p>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#F97316]" size={20} />
                    <p className="font-semibold">{currentUser.email}</p>
                  </div>
                </div>

                <div className="border rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-2">Phone Number</p>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#F97316]" size={20} />
                    <p className="font-semibold">
                      {currentUser.phone || "Not added"}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="w-full mt-7 flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
              >
                <Edit size={18} />
                Edit Profile
              </button>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#F97316]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#F97316]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#F97316]"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg"
                >
                  <Save size={18} />
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      name: currentUser.name || "",
                      email: currentUser.email || "",
                      phone: currentUser.phone || "",
                    });
                    setIsEditing(false);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg"
                >
                  <X size={18} />
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default Profile;
