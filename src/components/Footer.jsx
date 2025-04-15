import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-xl font-bold mb-2">MatchMate</h2>
          <p className="text-sm text-gray-400">
            Helping millions find their perfect life partner worldwide.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Need Help */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/login">Member Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/search">Partner Search</Link>
            </li>
            <li>
              <Link to="/support">Customer Support</Link>
            </li>
            <li>
              <Link to="/sitemap">Site Map</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/blog">Shaadi Blog</Link>
            </li>
            <li>
              <Link to="/awards">Awards & Recognition</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Privacy */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Privacy & You</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/terms">Terms of Use</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/report">Report Misuse</Link>
            </li>
            <li>
              <Link to="/safety">Be Safe Online</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MatchMate. All rights reserved. <br />
        Designed by{" "}
        <a
          href="https://techxpert.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gradient hover:underline"
        >
          techxpert.in
        </a>
      </div>
    </footer>
  );
};

export default Footer;
