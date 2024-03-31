import axios from "axios";
import { USER_API_END_POINT } from "../utils/Constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  getOtherUsers } from "../redux/userSlice";
const useOtherUserProfile = (id)=>{
   const dispatch = useDispatch();
    useEffect(()=>{
        const fetchOtherUser = async() => {
            try{
                const res = await axios.get(`${USER_API_END_POINT}/otheruser/${id}`,{
                    withCredentials:true
                });
                dispatch(getOtherUsers(res?.data?.otherUsers));
              }
              catch(error){
                  console.log(error);
              }

        }
        fetchOtherUser();
       

    },[])
   

}
export default useOtherUserProfile;