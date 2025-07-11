import React from "react";
import SideNav from "../components/SideNav";
import { Outlet, useLocation } from "react-router-dom";
import ProfileLoader from "../components/ProfileLoader";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const {loading}= useSelector((state)=>state.user)
  return (
    <div className="bg-gray-100 ">
      <div className=" mx-auto flex items-start justify-center ">
        {/* Sidebar: hidden on small screens, shown on lg+ */}
        <div className="hidden lg:block h-screen bg-white shadow-sm sticky top-17  w-1/7 ">
          <SideNav />
        </div>

        {/* Main content: full width on mobile, 9 cols on lg+ */}
        <div className="w-6/7  hide-scrollbar  max-lg:w-full relative">
       
        {
          loading &&  <ProfileLoader/>
        }
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
