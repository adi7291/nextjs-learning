'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Link from "next/link";
export default function LoginSuccess(){

  const router=useRouter()
  useEffect(()=>{
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if(!isLoggedIn){
      router.push('/login');
    }
  })
    return (
         
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full text-center">

        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center w-24 h-24 rounded-full bg-green-100">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mt-8">
          Login Successful!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mt-3">
          You are logged in successfully.
        </p>

        {/* Button */}
        <Link href="/products">
          <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300">
            Explore Products
          </button>
        </Link>

      </div>
    
    )
}