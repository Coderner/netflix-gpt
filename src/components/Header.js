import React from 'react'
import Logo from "../images/logo.png"

const Header = () => {
  return (
    <div className='absolute px-20 py-8 bg-gradient-to-b from-black z-10'>
        <img src={Logo} alt="logo" className='w-1/5'/>
    </div>
  )
}

export default Header