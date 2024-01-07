import React, { useState } from 'react'
import Header from './Header'
import BackgroundImage from '../images/background.jpg'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
           <img src={BackgroundImage} alt="background"/>
        </div>
        <form className="relative mx-auto top-36 px-20 py-16 w-2/5 flex flex-col bg-black/90 rounded-md">
            <h1 className='text-white text-3xl font-semibold mb-5'>
                {isSignInForm? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input 
                type="text" 
                placeholder="Full Name" 
                className="px-4 py-2 my-2 rounded-md bg-[#333333] text-white"
              />
            )}
            <input 
              type="text" 
              placeholder="Email Address" 
              className="px-4 py-2 my-2 rounded-md bg-[#333333] text-white"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="px-4 py-2 my-2 rounded-md bg-[#333333] text-white"
            />
            <button className="p-2 mt-7 mb-5 bg-[#cf0e07] text-white px-4 py-2 rounded-md">
                {isSignInForm? "Sign In" :"Sign Up"}
            </button>
            <h1 className='text-white hover:cursor-pointer' onClick={()=>toggleSignInForm()}>
                { isSignInForm ?
                  `New to NetflixGPT? Sign up Now`:
                  `Already a User? Sign in Now`
                }
            </h1>
        </form>
    </div>
  )
}

export default Login