'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getCurrentUser from "@/app/utils/auth";
import { logOut } from "@/app/utils/logout";
export default function Profile() {

    const [user, setUser] = useState(null);
    const router = useRouter();
    useEffect(() => {
        setUser(getCurrentUser());
    }, [])

    const handleLogout = () => {
        logOut()
        router.replace('/login')
    }
    console.log('loggedIn user is ', user)
    return (
        <div className="max-w-6xl mx-auto p-6">

            {/* Profile Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg flex items-center gap-6">

                <div className="w-24 h-24 rounded-full bg-white text-blue-600 flex items-center justify-center text-4xl font-bold">
                    {user?.name.charAt(0)?.toUpperCase()}
                </div>

                <div>
                    <h1 className="text-3xl font-bold">{user?.name}</h1>
                    <p className="text-blue-100">
                        Frontend Developer
                    </p>

                    <span className="inline-block mt-3 bg-white text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                        Premium Customer
                    </span>
                </div>

            </div>

            {/* Personal Information */}

            <div className="bg-white rounded-xl shadow mt-8 p-8">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Personal Information
                    </h2>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                        Edit Profile
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <label className="text-gray-500 text-sm">
                            Full Name
                        </label>

                        <p className="text-lg font-semibold text-gray-800">
                            {user?.name}
                        </p>
                    </div>

                    <div>
                        <label className="text-gray-500 text-sm">
                            Email Address
                        </label>

                        <p className="text-lg font-semibold text-gray-800">
                            {user?.email}
                        </p>
                    </div>

                    <div>
                        <label className="text-gray-500 text-sm">
                            Mobile Number
                        </label>

                        <p className="text-lg font-semibold text-gray-800">
                            {user?.mobile}
                        </p>
                    </div>

                    <div>
                        <label className="text-gray-500 text-sm">
                            Member Since
                        </label>

                        <p className="text-lg font-semibold text-gray-800">
                            July 2026
                        </p>
                    </div>

                </div>

            </div>

            {/* Shipping Address */}

            <div className="bg-white rounded-xl shadow mt-8 p-8">

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Default Delivery Address
                </h2>

                <p className="text-gray-600 leading-7">
                    221B Baker Street<br />
                    Indiranagar<br />
                    Bengaluru<br />
                    Karnataka - 560038
                </p>

            </div>

            {/* Account Activity */}

            <div className="bg-white rounded-xl shadow mt-8 p-8">

                <h2 className="text-2xl text-gray-800 font-bold mb-6">
                    Account Activity
                </h2>

                <div className="space-y-4">

                    <div className="flex justify-between border-b pb-3">
                        <span className="text-gray-500">Last Login</span>
                        <span className="font-semibold text-gray-500">
                            Today, 10:15 AM
                        </span>
                    </div>

                    <div className="flex  justify-between border-b pb-3">
                        <span className="text-gray-500">Last Order</span>
                        <span className="font-semibold text-gray-500">
                            iPhone 15 Pro
                        </span>
                    </div>

                    <div className="flex text-gray-500 justify-between">
                        <span>Account Status</span>
                        <span className="text-green-600 font-semibold">
                            Active
                        </span>
                    </div>

                </div>

            </div>

            {/* Actions */}

            <div className="grid md:grid-cols-2 gap-6 mt-8">

                <button className="bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
                    Change Password
                </button>

                <button onClick={handleLogout} className="bg-red-600 text-white py-4 rounded-xl hover:bg-red-700 transition">
                    Logout
                </button>

            </div>

        </div>
    )
}