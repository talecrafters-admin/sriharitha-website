import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-heading font-bold text-xl mb-4">
              Sri Haritha Agro Food Products
            </h3>
            <p className="text-sm mb-4">
              Trusted manufacturer of Ready-to-Eat and Ready-to-Cook millet & cereal-based food products since 2018.
            </p>
            <p className="text-xs text-gray-400">
              FSSAI Certified
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contract-manufacturing" className="hover:text-accent transition-colors">
                  Contract Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/avasya" className="hover:text-accent transition-colors">
                  Avasya Brand
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-accent transition-colors">
                  Quality & Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/breakfast-cereals" className="hover:text-accent transition-colors">
                  Breakfast Cereals
                </Link>
              </li>
              <li>
                <Link to="/products/breakfast-mixes" className="hover:text-accent transition-colors">
                  Breakfast Mixes
                </Link>
              </li>
              <li>
                <Link to="/products/beverage-mixes" className="hover:text-accent transition-colors">
                  Beverage Mixes
                </Link>
              </li>
              <li>
                <Link to="/products/energy-bytes" className="hover:text-accent transition-colors">
                  Energy Bytes
                </Link>
              </li>
              <li>
                <Link to="/products/spice-powders" className="hover:text-accent transition-colors">
                  Spice Powders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Plot No. B-35, BHEL AIE,<br />
                  R.C. Puram, Hyderabad-502 032,<br />
                  Telangana, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div>
                  <a href="tel:+919885704670" className="hover:text-accent transition-colors">
                    +91 98857 04670
                  </a>
                  <br />
                  <a href="tel:+919885704400" className="hover:text-accent transition-colors">
                    +91 98857 04400
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:sriharithaagrofood@gmail.com" className="hover:text-accent transition-colors">
                  sriharithaagrofood@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; {currentYear} Sri Haritha Agro Food Products Pvt. Ltd. All rights reserved.</p>
          <p className="mt-4">
            Made with ❤️ by{' '}
            <a 
              href="https://www.talecrafters.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors underline"
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
