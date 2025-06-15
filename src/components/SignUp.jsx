import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Sign Up successful!");
    if (onLogin) onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200 px-4">
      <div className="backdrop-blur-xl bg-white/60 shadow-2xl rounded-3xl p-10 max-w-lg w-full border border-purple-100">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-8">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: "Full Name", name: "name", type: "text", placeholder: "Your full name" },
            { label: "Email Address", name: "email", type: "email", placeholder: "example@mail.com" },
            { label: "Password", name: "password", type: "password", placeholder: "••••••••" },
            { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Re-enter password" },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-purple-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-xl text-lg font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-700 font-semibold hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
