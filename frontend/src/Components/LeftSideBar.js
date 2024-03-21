import React from "react";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoBookmarksOutline } from "react-icons/io5";
import { Link } from "react-router-dom";



const LeftSideBar = () => {
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img
            className="ml-5"
            width={"24px"}
            src="https://sweetwaternow.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2024/01/Depositphotos_676194222_XL-scaled.jpg"
            alt="twitter-logo"
          />
        </div>
        <div className="my-4">
          <Link to="/" className="flex item-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CiHome  size={"24px"}/>
            </div>
            <h1 className="text-lg font-bold ml-2">Home</h1>
          </Link>
          <div className="flex item-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CiHashtag  size={"24px"}/>
            </div>
            <h1 className="text-lg font-bold ml-2">Explore</h1>
          </div>
          <div className="flex item-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <IoIosNotificationsOutline size={"24px"}/>
            </div>
            <h1 className="text-lg font-bold ml-2">Notification</h1>
          </div>
          <Link to="/profile" className="flex item-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CgProfile  size={"24px"}/>
             </div>
             <h1 className="text-lg font-bold ml-2">Profile</h1>
          </Link>
          <div className="flex item-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <IoBookmarksOutline size={"24px"}/>
            </div>
            <h1 className="text-lg font-bold ml-2">Bookmarks</h1>
          </div>
          <Link to="/login" className="flex item-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CiLogout size={"24px"}/>
            </div>
            <h1 className="text-lg font-bold ml-2">Logout</h1>
          </Link>
          <button className="px-4 py-2 border-none text-mg w-full rounded-full text-white font-bold bg-[#1DA1F2]">Post</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
