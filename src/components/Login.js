import React from 'react'
import Header from './Header'
import BackgroundImage from '../images/background.jpg'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
           <img src={BackgroundImage} alt="background"/>
        </div>
        <form className="relative mx-auto top-36 px-20 py-16 w-2/5 flex flex-col bg-black/90 rounded-md">
            <h1 className='text-white text-3xl font-semibold mb-5'>Sign In</h1>
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
            <button className="p-2 mt-7 mb-5 bg-[#cf0e07] text-white px-4 py-2 rounded-md">Sign In</button>
            <h1 className='text-white'>New to NetflixGPT? Sign up Now</h1>
        </form>
    </div>
  )
}

export default Login