export const metadata = {
  title: "About | QuickPlace",
  description: "Learn more about QuickPlace",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Hero Section */}
      <div className="bg-slate-900 rounded-2xl p-10 text-white shadow-lg">
        <h1 className="text-5xl font-bold mb-4">About QuickPlace</h1>
        <p className="text-lg leading-8 max-w-3xl">
          Welcome to <span className="font-semibold">QuickPlace</span>, your
          trusted online shopping destination where convenience meets quality.
          Our goal is to make online shopping simple, secure, and enjoyable for
          everyone.
        </p>
      </div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-7">
            At QuickPlace, we believe that shopping should be fast, reliable,
            and affordable. We connect customers with a wide variety of quality
            products ranging from electronics and fashion to home essentials and
            lifestyle products, all in one place.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Why Choose Us?
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✔️ Wide collection of quality products</li>
            <li>✔️ Secure and hassle-free shopping</li>
            <li>✔️ Fast order processing and delivery</li>
            <li>✔️ Easy wishlist and cart management</li>
            <li>✔️ Responsive customer support</li>
          </ul>
        </div>
      </div>

      {/* Features */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center  mb-8">
          What We Offer
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🛍️</div>
            <h3 className="font-semibold text-gray-800 text-lg">Thousands of Products</h3>
            <p className="text-gray-500 text-sm mt-2">
              Browse products from multiple categories.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="font-semibold text-gray-800  text-lg">Wishlist</h3>
            <p className="text-gray-500 text-sm mt-2">
              Save your favorite products for later.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🛒</div>
            <h3 className="font-semibold text-gray-800 text-lg">Easy Cart</h3>
            <p className="text-gray-500 text-sm mt-2">
              Manage your shopping cart with ease.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-semibold text-gray-800 text-lg">Fast Delivery</h3>
            <p className="text-gray-500 text-sm mt-2">
              Quick and reliable delivery to your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center shadow">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Shop Smart with QuickPlace
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto leading-7">
          QuickPlace is built to provide a smooth shopping experience with an
          intuitive interface, secure authentication, and seamless navigation.
          Whether you're looking for the latest gadgets, fashion, or daily
          essentials, QuickPlace is designed to help you find what you need
          quickly and effortlessly.
        </p>
      </div>
    </div>
  );
}