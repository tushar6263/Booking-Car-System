import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-4">
          <h4 className="text-white text-2xl font-bold">AutoHub</h4>
          <p className="text-gray-400 text-sm">
            Discover the perfect ride with our premium selection of cars for sale. From luxury sedans to powerful sports cars, we offer a seamless buying experience.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white transition-colors duration-300"><FaFacebookF size={20} /></a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white transition-colors duration-300"><FaInstagram size={20} /></a>
            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white transition-colors duration-300"><FaTwitter size={20} /></a>
            <a href="https://www.youtube.com" className="text-gray-400 hover:text-white transition-colors duration-300"><FaYoutube size={20} /></a>
          </div>
        </div>

       <div className="flex flex-col space-y-2">
      <h4 className="text-white text-lg font-semibold mb-2">Quick Links</h4>
      <ul className="space-y-1">
        <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
        <li><Link to="/cars" className="text-gray-400 hover:text-white transition-colors duration-300">Cars</Link></li>
        <li><Link to="/service" className="text-gray-400 hover:text-white transition-colors duration-300">Services</Link></li>
        <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
        <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
      </ul>
    </div>

        <div className="flex flex-col space-y-2">
          <h4 className="text-white text-lg font-semibold mb-2">Popular Brands</h4>
          <ul className="space-y-1">
            <li><span className="text-gray-400">Mercedes-Benz</span></li>
            <li><span className="text-gray-400">BMW</span></li>
            <li><span className="text-gray-400">Audi</span></li>
            <li><span className="text-gray-400">Lamborghini</span></li>
            <li><span className="text-gray-400">Porsche</span></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="text-white text-lg font-semibold mb-2">Contact Us</h4>
          <p className="flex items-center space-x-2 text-gray-400"><i className="fas fa-map-marker-alt"></i><span>123 Auto Street, City, State, 12345</span></p>
          <p className="flex items-center space-x-2 text-gray-400"><i className="fas fa-phone-alt"></i><span>+1 (123) 456-7890</span></p>
          <p className="flex items-center space-x-2 text-gray-400"><i className="fas fa-envelope"></i><span>info@autohub.com</span></p>
          <p className="flex items-center space-x-2 text-gray-400"><i className="fas fa-envelope"></i><span>sales@autohub.com</span></p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        <p>© 2025 AutoHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;