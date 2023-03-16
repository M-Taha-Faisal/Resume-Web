import Image from 'next/image'
import React from 'react'
import taha2 from '/public/Image/taha2.png'

export default function Top(){
    return(
        <div className='flex flex-wrap justify-around items-center bg-white'>
            <div className='flex flex-col justify-center items-center my-5'>
                <Image src={taha2} alt='taha' width={80} height={80}></Image>
                <h1>Muhammad Taha</h1>
                <h1 className='md:text-xl font-bold text-light'>
                    Certified Web 3.0 & Metaverse Developer
                </h1>
            </div>
            <div className='w-1/2 md:border-l border-gray-300 '>
              <p className='tracking-tighter m-4 text-sm text-gray-600'>As a skilled Web Developer, I have a passion for designing and developing high-quality websites and applications that are visually stunning and user-friendly. I possess a deep understanding of the latest web development technologies and frameworks.</p>
            </div>
        </div>
        
    )
}