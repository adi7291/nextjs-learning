import '../globals.css';
export default function AuthLayout({ children }) {
  return (
    <main className="auth-page min-h-screen flex items-center justify-center bg-gray-100 p-5">
      {children}
    </main>
  );
}