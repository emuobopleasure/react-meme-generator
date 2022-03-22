import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='h-[65px] bg-gradient-to-r from-[#672280] to-[#A626D3] flex justify-between items-center px-6'>
            <div className='flex gap-3'>
                <img src='images/trollface.png' className='header-img w-[35px] h-[31px]'/>
                <h1 className='nav-title text-[20px] font-bold'>
                    Meme Generator
                </h1>
            </div>
            <h4 className='text-[12px] font-[500]'>React Course - Project 3</h4>
        </nav>
    </div>
  )
}

export default Header