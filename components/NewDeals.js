import React from 'react'
import { BiCircle } from 'react-icons/bi'
import { BsRecordCircle } from 'react-icons/bs'
import { MdArrowBack } from 'react-icons/md'

function NewDeals() {
  return (
    <section>
     <div className='flex items-center justify-between px-[70px]'>
         <div>
       <h1 className='text-[#2D3445] font-bold text-[25px]'>Deal Of The Week</h1>
         </div>
         <div className='flex space-x-1 items-center justify-around '>
       <MdArrowBack className=' h-12 rounded-full w-12 px-3 py-2'/>
       <MdArrowBack className='rotate-180 bg-[#E63E58] text-white h-11 rounded-full w-11 px-3 py-2'/>
         </div>
     </div>
     <div className='flex '>
         <div className='flex flex-col justify-between'>
        <div className='flex'>
        <div className='zain m-8  '>
                <div className='flex justify-between m-4'>
                <h1 className='bg-[#E8E8EE] py-3 text-black  px-8 rounded  '>Say ban Glasses</h1>
                <button className='bg-[#E63E58] text-white font-bold px-9 rounded-md '>%50 Off</button>
                </div>
               
                </div>
                <div className='khan m-8  '>
                <div className='flex justify-between m-4'>
                <h1 className='bg-[#E8E8EE]  text-black py-3 px-8 rounded  '>Say ban Glasses</h1>
                <button className='bg-[#E63E58] text-white font-bold px-9 rounded-md '>%50 Off</button>
                </div>
               
         </div>
        </div>
       <div className='flex'>
       <div className='show m-8  '>
                <div className='flex justify-between m-4'>
                <h1 className='bg-[#E8E8EE] py-3 text-black px-8 rounded  '>Say ban Glasses</h1>
                <button className='bg-[#E63E58] text-white font-bold px-9 rounded-md'>%50 Off</button>
                </div>
               
         </div>  <div className='nike m-8  '>
                <div className='flex justify-between m-4'>
                <h1 className='bg-[#E8E8EE] py-3 text-black   px-8 rounded  '>Say ban Glasses</h1>
                <button className='bg-[#E63E58] text-white font-bold px-9 rounded-md '>%50 Off</button>
                </div>
               
         </div>
       </div>
         </div>
      
     </div>
          <div className='flex items-center space-x-1 justify-center'>
          <BsRecordCircle  className='h-[20px] text-[#0F3460] w-[20px]'/>

              <BiCircle className='h-6 w-6'/>
          </div>
    </section>
  )
}

export default NewDeals