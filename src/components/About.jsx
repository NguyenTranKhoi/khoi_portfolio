import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-[#0a192f] w-full h-screen text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p>Xin chào, tôi là Khôi rất vui được gặp bạn, xin hãy nhìn xung quanh</p>
                    </div>
                    <div className=''>
                        <p>Tôi đam mê lập trình để cải thiện cuộc sống của những người xung quanh tôi.
                            Tôi chuyên tạo những trang website cho khách hàng từ cá nhân và doanh nghiệp nhỏ...
                            Bạn sẽ làm gì nếu có một lập trình website có sẵn trong tầm tay bạn ? 
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About