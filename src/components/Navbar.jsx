import { Link } from "react-router-dom";
import { FaUserCircle, FaBell, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ProfileSidebar from "./ProfileSidebar";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { authData, setIsEditProfile, logout } = useAuth();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (tabKey) => {
    if (tabKey === "logout") {
      logout();
      navigate("/login");
      setMobileSidebarOpen(false);
      return;
    }

    navigate(`/profile/${tabKey}`);
    setMobileSidebarOpen(false);
  };

  return (
    <>
      <nav className="bg-white drop-shadow-lg z-50 relative">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            MyLogo
          </Link>

          {/* Desktop: Profile or Login */}
          <div className="hidden md:flex gap-4 items-center">
            {authData?.isAuthenticated ? (
              <Link
                to="/profile"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
              >
                <FaUserCircle className="text-2xl" />
                <span className="text-sm font-medium">Profile</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-tr from-[#A62C2C] to-[#CF0F47] text-white text-center px-5 py-2 rounded text-sm shadow-md hover:shadow-lg transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile: FaBars */}
          <div className="flex gap-4 items-center md:hidden">
            {authData?.isAuthenticated ? (
              <>
                <button className="text-gray-600 hover:text-blue-600 transition">
                  <FaBell className="text-xl" />
                </button>
                <button
                  className="text-gray-600 hover:text-blue-600 transition"
                  onClick={() => setMobileSidebarOpen(true)}
                >
                  <FaBars className="text-xl" />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-tr from-[#A62C2C] to-[#CF0F47] text-white text-center px-5 py-2 rounded text-sm shadow-md hover:shadow-lg transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar - Slide in from right */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out pointer-events-auto ${
            mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setMobileSidebarOpen(false)}>
              <IoMdClose className="text-2xl text-gray-600 hover:text-red-500 transition" />
            </button>
          </div>
          <ProfileSidebar
            activeTab={location.pathname.split("/")[2] || "matches"}
            onTabClick={handleTabClick}
            onEditProfile={() => {
              setMobileSidebarOpen(false);
              setIsEditProfile(true);
              navigate("/profile/matches");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
