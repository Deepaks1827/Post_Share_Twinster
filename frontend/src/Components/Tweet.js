import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div className="border border-gray-200">
      <div>
        <div className="flex ">
          <div className="flex mt-4 ">
          <Avatar
            src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
            size="40"
            round={true}
          />
          </div>
          <div className="p-4 ml-2">
            <div className="flex item-center ">
              <h1 className="font-bold"> Deepak</h1>
              <p className="text-gray-500 text-sm ml-1"> @deepakShukla . 1m</p>
            </div>
            <div>
              <p> Hi my name is Deepak Shukla .I am creating the twitter. </p>
            </div>
            <div className="flex justify-between my-3">
                <div className="flex item-center">
                   <div className="cursor-pointer hover:bg-green-200 p-2 rounded-full">
                   <FaRegComment size={"20px"}/>
                   </div>
                    
                    <p >0</p>
                </div>
                <div className="flex item-center">
                    <div className="cursor-pointer hover:bg-pink-200 p-2 rounded-full">
                    <CiHeart size={"24px"}/>
                    </div>
                    <p >0</p>
                </div>
                <div className="flex item-center">
                    <div className="cursor-pointer hover:bg-yellow-200 p-2 rounded-full">
                    <CiBookmark size={"24px"}/>
                    </div>
                     <p >0</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
