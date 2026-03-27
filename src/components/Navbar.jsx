import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/40 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center shadow-lg">
      
      <h1 className="font-bold text-xl">AJR PROFILE</h1>

      <div className="flex gap-3">
        <Link
          to="/"
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition"
        >
          Home
        </Link>

        <Link
          to="/jenri"
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-blue-400/30 transition"
        >
          Jenri
        </Link>

        <Link
          to="/raja"
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-indigo-400/30 transition"
        >
          Raja
        </Link>

        <Link
          to="/ardli"
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-yellow-400/30 transition"
        >
          Ardli
        </Link>
      </div>

    </nav>
  );
}