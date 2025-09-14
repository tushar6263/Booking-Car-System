import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* Top blue strip */}
      <div className="bg-blue-900 text-gray-300 py-2 px-4 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FaTwitter />
          </a>
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <MdEmail />
            <span>info@autohub.com</span>
          </span>
          <span className="flex items-center space-x-1">
            <MdEmail />
            <span>sales@autohub.com</span>
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white shadow-lg py-4 px-6 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-blue-800">AutoHub</h1>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            Home
          </Link>
          <Link to="/cars" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            Cars
          </Link>
          <Link to="/service" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            Services
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            Contact
          </Link>
        </div>

        {/* Sign In (desktop only) */}
        <button className="hidden md:flex bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 items-center space-x-2">
          <FaSignInAlt />
          <span>Sign In</span>
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-50">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/cars" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">
              Cars
            </Link>
            <Link to="/service" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
              <FaSignInAlt />
              <span>Sign In</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
