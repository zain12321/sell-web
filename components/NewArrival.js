import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

function NewArrival() {
  return (
    <section>
    <div className='flex  items-center justify-between pt-14 pb-8 px-[70px]'>
        <div className=''>
          <h1 className='text-[25px] font-bold text-[#2B3445]'>New Arrivals</h1>
        </div>
        <div className='flex  items-center justify-evenly'>
       <h1 className='text-gray-500'>
      View all
       </h1>
       <MdOutlineKeyboardArrowRight className='text-gray-500 '/>
        </div>
    </div>
    <div className='flex items-center  space-x-6 my-1 ml-16 mb-11'>
     <div>
     <img
    className='h-[185px] w-[185px] hover:brightness-50  '  
      src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=384&q=75" alt=""/>
         <h1 className='text-[#2B3445] mt-4 ml-1'>$138.00 <span className='text-[#D23F57]'>$100.00</span></h1>
     </div>
     <div>
     <img
      className='h-[185px] w-[185px] hover:brightness-50 '   
 src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=384&q=75" alt=""/>
         <h1 className='text-[#2B3445] mt-4 ml-1'>$138.00 <span className='text-[#D23F57]'>$100.00</span></h1>
     </div>
     <div>
     <img
       className='h-[185px] w-[185px] hover:brightness-50 '     src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fbgwatch.png&w=384&q=75" alt=""/>
         <h1 className='text-[#2B3445] mt-4 ml-1'>$138.00 <span className='text-[#D23F57]'>$100.00</span></h1>
     </div>
     <div>
     <img
     className='h-[185px] w-[185px] hover:brightness-50 '    src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(1).png&w=384&q=75" alt=""/>
         <h1 className='text-[#2B3445] mt-4 ml-1'>$138.00 <span className='text-[#D23F57]'>$100.00</span></h1>
     </div>
     <div>
     <img
       className='h-[185px] w-[185px] hover:brightness-50 '     src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(4).png&w=384&q=75" alt=""/>
         <h1 className='text-[#2B3445] mt-4 ml-1'>$138.00 <span className='text-[#D23F57]'>$100.00</span></h1>
     </div>
     <div>
     <img
       className='h-[185px] w-[185px] hover:brightness-50 '  
       
src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(3).png&w=384&q=75" alt=""/>
         <h1 className='text-[#2B3445] mt-4 ml-1'>$138.00 <span className='text-[#D23F57]'>$100.00</span></h1>
     </div>
    </div>
    </section>
  )
}

export default NewArrival