import React, { useState } from 'react';
import axios from "axios";
import { USER_API_END_POINT } from '../utils/Constant';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name,setName] =useState("");
  const [username,setUsername] =useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const dispatch = useDispatch();
  const submitHandler = async(e)=>{
       e.preventDefault();
       if(isLogin){
        //Login logic.
        try{
          const res = await axios.post(`${USER_API_END_POINT}/login`,{email,password},{
            headers:{
              'Content-Type':'application/json'
            },
            withCredentials:true
          });
          dispatch(getUser(res?.data?.user));
          if(res?.data?.success){
            navigate("/");
            toast.success(res?.data?.message);
          }

        }
        catch(error){
          toast.success(error?.response?.data?.message);
          console.log(error);
        }

       }
       else{
        //SignUp logic.
        try{
          const res = await axios.post(`${USER_API_END_POINT}/register`,{name,username,email,password},{
            headers:{
              'Content-Type':'application/json'
            },
            withCredentials:true
          });
          if(res?.data?.success){
            setIsLogin(true);
            toast.success(res?.data?.message);
          }
        

        }
        catch(error){
          toast.success(error?.response?.data?.message);
          console.log(error);
        }
       }
       
  }
  const loginHandler=()=>{
    setIsLogin(!isLogin);
  }
  return (
    <div className='w-screen h-screen flex item-center justify-center'>
     <div className='flex items-center justify-evenly w-[80%]'>
        <div>
        <img
            className="ml-5"
            width={"400px"}
            src="https://sweetwaternow.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2024/01/Depositphotos_676194222_XL-scaled.jpg"
            alt="twitter-logo"
          />

        </div>

        <div>
            <div className='my-5' >
                <h1 className='font-bold text-6xl'>Happening Now.</h1>
            </div>
            <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLogin ? "Login" : "SignUp"} </h1>
            <form onSubmit={submitHandler} className='flex flex-col w-[55%]'>
            {
              !isLogin && (
                <>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
                </>
              )
            }
               
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
                
                
                <button  className='border-none py-2 my-4 rounded-full text-lg text-white bg-[#1DA1F2]' >{isLogin ? "Login" : "Create Account"} </button>
               <h1> {isLogin ? "Do not have an account?" : " Already have an account ? " } <span onClick={loginHandler} className='font-bold text-blue-600 cursor-pointer'>{isLogin?" SignUp ":" Login "}</span></h1>
            </form>
        </div>
     </div>
    </div>
  )
}

export default Login
