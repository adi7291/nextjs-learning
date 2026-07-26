"use client";
import { useState, useEffect } from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaShoppingCart, FaHeart,FaSignOutAlt , FaUserCircle } from "react-icons/fa";
import getCurrentUser from '@/app/utils/auth';
import {logOut} from '@/app/utils/logout';

export default function Navbar() {
    const [user, setUser] = useState(null)
    const [showMenu, setShowMenu] = useState(false);
    const router=useRouter()
    useEffect(() => {
        setUser(getCurrentUser());

    }, [])

    const handleLogout=()=>{
        logOut()
        router.replace('/login')
    }

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
                <div className="relative">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        <FaUserCircle size={32} />
                    </button>

                    {showMenu && (
                        <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-xl border z-50">
                            {/* User Info */}
                            <div className="p-2 border-b">
                                <div className="flex items-center gap-3">
                                  
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            {user?.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            {user?.email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Menu Items */}
                            <div className="py-2">
                                <Link
                                    href="/profile"
                                    className="block  px-2 py-1 hover:bg-gray-100"
                                >
                                   <span className='text-gray-500'> My Profile</span> 
                                </Link>

                                <Link
                                    href="/orders"
                                    className="block px-2 py-1 hover:bg-gray-100"
                                >
                                   <span className='text-gray-500'>Orders</span> 

                                    
                                </Link>

                                <Link
                                    href="/wishlist"
                                    className="block px-2 py-1 hover:bg-gray-100"
                                >
                                    <span className='text-gray-500'>Wishlist</span> 
                                </Link>
                            </div>

                            {/* Logout */}
                            <div className="border-t p-1">
                                <button
                                   onClick={handleLogout}
                                    className="w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg flex items-center justify-center gap-2"
                                >
                                    <FaSignOutAlt />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </header>
    );
}