import React, { useEffect } from "react";
import SideNav from "../components/SideNav";
import { Outlet, useLocation } from "react-router-dom";
import ProfileLoader from "../components/ProfileLoader";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const {loading}= useSelector((state)=>state.user)
  //   useEffect(() => {
  //   document.body.style.overflow = loading ? 'hidden' : 'scroll';
  // }, [loading]);
  return (
  
      <div className=" mx-auto flex h-[calc(100vh-70px)]  items-start justify-center ">
     
        <div className="hidden lg:block h-full bg-white  shadow-sm sticky top-17  w-1/7 ">
          <SideNav />
        </div>

        <div className="w-6/7 h-full overflow-x-hidden custom-scrollbar overflow-y-scroll  max-lg:w-full relative
        " style={{overflow: loading ? "hidden" : "scroll"}}>
       
        {
          loading &&  <ProfileLoader/>
        }
          <Outlet />
        </div>
      </div>
   
  );
};

export default ProfilePage;
