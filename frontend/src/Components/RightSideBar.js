import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const RightSideBar = ({otherUsers}) => {
  return (
    <div className="w-[25%] mt-3">
      <div className="flex item-center p-2 bg-gray-200 rounded-full outline-none ">
        <CiSearch size="30px" />
        <input
          type="text"
          className="bg-transparent  outline-none px-2"
          placeholder="Search"
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg"> Who to follow </h1>
        {
          otherUsers?.map((user)=>{
            return (
              <div key={user?._id} className="flex item-center justify-between my-3">
            <div className="flex">
              <Avatar
                src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
                size="40"
                round={true}
              />
             </div>
             <div className="ml-2">
              <h1 className="font-bold"> {user?.name}</h1>
              <p className="text-sm">{`@${user?.username}`}</p>
             </div>
             <div>
             <Link to={`/profile/${user?._id}`}>
             <button className="px-4 py-1 rounded-full text-white  bg-black">
                Profile
              </button>
             </Link>
            
            </div>
          </div>
         
            )
          })
        }
        
      </div>
    </div>
  );
};

export default RightSideBar;
