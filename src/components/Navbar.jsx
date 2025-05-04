// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-3 md:space-y-0">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">CPlusPlus.com</h1>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/tutorials" className="hover:text-gray-300">Tutorials</Link>
          <Link to="/articles" className="hover:text-gray-300">Articles</Link>
          <Link to="/references" className="hover:text-gray-300">References</Link>
          <Link to="/forum" className="hover:text-gray-300">Forum</Link>
          <Link to="/login">
            <button className="bg-white text-gray-800 font-semibold px-4 py-1 rounded hover:bg-gray-200">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
