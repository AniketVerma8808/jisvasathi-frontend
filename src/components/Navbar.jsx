import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LoginDialog from "./LoginDialog";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md  top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-blue-600">
            MyLogo
          </Link>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => setLoginOpen(true)}
              className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 text-sm"
            >
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars size={22} className="text-blue-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-4 flex flex-col gap-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)}>
                <FaTimes size={22} className="text-blue-600" />
              </button>
            </div>

            <button
              className="text-blue-600 text-lg text-left"
              onClick={() => {
                setLoginOpen(true);
                setMenuOpen(false);
              }}
            >
              Login
            </button>
            <Link
              to="/register"
              className="text-blue-600 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Dialog */}
      <LoginDialog isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};

export default Navbar;
