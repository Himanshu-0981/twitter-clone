import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

import { user_img } from "../assets/images";

import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

import { NavLink, useNavigate } from "react-router-dom";

import { ReminderButton, SideMenu, TweetButton, UserImg } from "../components";
import { twitter_newTweet } from "../assets/svgs";
import { useAuth } from "../contexts/auth";
import { useState } from "react";
function UserProfile() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="w-0 w-500:w-28 w-600:w-24 sm:w-20 md:w-20 lg:w-20 xl:w-72  ">
        <section className=" fixed overflow-y-auto overflow-x-hidden h-screen hidden w-500:flex flex-col   items-center xl:items-start p-3 w-20 xl:p-5 xl:w-72">
          <SideMenu icon={<FaXTwitter />} redirectTo={`/`} />
          <SideMenu icon={<GoHomeFill />} title="Home" redirectTo={`/`} />
          <SideMenu icon={<FiSearch />} title="Explore" redirectTo={`/`} />
          <SideMenu
            icon={<IoNotificationsOutline />}
            title="Notifications"
            redirectTo={`/`}
          />
          <SideMenu
            icon={<MdOutlineEmail />}
            title="Messages"
            redirectTo={`/`}
          />
          <SideMenu icon={<RiFileListLine />} title="Lists" redirectTo={`/`} />
          <SideMenu
            icon={<IoPeopleOutline />}
            title="Communities"
            redirectTo={`/`}
          />
          <SideMenu icon={<FaXTwitter />} title="Premium" redirectTo={`/`} />
          <SideMenu
            icon={<BsPerson />}
            title="Profile"
            redirectTo={`/profile`}
          />
          <SideMenu icon={<CiCircleMore />} title="More" redirectTo={`/`} />
          <TweetButton
            img={twitter_newTweet}
            className={"p-2 h-10 w-10 text-center "}
            title={"Post"}
          />
          <div className="mt-3"></div>
          <div className="w-full p-2 hover:bg-[#ffffff1a] duration-150 cursor-pointer rounded-full">
            {auth?.user ? (
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <UserImg
                    img={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${auth?.user?.username}`}
                  />
                  <div className="text-[15px] hidden xl:flex flex-col">
                    <h1 className="font-semibold">{auth?.user?.name}</h1>
                    <h1 className="font-thin">@{auth?.user?.username}</h1>
                  </div>
                </div>
                <div className="hidden xl:flex">
                  <BsThreeDots />
                </div>
              </div>
            ) : (
              <ReminderButton
                handleClick={() => navigate("/signup_login")}
                title={"Login"}
                icon={<IoMdLogIn size={20} />}
              />
            )}
          </div>
        </section>
      </div>

      <main className=" w-[42rem] border-[0.1px] border-l-0 border-gray-800">
        {" "}
        <nav className="flex items-center gap-8 p-2">
          <NavLink to="/for-you">
            <IoMdArrowRoundBack />
          </NavLink>
          <div className="">
            <h1 className="font-bold">marvin</h1>
            <p className="text-xs text-gray-400">0 posts </p>
          </div>
        </nav>
        <section className="bg-white h-44 w-full relative flex  justify-between">
          <div className="absolute -bottom-12  flex  justify-between w-full items-center px-2 ">
            <img
              src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${auth?.user?.username}`}
              className="h-20 w-20 xs:h-28 xs:w-28 rounded-full  border-black border-[3px]"
            />
            <button className="text-gray-300 border  rounded-full px-3 py-1 font-bold border-gray-500 mt-16 hover:bg-[#ffffff2f] ">
              Edit profile
            </button>
          </div>
        </section>
        <section className="mt-14 ml-4 text-sm pb-10">
          <h1 className="font-bold text-xl">{auth?.user?.name}</h1>
          <p className="text-gray-500 text-sm">@{auth?.user?.username}</p>
          <p className="flex items-center gap-1 mt-3 text-gray-500 ">
            <IoCalendarOutline className="text-gray-500" /> Joined September
            2023
          </p>
          <div className="mt-2 text-sm flex items-center gap-3">
            <h1 className="flex items-center gap-1">
              <p>7</p> <p className="text-gray-500">following</p>
            </h1>
            <h1 className="flex items-center gap-1">
              <p>0</p> <p className="text-gray-500">followers</p>
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserProfile;
