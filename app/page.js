import Link from "next/link";
import './globals.css'
export default function Home() {
 
  return (
    <>
    
    <div className="nav-bar">
    <Link href="/about">About</Link>
      <br />
      <Link href="/contact">Contact</Link>
      <Link href="/products">Go to product page</Link>
    
    </div>
     <div className="heading">
     <h1>Welcome to Nextjs we application.</h1>

     </div>
    </>
   
  );
}
