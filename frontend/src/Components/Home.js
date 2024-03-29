import React from 'react'

import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { Outlet } from 'react-router-dom'
import useOtherUserProfile from '../hooks/useOtherUserProfile'
import { useSelector } from 'react-redux'


const Home = () => {
  const {user,otherUsers} = useSelector(store=>store.user);
  useOtherUserProfile(user?._id);
 
  return (
    <div className='flex justify-between mx-auto w-[80%]'>
    
    <LeftSideBar/> 
    
    <Outlet/>
    
    <RightSideBar otherUsers={otherUsers}/>
    </div>
  )
}

export default Home