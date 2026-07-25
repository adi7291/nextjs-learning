"use client";

import { useState } from "react";
import {useRouter} from "next/navigation";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const router=useRouter()
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Mobile Validation
    const mobileRegex = /^[0-9]{10}$/;

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!validateForm()) return;
    let users =JSON.parse(localStorage.getItem("users")) || [];
    const userExists= users.some( user =>user.email === formData.email || user.mobile ===formData.mobile);
    if(userExists){
      alert("User with this email and mobile numer already exist. Please login");
     return router.push("/login");
  }
  users.push(formData);
  localStorage.setItem("users",JSON.stringify(users));
  router.push("/login");
}


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
    >
      <h1 className="text-3xl text-black font-bold text-center mb-6">
        Register
      </h1>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-black mb-2 font-medium">
          Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full text-black border rounded-md p-3"
          placeholder="Enter your name"
        />

        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Mobile */}
      <div className="mb-4">
        <label className="block text-black mb-2 font-medium">
          Mobile Number
        </label>

        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full text-black border rounded-md p-3"
          placeholder="Enter mobile number"
        />

        {errors.mobile && (
          <p className="text-red-500 text-sm mt-1">
            {errors.mobile}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-black mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full text-black border rounded-md p-3"
          placeholder="Enter email"
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
      >
        Register
      </button>
       <p className="text-center mt-5 text-gray-600">
        Already have an account?
        <a
          href="/login"
          className="text-blue-600 font-semibold ml-1"
        >
          Login
        </a>
      </p>
    </form>
  );
}