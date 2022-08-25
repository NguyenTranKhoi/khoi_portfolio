import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-[#0a192f] w-full h-screen text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>ABOUT ME</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-left text-2xl font-bold'>
                        <p>I am Khoi, web developer from VietNam. I have profound interest in website design,
                            building and customization, and everything in between, also am rather at ReactJS.</p>
                    </div>
                    <div className='font-medium'>
                        <p>I am passionate about programming to improve the lives of the people around me. I specialize in creating websites for clients from individuals and small businesses...
                            What would you do if there was a web developer available at your fingertips?
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About