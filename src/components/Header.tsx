import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../contexts/CartContext';
import Profile from './Profile';

const Header = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-navy">
              Clothify
              <span className="text-lavender">.</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-lavender transition-colors px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/products/men" className="text-gray-700 hover:text-lavender transition-colors px-3 py-2 text-sm font-medium">
              Men
            </Link>
            <Link to="/products/women" className="text-gray-700 hover:text-lavender transition-colors px-3 py-2 text-sm font-medium">
              Women
            </Link>
            <Link to="/products/kids" className="text-gray-700 hover:text-lavender transition-colors px-3 py-2 text-sm font-medium">
              Kids
            </Link>
          </nav>

          {/* Action Icons and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-lavender transition-colors">
              <Search size={20} />
            </Button>
            <Profile />
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-lavender transition-colors">
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-lavender text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Link to="/cart" className="relative mr-4">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-lavender text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-lavender transition-colors px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products/men" 
                className="text-gray-700 hover:text-lavender transition-colors px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link 
                to="/products/women" 
                className="text-gray-700 hover:text-lavender transition-colors px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link 
                to="/products/kids" 
                className="text-gray-700 hover:text-lavender transition-colors px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kids
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-lavender transition-colors">
                  <Search size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-lavender transition-colors">
                  <User size={20} />
                </Button>
              </div>
              <div className="pt-4">
                <Profile />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
