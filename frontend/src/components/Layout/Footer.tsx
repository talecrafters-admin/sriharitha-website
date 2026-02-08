import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoWhite from "../../assets/images/branding/logo-white.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-warmWhite pt-16 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src={logoWhite}
              alt="Sri Haritha Agro Food Products"
              className="h-12 w-auto mb-4"
              style={{ maxWidth: '200px' }}
            />
            <p className="text-sm mb-4">
              Trusted manufacturer of Ready-to-Eat and Ready-to-Cook millet &
              cereal-based food products since 2018.
            </p>
            <p className="text-xs text-gray-400">FSSAI Certified</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-warmWhite font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contract-manufacturing"
                  className="hover:text-primary transition-colors"
                >
                  Contract Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/avasya"
                  className="hover:text-primary transition-colors"
                >
                  Avasya Brand
                </Link>
              </li>
              <li>
                <Link
                  to="/quality"
                  className="hover:text-primary transition-colors"
                >
                  Quality & Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-warmWhite font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/products/instant-mix"
                  className="hover:text-primary transition-colors"
                >
                  Instant Mix
                </Link>
              </li>
              <li>
                <Link
                  to="/products/breakfast-cereals"
                  className="hover:text-primary transition-colors"
                >
                  Breakfast Cereals
                </Link>
              </li>
              <li>
                <Link
                  to="/products/energy-bytes"
                  className="hover:text-primary transition-colors"
                >
                  Millet Snacks
                </Link>
              </li>
              <li>
                <Link
                  to="/products/millet-noodles"
                  className="hover:text-primary transition-colors"
                >
                  Millet Noodles
                </Link>
              </li>
              <li>
                <Link
                  to="/products/bars"
                  className="hover:text-primary transition-colors"
                >
                  Bars
                </Link>
              </li>
              <li>
                <Link
                  to="/products/spice-powders"
                  className="hover:text-primary transition-colors"
                >
                  Spice Powders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-warmWhite font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Plot No 36, APJ Abdul Kalam ALEAP Green Industrial Park,
                  <br />
                  Nandigaon, Bhanur, Sangareddy, Patancheru Mandal,
                  <br />
                  Pin code 502300, Telangana, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+919885704833"
                    className="hover:text-primary transition-colors"
                  >
                    +91 98857 04833
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:sriharithaagrofood@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  sriharithaagrofood@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warmWhite/20 mt-8 pt-8 text-center text-sm text-warmWhite/80">
          <p>
            &copy; {currentYear} Sri Haritha Agro Food Products Pvt. Ltd. All
            rights reserved.
          </p>
          <p className="mt-4">
            Made with ❤️ by{" "}
            <a
              href="https://www.talecrafters.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              TaleCrafters
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
