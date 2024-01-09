import React from 'react'
import Logo from "../images/logo.png"
import User from "../images/user.jpg"
import { auth } from '../utils/firebase';
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
       navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute flex justify-between items-center px-8 sm:px-20 py-8 bg-gradient-to-b from-black z-10 w-full'>
        <img src={Logo} alt="logo" className='w-52 xl:w-64 h-14 xl:h-20'/>
        {
          user && (
            <div className='flex gap-2'>
               <img src={User} alt="user-icon" className='w-8 xl:w-12 h-8 xl:h-12'/>
               <button 
                 className='bg-red-500 text-white font-semibold rounded-md px-3'
                 onClick={()=>handleSignOut()}
               >
                 Sign out
               </button>
            </div>
          )
        }
    </div>
  )
}

export default Header