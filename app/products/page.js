import Link from "next/link";

export default function Products(){
    const products=[ 
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
    { id: 9, name: "Product 9" },
    { id: 10, name: "Product 10" },]
    return<>
    <h1> Products</h1>
    {products.map((product)=>(
        <div key={product.id}>
            <Link href={`products/${product.id}`}>
            {product.name}
            </Link>
        </div>
    ))}
    </>
}