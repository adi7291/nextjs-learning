import Link from "next/link";
import '../../globals.css';
async function getProducts() {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    return data.products
}

export default async function Products() {
    const products = await getProducts()
    // const products=[ 
    // { id: 1, name: "Product 1" },
    // { id: 2, name: "Product 2" },
    // { id: 3, name: "Product 3" },
    // { id: 4, name: "Product 4" },
    // { id: 5, name: "Product 5" },
    // { id: 6, name: "Product 6" },
    // { id: 7, name: "Product 7" },
    // { id: 8, name: "Product 8" },
    // { id: 9, name: "Product 9" },
    // { id: 10, name: "Product 10" },]
    return <>
        <h1> Products</h1>
        <div className="product-list">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <Link href={`products/${product.id}`}>


                        <img
                            src={product.thumbnail}
                            width="200"
                        />

                        <h3>{product.title}</h3>

                        <p>${product.price}</p>


                    </Link>
                </div>

            ))}    
        </div>

    </>
}