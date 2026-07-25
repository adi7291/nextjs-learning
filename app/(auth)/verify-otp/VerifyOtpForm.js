"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function VerifyOtpForm() {

    const [otp, setOtp] = useState("");
    const router = useRouter();
     useEffect(()=>{
        const foundOtp =localStorage.getItem('otp');
        if(!foundOtp){
            
            router.push("/login");
        }
     })
    function handleSubmit(e) {
        e.preventDefault();
        const savedOtp = localStorage.getItem("otp");
        if(!savedOtp){
            alert("No OTP found. Please request a new OTP.");
            return router.push("/login");
        }
        if (savedOtp === otp) {
            localStorage.setItem("isLoggedIn","true");
            localStorage.removeItem("otp");
            router.push("/login-success");

        } else {

            alert("Invalid OTP");

        }

    }

    return (

        <form onSubmit={handleSubmit} className="bg-white p-8 text-black rounded-lg shadow-lg w-full max-w-md">

            <h1 className="text-3xl font-bold text-center mb-6">
                Verify OTP
            </h1>
            <input
                type="text"
                value={otp}
                className="w-full text-black border rounded-md p-3"
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
            />

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md mt-3 hover:bg-blue-700 transition">
                Verify OTP
            </button>
        </form>

    )

}