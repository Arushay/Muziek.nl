import React from 'react'

const Centermenu = () => {
  return (
    <div>
        <div className='flex'>
            <ul className='flex w-[100%] justify-between'>
                <li className='mr-12 cursor-pointer'>Home</li>
                <li className='mr-12 cursor-pointer'>About</li>
                <li className='mr-12 cursor-pointer'>Events</li>
                <li className='mr-12 cursor-pointer'>Albums</li>
            </ul>
        </div>
    </div>
  )
}

export default Centermenu;