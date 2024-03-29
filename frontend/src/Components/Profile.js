import React from 'react'
import Avatar from 'react-avatar';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useGetProfile from '../hooks/useGetprofile';

const Profile = () => {
  const {user,Profile} = useSelector(store=>store.user);
  
  useGetProfile(user?._id);
  return (
    <div className='w-[50%] border-left border-right border-gray-200'>
       <div>
          <div className='flex item-center py-2'>
            <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                 <IoIosArrowRoundBack size="24px" />
            </Link>
            <div className='ml-2'>
                <h1 className='font-bold text-lg'>
                      {Profile?.name}
                </h1>
                <p className='text-gray-500 text-sm'>
                     18 posts
                </p>
            </div>
          </div>
          <img src='https://t4.ftcdn.net/jpg/02/90/92/83/360_F_290928379_xpW40juA2pvDLqMzlWcwmik0ypDYbq0O.jpg' alt='Banner'/>
          <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
          <Avatar
              src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
              size="120"
              round={true}
            />
          </div>
          <div className='text-right m-4'>
            <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>
                Edit Profile
            </button>
          </div>
          <div className='m-4'>
            <h1 className='font-bold text-xl'>{Profile?.name}</h1>
            <p>{`@${Profile?.username}`}</p>
          </div>
          <div className='m-4 text-sm'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
      </div>
    </div>
  )
}

export default Profile