import { Link } from "react-router-dom";
import { FaUserCircle, FaBell, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ProfileSidebar from "./ProfileSidebar";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineLogin } from "react-icons/ai";

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
      <nav className=" bg-white drop-shadow-lg z-50 sticky  left-0 w-full top-0">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="">
            <div className="flex items-center justify-center gap-4 ">
              <img src={logo} alt="" className="w-11 scale-130" />
              <div>
                <h3 className="font-bold text-2xl text-amber-500 leading-5 max-sm:text-xl">
                  TrueTies
                </h3>
                <p className="text-xs text-amber-600  ml-1 capitalize max-sm:text-[11px]">
                  Helping to love
                </p>
              </div>
            </div>
          </Link>
          <div className="flex gap-4 items-center">
            <Link
              to="/about"
              className="slider relative text-center pr-3  py-2 rounded  transition max-sm:hidden"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="slider relative text-center pr-3  py-2 rounded  transition max-sm:hidden"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className=" relative text-center flex items-center border hover:text-secondary border-primary hover:bg-white justify-center gap-2 bg-amber-500 px-6 text-white py-1.5 rounded font-semibold  transition"
            >
              <AiOutlineLogin fontSize={20} />
              <span>Login</span>
            </Link>

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
          </div>
        </div>
      </nav>

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
