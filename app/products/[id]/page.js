
export default async function ProductDetails({params}){
    const productId=await params
    console.log(productId)
    return <>
          <h1>This is Product {productId.id}</h1>
    </>
}