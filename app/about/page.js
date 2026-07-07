import Link from "next/link";
export default function About(){
    return <>
    <h1>This is About Page</h1>
    <Link href="/">Home</Link>
      <br />
      <Link href="/contact">Contact</Link>
    </>
}