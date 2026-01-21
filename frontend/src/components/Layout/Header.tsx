import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Check initial scroll position
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  const productCategories = [
    { name: "Breakfast Cereals", path: "/products/breakfast-cereals" },
    { name: "Breakfast Mixes", path: "/products/breakfast-mixes" },
    { name: "Beverage Mixes", path: "/products/beverage-mixes" },
    { name: "Soup Mixes", path: "/products/soup-mixes" },
    { name: "Energy Bytes (Snacks)", path: "/products/energy-bytes" },
    { name: "Spice Powders", path: "/products/spice-powders" },
    { name: "Flours & Grits", path: "/products/flours-grits" },
  ];

  const isOverHero = isHomePage && !isScrolled;
  const isProductCategoryPage =
    location.pathname.startsWith("/products/") &&
    location.pathname !== "/products";
  const isOtherPage = !isHomePage && !isProductCategoryPage;
  const hasWhiteBg = isScrolled || isProductCategoryPage || isOtherPage;

  return (
    <header
      className={`fixed w-full top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isOverHero
          ? "bg-transparent"
          : hasWhiteBg
          ? "bg-white shadow-lg"
          : "bg-primary shadow-md"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 mr-4 md:mr-8">
            <div className="flex flex-col">
              <span
                className={`text-xl md:text-2xl font-heading font-bold transition-colors leading-tight ${
                  hasWhiteBg
                    ? "text-primary"
                    : isOverHero
                    ? "text-white"
                    : "text-white"
                }`}
              >
                Sri Haritha
              </span>
              <span
                className={`text-xs md:text-sm transition-colors leading-tight ${
                  hasWhiteBg
                    ? "text-gray-600"
                    : isOverHero
                    ? "text-white/90"
                    : "text-white/90"
                }`}
              >
                Agro Food Products
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 flex-1 max-w-4xl mx-auto">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors whitespace-nowrap px-2 py-1.5 rounded-md ${
                location.pathname === "/"
                  ? hasWhiteBg
                    ? "text-primary font-semibold bg-primary/5"
                    : "text-white font-semibold bg-white/10"
                  : hasWhiteBg
                  ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                  : "text-white hover:text-white/90 hover:bg-white/10"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors whitespace-nowrap px-2 py-1.5 rounded-md ${
                location.pathname === "/about"
                  ? hasWhiteBg
                    ? "text-primary font-semibold bg-primary/5"
                    : "text-white font-semibold bg-white/10"
                  : hasWhiteBg
                  ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                  : "text-white hover:text-white/90 hover:bg-white/10"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contract-manufacturing"
              className={`text-sm font-medium transition-colors whitespace-nowrap px-2 py-1.5 rounded-md ${
                location.pathname === "/contract-manufacturing"
                  ? hasWhiteBg
                    ? "text-primary font-semibold bg-primary/5"
                    : "text-white font-semibold bg-white/10"
                  : hasWhiteBg
                  ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                  : "text-white hover:text-white/90 hover:bg-white/10"
              }`}
            >
              Contract Manufacturing
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 text-sm font-medium transition-colors whitespace-nowrap px-2 py-1.5 rounded-md ${
                  location.pathname.startsWith("/products")
                    ? hasWhiteBg
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-white font-semibold bg-white/10"
                    : hasWhiteBg
                    ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                    : "text-white hover:text-white/90 hover:bg-white/10"
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div
                className={`absolute top-full left-0 w-64 transition-all duration-200 z-[110] pt-1 ${
                  isProductsDropdownOpen
                    ? "opacity-100 visible pointer-events-auto"
                    : "opacity-0 invisible pointer-events-none"
                }`}
              >
                <div className="bg-white shadow-lg rounded-lg py-2 border border-gray-100">
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
              </div>
            </div>

            <Link
              to="/avasya"
              className={`text-sm font-medium transition-colors whitespace-nowrap px-2 py-1.5 rounded-md ${
                location.pathname === "/avasya"
                  ? hasWhiteBg
                    ? "text-primary font-semibold bg-primary/5"
                    : "text-white font-semibold bg-white/10"
                  : hasWhiteBg
                  ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                  : "text-white hover:text-white/90 hover:bg-white/10"
              }`}
            >
              Avasya
            </Link>
            <Link
              to="/quality"
              className={`text-sm font-medium transition-colors whitespace-nowrap px-2 py-1.5 rounded-md ${
                location.pathname === "/quality"
                  ? hasWhiteBg
                    ? "text-primary font-semibold bg-primary/5"
                    : "text-white font-semibold bg-white/10"
                  : hasWhiteBg
                  ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                  : "text-white hover:text-white/90 hover:bg-white/10"
              }`}
            >
              Quality & Infrastructure
            </Link>
            <button
              onClick={() => {
                // Will trigger contact modal
                const event = new CustomEvent("openContactModal");
                window.dispatchEvent(event);
              }}
              className="bg-primary text-white px-5 xl:px-6 py-2.5 xl:py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl text-sm whitespace-nowrap ml-6 xl:ml-8"
            >
              Contact / Enquiry
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors flex-shrink-0 ${
              hasWhiteBg
                ? "text-gray-700 hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Modal */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Modal */}
          <div
            className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-[100] lg:hidden transform transition-transform duration-300 ease-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            {/* Modal Header */}
            <div className="bg-primary text-white p-6 flex items-center justify-between">
              <h2 className="text-xl font-heading font-bold">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <nav className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col space-y-1">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-3 px-4 rounded-lg ${
                    location.pathname === "/"
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-text hover:bg-secondary"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-3 px-4 rounded-lg ${
                    location.pathname === "/about"
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-text hover:bg-secondary"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  to="/contract-manufacturing"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-3 px-4 rounded-lg ${
                    location.pathname === "/contract-manufacturing"
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-text hover:bg-secondary"
                  }`}
                >
                  Contract Manufacturing
                </Link>

                {/* Products Mobile */}
                <div>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className={`flex items-center justify-between w-full text-base font-medium transition-colors py-3 px-4 rounded-lg ${
                      location.pathname.startsWith("/products")
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-text hover:bg-secondary"
                    }`}
                  >
                    <span>Products</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isProductsOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      <Link
                        to="/products"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm py-2 px-4 rounded-lg text-text-light hover:bg-secondary hover:text-primary transition-colors"
                      >
                        All Products
                      </Link>
                      {productCategories.map((category) => (
                        <Link
                          key={category.path}
                          to={category.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-sm py-2 px-4 rounded-lg text-text-light hover:bg-secondary hover:text-primary transition-colors"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/avasya"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-3 px-4 rounded-lg ${
                    location.pathname === "/avasya"
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-text hover:bg-secondary"
                  }`}
                >
                  Avasya
                </Link>
                <Link
                  to="/quality"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-3 px-4 rounded-lg ${
                    location.pathname === "/quality"
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-text hover:bg-secondary"
                  }`}
                >
                  Quality & Infrastructure
                </Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    const event = new CustomEvent("openContactModal");
                    window.dispatchEvent(event);
                  }}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl text-center mt-4 w-full"
                >
                  Contact / Enquiry
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
