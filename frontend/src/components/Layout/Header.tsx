import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  const productCategories = [
    { name: 'Breakfast Cereals', path: '/products/breakfast-cereals' },
    { name: 'Breakfast Mixes', path: '/products/breakfast-mixes' },
    { name: 'Beverage Mixes', path: '/products/beverage-mixes' },
    { name: 'Soup Mixes', path: '/products/soup-mixes' },
    { name: 'Energy Bytes (Snacks)', path: '/products/energy-bytes' },
    { name: 'Spice Powders', path: '/products/spice-powders' },
    { name: 'Flours & Grits', path: '/products/flours-grits' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-heading font-bold text-primary">
                Sri Haritha
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                Agro Food Products
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/contract-manufacturing" className="text-gray-700 hover:text-primary transition-colors">
              Contract Manufacturing
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative" 
                 onMouseEnter={() => setIsProductsOpen(true)}
                 onMouseLeave={() => setIsProductsOpen(false)}>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                  <Link 
                    to="/products" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-primary"
                  >
                    All Products
                  </Link>
                  {productCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/avasya" className="text-gray-700 hover:text-primary transition-colors">
              Avasya
            </Link>
            <Link to="/quality" className="text-gray-700 hover:text-primary transition-colors">
              Quality & Infrastructure
            </Link>
            <Link to="/contact" className="btn-primary text-sm">
              Contact / Enquiry
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors py-2">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors py-2">
                About Us
              </Link>
              <Link to="/contract-manufacturing" className="text-gray-700 hover:text-primary transition-colors py-2">
                Contract Manufacturing
              </Link>
              
              {/* Products Mobile */}
              <div>
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-primary transition-colors py-2"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                {isProductsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/products" className="block text-sm text-gray-600 hover:text-primary py-1">
                      All Products
                    </Link>
                    {productCategories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="block text-sm text-gray-600 hover:text-primary py-1"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/avasya" className="text-gray-700 hover:text-primary transition-colors py-2">
                Avasya
              </Link>
              <Link to="/quality" className="text-gray-700 hover:text-primary transition-colors py-2">
                Quality & Infrastructure
              </Link>
              <Link to="/contact" className="btn-primary text-center mt-2">
                Contact / Enquiry
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
