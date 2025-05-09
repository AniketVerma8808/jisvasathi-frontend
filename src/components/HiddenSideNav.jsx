import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { GiUpgrade } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/vivahLogo2.jpg";
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

const HiddenSideNav = ({ setShowNav }) => {
  const navigate = useNavigate();
  const { clearAuthData, authData } = useAuth();
  const [current, setCurrent] = useState(null);

  const handleLogout = () => {
    clearAuthData();
    setShowNav(false);
    navigate("/");
  };

  const links = authData?.isAuthenticated
    ? [
        { text: "About", path: "/about" },
        { text: "Contact", path: "/contact" },
        { text: "matches", path: "/profile" },
        { text: "activity", path: "/profile/activity" },
        { text: "search", path: "/profile/search" },
        { text: "Edit Profile", path: "/profile/editProfile" },
      ]
    : [
        { text: "Home", path: "/" },
        { text: "About", path: "/about" },
        { text: "Contact", path: "/contact" },
        { text: "Login", path: "/login" },
      ];

  return (
    <div className="fixed left-0 top-0 w-full h-screen z-50">
      {/* Backdrop */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full bg-black/60 backdrop-blur-sm"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
        onClick={() => setShowNav(false)}
      />

      {/* Sliding Panel */}
      <motion.div
        className="relative z-20 w-[80%] bg-white h-full px-4 py-4"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowNav(false)}
          className="absolute top-4 right-4 text-xl"
        >
          <RxCross1 />
        </button>

        {/* Profile or App Title */}
        <div className="flex items-center gap-4 px-4">
          {authData?.isAuthenticated ? (
            <div className="flex items-center gap-4 px-4">
              <div className="rounded-full w-16 h-16 border border-gray-100 text-4xl text-gray-400 flex items-center justify-center bg-gray-100">
                <CgProfile />
              </div>
              <div>
                <h1 className="text-2xl leading-5 font-semibold">
                  Hi {authData?.user?.name || "User"}!
                </h1>
              </div>
            </div>
          ) : (
            <Link to="/" className="flex items-center gap-4 px-4">
              <img src={logo} alt="Logo" className="w-11" />
              <div>
                <h3 className="font-bold text-2xl text-amber-500 leading-5 max-sm:text-xl">
                  TrueTies
                </h3>
                <p className="text-xs text-amber-600 ml-1 capitalize max-sm:text-[11px]">
                  Helping to love
                </p>
              </div>
            </Link>
          )}
        </div>

        <hr className="text-gray-300 mt-5 w-[90%] mx-auto" />

        {/* Links */}
        <ul className="mt-4 font-secondaryHead">
          {links.map((link, i) => (
            <li
              key={link.path}
              onClick={() => {
                setShowNav(false);
                setCurrent(i);
              }}
            >
              <Link
                to={link.path}
                className="py-2.5 hover:bg-red-50 rounded-md transition duration-75 px-4 flex items-center justify-between gap-4"
              >
                <span className="capitalize text-sm">{link.text}</span>
                <ChevronRight className="text-gray-500" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Upgrade - only for authenticated users */}
        {authData?.isAuthenticated && (
          <Link
            to="/upgrade"
            className="px-5 mt-4 flex items-center justify-start gap-2 text-white tracking-wide font-bold rounded-lg py-2.5 bg-gradient-to-br from-orange-400 to-red-400"
          >
            <GiUpgrade />
            <span>Upgrade to Pro</span>
          </Link>
        )}

        {/* Logout Button - only for authenticated users */}
        {authData?.isAuthenticated && (
          <button
            onClick={handleLogout}
            className="w-full mt-6 text-sm font-medium text-red-600 bg-red-100 hover:bg-red-200 rounded-md py-2.5 transition"
          >
            Logout
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default HiddenSideNav;
