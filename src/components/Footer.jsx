import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full bg-[#0a192f] py-10'>
        <div className='flex justify-center'>
            <div className='flex items-center'>
                <p className='text-white text-sm'>Contact Designed & Developed by</p>
                <h3 className='text-gray-300 font-bold pl-1'>Nguyễn Trần Khôi</h3>
            </div>
        </div>
        <div className='flex justify-center'>
             <div className='flex items-center'>
                <p className='text-white text-sm'>All rights reserved</p>
                <h3 className='text-gray-300 font-bold pl-1'>2022</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer