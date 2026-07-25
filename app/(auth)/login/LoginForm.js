"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginForm() {
    const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!formData.username.trim()) {
      newErrors.username = "Email or Mobile Number is required";
    } else if (
      !emailRegex.test(formData.username) &&
      !mobileRegex.test(formData.username)
    ) {
      newErrors.username =
        "Enter a valid Email or 10-digit Mobile Number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

 function handleSubmit(e) {
  e.preventDefault();

  if (!validateForm()) return;

  const users =JSON.parse(localStorage.getItem("users"));
  const currentUser = users?.find(user => user.email=== formData.username || user.mobile ===formData.username);
  console.log("Current User:", currentUser);
  if (!currentUser) {
    alert("User not found. Please register first.");
    return router.push("/register");
  }
  localStorage.setItem("user",JSON.stringify(currentUser));
  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log("Generated OTP:", otp);
  // Save data in localStorage
  localStorage.setItem("otp", otp.toString());
  // Navigate to OTP page
 return router.push("/verify-otp");
}
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 text-black rounded-lg shadow-lg w-full max-w-md"
    >
      <h1 className="text-3xl font-bold text-center mb-6">
        Login
      </h1>

      <div className="mb-6">
        <label className="block mb-2 text-black font-medium">
          Email or Mobile Number
        </label>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter Email or Mobile Number"
          className="w-full text-black border rounded-md p-3"
        />

        {errors.username && (
          <p className="text-red-500 text-sm mt-1">
            {errors.username}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
      >
        Login
      </button>

      <p className="text-center mt-5 text-gray-600">
        Don't have an account?
        <a
          href="/register"
          className="text-blue-600 font-semibold ml-1"
        >
          Register
        </a>
      </p>
    </form>
  );
}