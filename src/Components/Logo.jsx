import React from 'react';
import logo from '../assets/logo.png'
const Logo = () => {
  return (
    <>
      <div className="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
       <a href=""> <img className='object-cover
     max-w-8   h-8'  src={logo} alt="RR Rentals"/></a>
      </div>
    </>
  )
}

export default Logo;
