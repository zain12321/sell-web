import Link from 'next/link'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillHeartFill } from 'react-icons/bs'
import { MdArrowBack, MdOutlineArrowBack } from 'react-icons/md'

function Watch() {
  return (
      <>
       <Link href='/'><a>
       <MdArrowBack
        className='rotate-260 hover:bg-black 
        hover:text-white bg-pink-800 text-white h-11 rounded-full w-11 px-3 py-2 mx-8 my-4'/>
        </a>
        </Link>
    <section className='bg-[#FFFFFF80] mt-2 mx-24 hover:shadow-2xl'>
       
        <div className='flex flex-row-reverse'> 
        <img 
         src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbadges%2Fhot.svg&w=128&q=75" alt="" />
        </div>
      <div className='flex  justify-between '>
     <div>
         <img 
         className='pr-2 pl-28' src="https://bazar-react.vercel.app/assets/images/products/xiaomi-watch.png" alt=" "  />
     </div>
        <div className='space-y-4 pr-60 pt-4'>
            <h1 className='text-[#D23F57] text-[20px] font-bold'>Deal Of The Day</h1>
            <h2 className='text-[#2B3445] text-[25px] font-bold'>Apple Watch Series 4(Black)</h2>
            <p className='text-gray-600 text-[14px] '>I have best watch you can buy a different color ans<br/> of atch from here zain khan we here</p>
 
         <div className='text-[#2B3445] text-[20px]'>
         <small 
            className='text-xl text-gray-500   font-bold'>Fresh Deal Every, day get it now</small><br/>
            <time className='text-xl font-bold'>270<span className='text-[18px] text-gray-500 pr-3'>
                 days</span> 14 <span className='text-[18px] text-gray-500 pr-3'> Hours</span> 50
                 <span className='text-[18px] text-gray-500 pr-3'> Mins 
                 </span> 30<span className='text-[18px] text-gray-500'> Sec</span></time>
         </div>
            <div className=' flex space-x-8 items-center'>
                <button className='bg-[#E63E58] h-11 w-28 rounded-md text-[#FFFFFF] font-bold'>Buy Now</button>
                <button className="bg-[#AEB4BE] h-11 w-16 px-5 py-3 rounded-md text-white" ><BsFillHeartFill className='h-6 w-6'/></button>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Watch