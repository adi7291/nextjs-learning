import './productdetails.css'
async function getProductDetails(id){
      const res = await fetch(`https://dummyjson.com/products/${id}`);
    if(!res.ok){
        throw new Error('Failed to fetch product details')
    }
    const data= await res.json()
    
    return data 
}



export default async function ProductDetails({params}) {
    const {id}= await params
    console.log('product id',id);
    const product = await getProductDetails(id)
     console.log('product details',product)
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Breadcrumb */}
        <nav className="mb-3 text-sm text-gray-500">
          Home / Products / <span className="text-gray-900">{product.title}</span>
        </nav>

        {/* Product Section */}
        <div className="product-detail">

          {/* Product Image */}
          <div>
            <div className="overflow-hidden rounded-xl border bg-gray-100">
              <img
                src={product.thumbnail}
                alt="Product"
                className="h-[500px] w-full object-contain p-2"
              />
            </div>
          </div>

          {/* Product Information */}
          <div>
            <h1 className=" text-3xl font-bold text-black">
              {product.title}
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              {product.description}
            </p>

            {/* Rating */}
            <div className="mt-2 flex items-center gap-3">
              <span className="rounded bg-green-600 px-2 py-1 text-white">
                ★ {product.rating}
              </span>

              <span className="text-gray-500">
                {product.reviews.length} Reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-2 flex items-center gap-4">
              <span className="text-4xl font-bold text-blue-600">
                {product.price}
              </span>

              <span className="rounded bg-red-100 px-2 py-1 text-sm font-semibold text-red-600">
                6% OFF
              </span>
            </div>

            {/* Category */}
            <div className="mt-2">
              <span className="text-gray-600 font-semibold">
                Category :
              </span>

              <span className="ml-2 text-sm text-gray-600 rounded-full bg-gray-200 px-3 py-1">
                {product.category}
              </span>
            </div>

            {/* Brand */}
            <div className="mt-2 text-sm text-gray-600">
              <span className="font-semibold">
                Brand :
              </span>

              <span className="ml-2 text-sm text-gray-600 rounded-full bg-gray-200 px-3 py-1">
                {product.brand}
              </span>
            </div>

            {/* Stock */}
            <div className="mt-2">
              <span className="font-semibold text-gray-600">
                Available Stock :
              </span>

              <span className="ml-2 text-green-600">
                {product.stock}
              </span>
            </div>
            <span className="rounded-full bg-green-100 mt-3 px-3 py-1 text-sm font-semibold text-green-700">
              {product.availabilityStatus?"In Stock":"Out of stock"}
            </span>
            {/* Buttons */}
            <div className="mt-2 flex gap-4">
              <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
                Add to Cart
              </button>

              <button className="rounded-lg border text-gray-700 border-gray-300 px-8 py-3 font-semibold transition hover:bg-gray-100">
                Buy Now
              </button>
            </div>

          </div>
        </div>

       

      </div>
    </main>
  );
}