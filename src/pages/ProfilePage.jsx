import React from "react";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 lg:min-h-screen  lg:pt-16 sm:px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar: hidden on small screens, shown on lg+ */}
        <div className="hidden lg:block lg:col-span-3">
          <SideNav />
        </div>

        {/* Main content: full width on mobile, 9 cols on lg+ */}
        <div className="col-span-1 lg:col-span-9 lg:h-[calc(100vh-10rem)] lg:overflow-y-auto hide-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
