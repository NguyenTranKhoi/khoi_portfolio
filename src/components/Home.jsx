import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600 text-xl'>Xin chào, tôi tên là</p>
            <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Nguyễn Trần Khôi</h1>
            <h2 className='text-4xl py-3 sm:text-5xl py-3 font-bold text-[#8892b0]'>Tôi là một Front-End Deverloper</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Tôi là Front-End Deverloper chuyên về thiết kế các
                ứng dụng trên Website. Hiện tại tôi đang tập chung
                xây dựng các ứng dụng trên Website đầy đủ đáp ứng.
            </p>
            <div className="">
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    Xem công việc
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home