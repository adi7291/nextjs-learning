"use client";

import Link from "next/link";
import { FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      {/* Left Section */}
      <Link href="/dashboard" className="flex items-center gap-3">
        <div className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          Q
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            QuickPlace
          </h1>
          <p className="text-xs text-gray-500">
            Shop Faster
          </p>
        </div>
      </Link>

      {/* Right Section */}
      <div className="flex items-center gap-8">

        {/* Wishlist */}
        <Link
          href="/wishlist"
          className="relative text-gray-700 hover:text-red-500 transition"
        >
          <FaHeart size={24} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1.5">
            2
          </span>
        </Link>

        {/* Cart */}
        <Link
          href="/cart"
          className="relative text-gray-700 hover:text-blue-600 transition"
        >
          <FaShoppingCart size={24} />

          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] rounded-full px-1.5">
            3
          </span>
        </Link>

        {/* Profile */}
        <Link
          href="/profile"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          <FaUserCircle size={32} />
        </Link>

      </div>
    </header>
  );
}