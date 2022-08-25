import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import GitHub from '../assets/github.png'
import ReactImg from '../assets/reactjs.png'
import Tailwind from '../assets/tailwind.png'
import Node from '../assets/nodejs.png'
import Mongo from '../assets/mongo.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>SKILLS</p>
                <p className='py-4 font-medium'>// These are the jobs that I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4 font-semibold'>HTML</p>
                </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4 font-semibold'>CSS</p>
                </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon" />
                    <p className='my-4 font-semibold'>REACT JS</p>
                </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="NODEJS icon" />
                    <p className='my-4 font-semibold'>NODE JS</p>
                </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="MONGO icon" />
                    <p className='my-4 font-semibold'>MONGO DB</p>
                </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="TAILWINDCSS icon" />
                    <p className='my-4 font-semibold'>TAILWINDCSS</p>
                </div>
                 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GITHUB icon" />
                    <p className='my-4 font-semibold'>GITHUB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills