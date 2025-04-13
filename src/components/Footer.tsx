
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <h2 className="text-2xl font-bold">
                Clothify
                <span className="text-lavender">.</span>
              </h2>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Premium clothing store featuring the latest trends in fashion. Quality materials, exceptional designs.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-300 hover:text-lavender transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-lavender transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-lavender transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/men" className="text-gray-300 hover:text-lavender transition-colors">
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link to="/products/women" className="text-gray-300 hover:text-lavender transition-colors">
                  Women's Clothing
                </Link>
              </li>
              <li>
                <Link to="/products/kids" className="text-gray-300 hover:text-lavender transition-colors">
                  Kids' Clothing
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-lavender transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-lavender transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-lavender transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lavender transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lavender transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lavender transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lavender transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 flex-shrink-0 mt-0.5 text-lavender" />
                <span className="text-gray-300">123 Fashion Street, Design District, City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-lavender" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-lavender transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-lavender" />
                <a href="mailto:info@clothify.com" className="text-gray-300 hover:text-lavender transition-colors">
                  info@clothify.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Clothify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
