import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%]">
      <div >
        <div className="flex item-center justify-evenly border-b border-gray-200 ">
          <div className="cursor-pointer hover:bg-gray-200 text-center w-full px-4 py-3">
            <h1 className="font-bold text-gray-600 text-lg ">Create Post</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 text-center w-full px-4 py-3">
            <h1 className="font-bold text-gray-600 text-lg">Following</h1>
          </div>
        </div>
       <div >
        <div className="flex item-center p-4">
          <div>
            <Avatar
              src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
              size="40"
              round={true}
            />
          </div>
          <input className="w-full outline-none border-none text-xl ml-2" type="text" placeholder="What is happening?" />
        </div>
        <div className="flex justify-between text-center p-4 border-b border-gray-300">
        <div><CiImageOn size="24px"/></div>
            <button className="px-4 py-1 text-lg text-white border-none rounded-full bg-[#1DA1F2]">Post</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
