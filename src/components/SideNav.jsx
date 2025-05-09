import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { SiActivitypub } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
import { useAuth } from "../context/AuthContext";
import { FiLogOut } from "react-icons/fi";

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
  ];

  const handleLogout = () => {
    clearAuthData();
    navigate("/");
  };

  return (
    <div className="  py-6 px-2   ">
      <div className="flex items-center gap-4 px-4 max-xl:px-0">
        <div className="rounded-full w-16 h-16 border border-gray-100 text-4xl text-gray-400 flex items-center justify-center bg-gray-100">
          <CgProfile />
        </div>
        <div>
          <h1 className="text-2xl leading-5 font-semibold">Hi Tony!</h1>
        </div>
      </div>
      <hr className="text-gray-300 mt-5 w-[90%] m-auto" />
      <ul className="mt-4 font-secondaryHead space-y-1">
        {links.map((link, i) => {
          return (
            <li
              key={link.path}
              onClick={() => {
                sessionStorage.setItem("current", JSON.stringify(i));
                setcurrent(i);
              }}
            >
              <Link
                to={link.path}
                className={`py-2.5  ${
                  current == i ? "bg-primary text-white" : "hover:bg-amber-100"
                }  rounded-md transition duration-75  px-4 flex items-center justify-start gap-4`}
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="capitalize">{link.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto">
        <Link className="px-5 mt-4 flex items-center justify-start gap-2 text-white tracking-wide font-semibold text-lg rounded-lg py-2 bg-gradient-to-br from-orange-400 to-red-400 max-xl:text-base">
          <GiUpgrade className="text-xl" />
          <span>Upgrade to Pro</span>
        </Link>

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
