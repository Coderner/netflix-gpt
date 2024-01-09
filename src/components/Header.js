import React from 'react'
import Logo from "../images/logo.png"

const Header = () => {
  return (
    <div className='absolute px-8 sm:px-20 py-8 bg-gradient-to-b from-black z-10 w-full'>
        <img src={Logo} alt="logo" className='w-52 xl:w-64'/>
    </div>
  )
}

export default Header