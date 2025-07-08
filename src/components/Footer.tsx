import { Link } from "react-router-dom";
import { Construction, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="font-heading font-bold text-xl">
                <img src="/images/c.png" alt="" />
              </span>
            </Link>
            <p className=" mb-4 text-black">
              Expert RCC Core Cutting & Rebaring Services with cutting-edge
              technology and professional excellence.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Phone className="h-5 w-5 text-black" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-black" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-black hover:text-primary transition-colors"
                >
                  RCC Core Cutting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-black hover:text-primary transition-colors"
                >
                  Wall Cutting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-black hover:text-primary transition-colors"
                >
                  Beam Cutting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-black hover:text-primary transition-colors"
                >
                  Rebaring Work
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-black hover:text-primary transition-colors"
                >
                  Fastener Fixing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-black hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-black hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-black hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-black">+91 7289938603</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-black">Anantkumaryadav612@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-black">
                  D-90 Sector-48 Noida U.P 201031
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-black">Mon-Sat: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-black">
            Design and Developed By{" "}
            <a href="https://www.theneedleads.com/">Needleads Technologies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
