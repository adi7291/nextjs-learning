'use client';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
export default function Layout({ children }) {
    const [checkingAuth, setCheckingAuth] = useState(true)
    const router = useRouter()
    useEffect(() => {
        const isLogged = localStorage.getItem('isLoggedIn');
        
        if(!isLogged){
            router.replace('/login')
        }
        setCheckingAuth(false)
    },[checkingAuth])
    return (
        <>
            {checkingAuth ? (<div>Loading.....</div>) : (
                <div className="flex min-h-screen">
                    <Sidebar />

                    <div className="flex flex-col flex-1">

                        <Navbar />
                        <main className="flex-1 p-6">
                            {children}
                        </main>

                    </div>
                </div>)
            }
        </>


    )
}