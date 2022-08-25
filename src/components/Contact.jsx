import React from 'react'
import {FaMapMarkerAlt, FaPhone} from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'


const Contact = () => {
  return ( 
    <div name='contact' className='w-full h-screen bg-[#0a192f] md:flex justify-evenly h-full p-4 py-20'>
      <div className=''>
        <h2 className='text-3xl font-bold text-gray-300'>Contact Info</h2>
        <div className='flex items-center pt-6'>
          <FaMapMarkerAlt className='text-gray-300 ' />
          <p className='ml-2 text-gray-300 font-medium'>Address: Nam Tu Liem, Ha Noi</p>
        </div>
        <div className='flex items-center py-4'>
          <FaPhone className='text-gray-300 ' />
          <p className='ml-2 text-gray-300 font-medium'>Phone: <a href="">0983416384</a></p>
        </div>
        <div className='flex items-center'>
          <HiMail className='text-gray-300 ' />
          <p className='ml-2 text-gray-300 font-medium'>Email: <a href="">khoint268@gmail.com</a></p>
        </div>
      </div>
        <form action="https://getform.io/f/55f70724-fb6e-4feb-94e9-9d242456be1c" method='POST' className='flex flex-col justify-center max-w-[550px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>GET IN TOUCH</p>
                <p className='text-gray-300 py-4 font-medium'>// Submit the form below or email me an email - khoint268@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white font-medium border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Cooperate With Me</button>
        </form>
    </div>
  )
}

export default Contact