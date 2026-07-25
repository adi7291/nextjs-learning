import Link from "next/link";
export default function Sidebar() {
    return(
         <aside className="w-72 bg-slate-900 text-white shadow-xl">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold">My Store</h1>
          <p className="text-sm text-gray-400 mt-1">
            Welcome Back 👋
          </p>
        </div>

        <nav className="mt-5 px-4">
          <ul className="space-y-2">

            <li>
              <Link
                href="/dashboard"
                className="block rounded-lg px-4 py-3 hover:bg-slate-700 transition"
              >
                📊 Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="block rounded-lg px-4 py-3 hover:bg-slate-700 transition"
              >
                📦 Products
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                className="block rounded-lg px-4 py-3 hover:bg-slate-700 transition"
              >
                👤 Profile
              </Link>
            </li>

            <li>
              <Link
                href="/orders"
                className="block rounded-lg px-4 py-3 hover:bg-slate-700 transition"
              >
                📑 Orders
              </Link>
            </li>

            <li>
              <Link
                href="/payments"
                className="block rounded-lg px-4 py-3 hover:bg-slate-700 transition"
              >
                💳 Payments
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="block rounded-lg px-4 py-3 hover:bg-slate-700 transition"
              >
                📞 Contact
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="block rounded-lg px-4 py-3 hover:bg-slate-700 transition"
              >
                ℹ️ About
              </Link>
            </li>

          </ul>
        </nav>
      </aside>
    )
}