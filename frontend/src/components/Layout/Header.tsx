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
  const shouldShowGreenBg = !isScrolled && !isProductCategoryPage;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : isOverHero
          ? "bg-transparent"
          : isProductCategoryPage
          ? "bg-transparent"
          : "bg-primary shadow-md"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span
                className={`text-xl md:text-2xl font-heading font-bold transition-colors ${
                  isOverHero || isProductCategoryPage
                    ? "text-white"
                    : shouldShowGreenBg
                    ? "text-white"
                    : "text-primary"
                }`}
              >
                Sri Haritha
              </span>
              <span
                className={`text-xs md:text-sm transition-colors ${
                  isOverHero || isProductCategoryPage
                    ? "text-white/90"
                    : shouldShowGreenBg
                    ? "text-white/90"
                    : "text-gray-600"
                }`}
              >
                Agro Food Products
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/"
                  ? isOverHero || isProductCategoryPage
                    ? "text-accent"
                    : shouldShowGreenBg
                    ? "text-white font-semibold"
                    : "text-primary font-semibold"
                  : isOverHero || isProductCategoryPage
                  ? "text-white hover:text-accent"
                  : shouldShowGreenBg
                  ? "text-white hover:text-accent"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/about"
                  ? isOverHero || isProductCategoryPage
                    ? "text-accent"
                    : shouldShowGreenBg
                    ? "text-white font-semibold"
                    : "text-primary font-semibold"
                  : isOverHero || isProductCategoryPage
                  ? "text-white hover:text-accent"
                  : shouldShowGreenBg
                  ? "text-white hover:text-accent"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contract-manufacturing"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/contract-manufacturing"
                  ? isOverHero || isProductCategoryPage
                    ? "text-accent"
                    : shouldShowGreenBg
                    ? "text-white font-semibold"
                    : "text-primary font-semibold"
                  : isOverHero || isProductCategoryPage
                  ? "text-white hover:text-accent"
                  : shouldShowGreenBg
                  ? "text-white hover:text-accent"
                  : "text-gray-700 hover:text-primary"
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
                className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                  location.pathname.startsWith("/products")
                    ? isOverHero || isProductCategoryPage
                      ? "text-accent"
                      : shouldShowGreenBg
                      ? "text-white font-semibold"
                      : "text-primary font-semibold"
                    : isOverHero || isProductCategoryPage
                    ? "text-white hover:text-accent"
                    : shouldShowGreenBg
                    ? "text-white hover:text-accent"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div
                className={`absolute top-full left-0 w-64 transition-all duration-200 z-50 pt-1 ${
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
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/avasya"
                  ? isOverHero || isProductCategoryPage
                    ? "text-accent"
                    : shouldShowGreenBg
                    ? "text-white font-semibold"
                    : "text-primary font-semibold"
                  : isOverHero || isProductCategoryPage
                  ? "text-white hover:text-accent"
                  : shouldShowGreenBg
                  ? "text-white hover:text-accent"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Avasya
            </Link>
            <Link
              to="/quality"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/quality"
                  ? isOverHero || isProductCategoryPage
                    ? "text-accent"
                    : shouldShowGreenBg
                    ? "text-white font-semibold"
                    : "text-primary font-semibold"
                  : isOverHero || isProductCategoryPage
                  ? "text-white hover:text-accent"
                  : shouldShowGreenBg
                  ? "text-white hover:text-accent"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Quality & Infrastructure
            </Link>
            <Link
              to="/contact"
              className="bg-accent text-primary px-6 py-2.5 rounded-xl font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
            >
              Contact / Enquiry
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isOverHero || isProductCategoryPage
                ? "text-white hover:text-accent"
                : shouldShowGreenBg
                ? "text-white hover:text-accent"
                : "text-gray-700 hover:text-primary"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className={`lg:hidden pb-4 mt-2 pt-4 transition-colors ${
              isOverHero || isProductCategoryPage
                ? "border-t border-white/20"
                : shouldShowGreenBg
                ? "border-t border-white/20"
                : "border-t border-gray-100"
            }`}
          >
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors py-2 ${
                  location.pathname === "/"
                    ? isOverHero || isProductCategoryPage
                      ? "text-accent"
                      : shouldShowGreenBg
                      ? "text-white font-semibold"
                      : "text-primary font-semibold"
                    : isOverHero || isProductCategoryPage
                    ? "text-white hover:text-accent"
                    : shouldShowGreenBg
                    ? "text-white hover:text-accent"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors py-2 ${
                  location.pathname === "/about"
                    ? isOverHero || isProductCategoryPage
                      ? "text-accent"
                      : shouldShowGreenBg
                      ? "text-white font-semibold"
                      : "text-primary font-semibold"
                    : isOverHero || isProductCategoryPage
                    ? "text-white hover:text-accent"
                    : shouldShowGreenBg
                    ? "text-white hover:text-accent"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/contract-manufacturing"
                className={`text-sm font-medium transition-colors py-2 ${
                  location.pathname === "/contract-manufacturing"
                    ? isOverHero || isProductCategoryPage
                      ? "text-accent"
                      : shouldShowGreenBg
                      ? "text-white font-semibold"
                      : "text-primary font-semibold"
                    : isOverHero || isProductCategoryPage
                    ? "text-white hover:text-accent"
                    : shouldShowGreenBg
                    ? "text-white hover:text-accent"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Contract Manufacturing
              </Link>

              {/* Products Mobile */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className={`flex items-center justify-between w-full text-sm font-medium transition-colors py-2 ${
                    location.pathname.startsWith("/products")
                      ? isOverHero || isProductCategoryPage
                        ? "text-accent"
                        : shouldShowGreenBg
                        ? "text-white font-semibold"
                        : "text-primary font-semibold"
                      : isOverHero || isProductCategoryPage
                      ? "text-white hover:text-accent"
                      : shouldShowGreenBg
                      ? "text-white hover:text-accent"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isProductsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/products"
                      className={`block text-sm py-1 transition-colors ${
                        isOverHero || isProductCategoryPage
                          ? "text-white/80 hover:text-accent"
                          : shouldShowGreenBg
                          ? "text-white/80 hover:text-accent"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      All Products
                    </Link>
                    {productCategories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className={`block text-sm py-1 transition-colors ${
                          isOverHero || isProductCategoryPage
                            ? "text-white/80 hover:text-accent"
                            : shouldShowGreenBg
                            ? "text-white/80 hover:text-accent"
                            : "text-gray-600 hover:text-primary"
                        }`}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/avasya"
                className={`text-sm font-medium transition-colors py-2 ${
                  location.pathname === "/avasya"
                    ? isOverHero || isProductCategoryPage
                      ? "text-accent"
                      : shouldShowGreenBg
                      ? "text-white font-semibold"
                      : "text-primary font-semibold"
                    : isOverHero || isProductCategoryPage
                    ? "text-white hover:text-accent"
                    : shouldShowGreenBg
                    ? "text-white hover:text-accent"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Avasya
              </Link>
              <Link
                to="/quality"
                className={`text-sm font-medium transition-colors py-2 ${
                  location.pathname === "/quality"
                    ? isOverHero || isProductCategoryPage
                      ? "text-accent"
                      : shouldShowGreenBg
                      ? "text-white font-semibold"
                      : "text-primary font-semibold"
                    : isOverHero || isProductCategoryPage
                    ? "text-white hover:text-accent"
                    : shouldShowGreenBg
                    ? "text-white hover:text-accent"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Quality & Infrastructure
              </Link>
              <Link
                to="/contact"
                className="bg-accent text-primary px-6 py-2.5 rounded-xl font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm text-center mt-2"
              >
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
