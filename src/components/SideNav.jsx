import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { SiActivitypub } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
import { useAuth } from "../context/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { BsChatSquareDots } from "react-icons/bs";

const SideNav = () => {
  const { clearAuthData } = useAuth();
  const navigate = useNavigate();

  const [current, setcurrent] = useState(
    JSON.parse(sessionStorage.getItem("current") || 0)
  );
  const links = [
    {
      icon: <LiaUserFriendsSolid />,
      text: "matches",
      path: "/profile",
    },
    {
      icon: <SiActivitypub />,
      text: "activity",
      path: "/profile/activity",
    },
    {
      icon: <IoSearchSharp />,
      text: "search",
      path: "/profile/search",
    },

    {
      icon: <MdOutlineModeEdit />,
      text: "Edit Profile",
      path: "/profile/editProfile",
    },
    {
      icon: <BsChatSquareDots />,
      text: "Messenger",
      path: "/profile/chats",
    },
  ];

  const handleLogout = () => {
    clearAuthData();
    navigate("/");
  };

  const linkClasses = ({ isActive }) => {
    return `py-2.5       rounded-md transition duration-75  px-4 flex items-center justify-start gap-4    ${
      isActive ? "bg-primary text-white" : "hover:bg-amber-100"
    }

               `;
  };

  return (
    <div className="  py-6 px-2   ">
      <div className=" gap-4 px-4 flex items-center justify-center max-xl:px-0">
        <div className="rounded-full w-16 h-16 border border-gray-100 text-4xl text-gray-400 flex items-center justify-center bg-gray-100">
          <CgProfile />
        </div>
      </div>
      <h1 className="text-2xl text-center leading-5 font-semibold mt-4">
        Hi Tony!
      </h1>
      <hr className="text-gray-300 mt-5 w-[90%] m-auto" />
      <div className="mt-4 font-secondaryHead space-y-1">
        {links.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.path}
              end={link.path === "/profile"}
              className={linkClasses}
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="capitalize">{link.text}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="mt-auto">
        {/* <Link className="px-5 mt-4 flex items-center justify-start gap-2 text-white tracking-wide font-semibold text-lg rounded-lg py-2 bg-gradient-to-br from-orange-400 to-red-400 max-xl:text-base">
          <GiUpgrade className="text-xl" />
          <span>Upgrade to Pro</span>
        </Link> */}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-3 w-full cursor-pointer text-left px-5 py-2.5 flex items-center gap-2 rounded-lg text-red-500 font-semibold hover:bg-red-50 transition"
        >
          <FiLogOut className="text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
