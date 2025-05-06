import React from "react";
import { FaHeart, FaClock, FaSearch, FaComments } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileSidebar = ({ onTabClick, onEditProfile, activeTab }) => {
  const { authData, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="w-full bg-white rounded-xl shadow p-4 md:p-6 sticky top-4 z-10">
      {/* User Info */}
      <div className="flex flex-col md:flex-col items-center md:items-center text-center md:text-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden shrink-0"></div>
        <div>
          <h2 className="text-lg font-bold">Hi {authData?.name || "User"}!</h2>
          <p className="text-sm text-gray-500">
            {authData?.userId || "URSA7293"}{" "}
            <span
              onClick={() => {
                onEditProfile();
                onTabClick("edit-profile");
              }}
              className="text-red-500 font-medium cursor-pointer ml-1"
            >
              Edit Profile
            </span>
          </p>
        </div>
      </div>

      {/* Sidebar Buttons */}
      <div className="space-y-2">
        {[
          { key: "matches", label: "Matches", icon: <FaHeart /> },
          { key: "activity", label: "Activity", icon: <FaClock /> },
          { key: "search", label: "Search", icon: <FaSearch /> },
          { key: "messenger", label: "Messenger", icon: <FaComments /> },
          { key: "logout", label: "Logout", icon: <FiLogOut /> },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              if (tab.key === "logout") {
                handleLogout();
              } else {
                onTabClick(tab.key);
              }
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-md transition-all text-sm font-medium ${
              activeTab === tab.key
                ? "bg-gradient-to-tr from-[#A62C2C] to-[#CF0F47] text-white shadow"
                : tab.key === "logout"
                ? "text-red-500 hover:bg-red-100"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className="flex items-center gap-3">
              {tab.icon} {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
