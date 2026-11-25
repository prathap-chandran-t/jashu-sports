
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, UserPlus } from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(
      localStorage.getItem("jashu-users") || "[]"
    );

    const userExists = existingUsers.some(
      (user) => user.email === formData.email
    );

    if (userExists) {
      alert("Email already registered!");
      return;
    }

    localStorage.setItem(
      "jashu-users",
      JSON.stringify([...existingUsers, formData])
    );

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#111827]">
            JASHU <span className="text-[#F97316]">SPORTS</span>
          </h1>
          <p className="text-gray-500 mt-2">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="w-full p-3 outline-none"
                minLength={6}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
          >
            <UserPlus size={20} />
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[#F97316] font-bold">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Register;
