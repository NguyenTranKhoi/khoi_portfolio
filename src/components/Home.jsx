import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Avt from '../assets/khoi.jpg'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600 text-xl font-semibold'>👋Hi, my name is</p>
            <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Nguyen Tran Khoi</h1>
            <h2 className='text-4xl py-3 sm:text-5xl py-3 font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
            <p className='text-[#8892b0] font-semibold py-4 max-w-[700px]'>I am a Front-End Developer specializing in designing web applications. Currently,
             I am focusing on building fully responsive Website applications
            </p>
            <div className="">
                <button className='text-white font-semibold group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work
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