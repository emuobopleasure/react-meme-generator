import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='h-[65px] bg-gradient-to-r from-[#672280] to-[#A626D3] flex justify-between items-center px-6'>
            <div className='flex items-center gap-3'>
                <img src='images/trollface.png' alt= 'trollface' className='header-img w-[35px] h-[31px] object-cover'/>
                <h1 className='nav-title text-[17px] font-bold'>
                    Meme Generator
                </h1>
            </div>
            <h4 className='text-[12px] font-[500]'>React Course - <br/>Project 3</h4>
        </nav>
    </div>
  )
}

export default Header