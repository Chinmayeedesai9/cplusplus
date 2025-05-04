// src/pages/Signup.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // mock signup logic
    if (formData.password === formData.confirmPassword) {
      navigate("/");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First name"
            className="px-3 py-2 border rounded"
            value={formData.fname}
            onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Last name"
            className="px-3 py-2 border rounded"
            value={formData.lname}
            onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-3 py-2 border rounded mb-4"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full px-3 py-2 border rounded mb-4"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-3 py-2 border rounded mb-6"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Sign Up</button>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
