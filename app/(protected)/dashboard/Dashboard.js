
export default function Dashboard (){
    return (
          <div className="max-w-7xl mx-auto p-6">

      {/* Welcome */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">

        <h1 className="text-4xl font-bold">
          Welcome Back, Ramesh 👋
        </h1>

        <p className="mt-3 text-blue-100 text-lg">
          Manage your orders, wishlist and profile from one place.
        </p>

      </div>

      {/* Statistics */}

      <h2 className="text-2xl font-bold text-blue-600 mt-10 mb-6">
        Dashboard Statistics
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-600">15</h3>
          <p className="mt-2 text-gray-500">
            Total Orders
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-4xl font-bold text-red-500">8</h3>
          <p className="mt-2 text-gray-500">
            Wishlist Items
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-4xl font-bold text-green-600">
            ₹42,800
          </h3>
          <p className="mt-2 text-gray-500">
            Total Spent
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-4xl font-bold text-purple-600">
            4.8 ★
          </h3>
          <p className="mt-2 text-gray-500">
            Customer Rating
          </p>
        </div>

      </div>

      {/* Quick Actions */}

      <h2 className="text-2xl font-bold text-blue-600 mt-12 mb-6">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <button className="bg-blue-600 text-white rounded-xl py-5 hover:bg-blue-700 transition">
          Browse Products
        </button>

        <button className="bg-green-600 text-white rounded-xl py-5 hover:bg-green-700 transition">
          My Orders
        </button>

        <button className="bg-red-500 text-white rounded-xl py-5 hover:bg-red-600 transition">
          Wishlist
        </button>

        <button className="bg-purple-600 text-white rounded-xl py-5 hover:bg-purple-700 transition">
          Edit Profile
        </button>

      </div>

      {/* Recent Orders */}

      <h2 className="text-2xl font-bold text-blue-600 mt-12 mb-6">
        Recent Orders
      </h2>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white ">

            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Status</th>
            </tr>

          </thead>

          <tbody className="text-gray-800">

            <tr className="border-b text-gray-800">
              <td className="p-4">#1001</td>
              <td className="p-4">iPhone 15</td>
              <td className="p-4">₹79,999</td>
              <td className="p-4 text-green-600 font-semibold">
                Delivered
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-4">#1002</td>
              <td className="p-4">Boat Earbuds</td>
              <td className="p-4">₹2,499</td>
              <td className="p-4 text-orange-500 font-semibold">
                Shipping
              </td>
            </tr>

            <tr>
              <td className="p-4">#1003</td>
              <td className="p-4">Nike Shoes</td>
              <td className="p-4">₹6,999</td>
              <td className="p-4 text-blue-600 font-semibold">
                Ordered
              </td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* Wishlist */}

      <h2 className="text-2xl font-bold text-blue-600 mt-12 mb-6">
        Wishlist Preview
      </h2>

      <div className="bg-white rounded-xl shadow text-gray-800 p-6">

        <ul className="space-y-4">

          <li>❤️ Samsung Galaxy S25</li>

          <li>❤️ Apple Watch Ultra</li>

          <li>❤️ Sony Headphones</li>

        </ul>

      </div>

      {/* Notifications */}

      <h2 className="text-2xl font-bold text-blue-600 mt-12 mb-6">
        Latest Notifications
      </h2>

      <div className="bg-white text-gray-800 rounded-xl shadow p-6 space-y-4">

        <p>
          📦 Your Boat Earbuds have been shipped.
        </p>

        <p>
          🎁 Flat 20% discount on Electronics.
        </p>

        <p>
          💳 New payment methods are available.
        </p>

      </div>

    </div>
    )
}