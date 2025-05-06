import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { SiActivitypub } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
const SideNav = () => {
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
  return (
    <div className=" border-gray-100 py-6 px-4  rounded-lg bg-white  shadow-sm max-lg:hidden">
      <div className="flex items-center gap-4 px-4">
        <div className="rounded-full w-16 h-16 border border-gray-100 text-4xl text-gray-400 flex items-center justify-center bg-gray-100">
          <CgProfile />
        </div>
        <div>
          <h1 className="text-2xl leading-5 font-semibold">Hi Tony!</h1>
        </div>
      </div>
      <hr className="text-gray-300 mt-5 w-[90%] m-auto" />
      <ul className="mt-4 font-secondaryHead">
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
                className={`py-3 ${
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
      <Link className="px-5 mt-4 flex items-center justify-start gap-2  text-white tracking-wide font-bold text-lg rounded-lg py-2.5 bg-gradient-to-br from-orange-400 to-red-400">
        <GiUpgrade className="text-xl" />
        <span> Upgrade to Pro</span>
      </Link>
    </div>
  );
};

export default SideNav;
