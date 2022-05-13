import React from 'react'
import Centermenu from './Centermenu';

const Header = () => {
  return (
    <div>
        <div className='header bg-black flex items-center justify-between px-[5rem] pt-8 text-[0.8rem]'>
            <img className='w-[42px] h-[42px]' src='musiclogo.png' alt='musiclogo' />
            <Centermenu />
            <div className='flex'>
            <button className='cursor-pointer px-7 py-1.5 border border-2px border-orange-600 mr-7 hover:bg-orange-600 rounded-lg'>Sign up</button>
            <button className='cursor-pointer px-7 py-1.5 border border-2px border-orange-600 mr-7 hover:bg-orange-600 rounded-lg'>Log in</button>
            </div>
        </div>
    </div>
  )
}

export default Header;