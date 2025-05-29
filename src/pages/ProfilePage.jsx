import React from "react";
import SideNav from "../components/SideNav";
import { Outlet, useLocation } from "react-router-dom";

const ProfilePage = () => {

  return (
    <div className="bg-gray-100 ">
      <div className=" mx-auto flex items-start justify-center ">
        {/* Sidebar: hidden on small screens, shown on lg+ */}
        <div className="hidden lg:block h-screen bg-white shadow-sm sticky top-17  w-1/7 ">
          <SideNav />
        </div>

        {/* Main content: full width on mobile, 9 cols on lg+ */}
        <div className="w-6/7 hide-scrollbar max-lg:w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
