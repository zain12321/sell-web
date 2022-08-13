import Link from 'next/link'
import React from 'react'
import { BsFillStarFill, BsStar } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { MdArrowBack, MdOutlineKeyboardArrowRight } from 'react-icons/md'

function NewArrival() {
  return (
      <>
         <Link href='/'><a>
       <MdArrowBack
        className='rotate-260 hover:bg-black 
        hover:text-white bg-yellow-800 text-white h-11 rounded-full w-11 px-3 py-2 mx-3 my-2'/>
        </a>
        </Link>
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



    <section>
     <div className='flex items-center '>
         <img className='h-16 pb-2 w-28 pr-4 pl-11 ' src="https://lh3.googleusercontent.com/Oxey4OQzK4VPhWK1IJfx8jwPeObL65D2HGh368hSyDFMwiywNWhj_gfb9P52gASvyPSwHsvN0AX_iP1g_468L2Z6bI4_5BPikBk69pxfKg" alt="" />
         <p className='font-bold text-[#2B3445] text-2xl'>Flash Deals</p>
     </div>
     <div className='flex space-x-11'>
     <div className='ml-14'>
             <img 
             className='hover:brightness-50 '
src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fchair-and-clothes.png&w=384&q=75" alt='' />
     <div className='flex  justify-between w-[275px]  p-4'>
         <div className='flex flex-col space-y-2'>
       <h1>Smart Acth black</h1>
    <div className='flex '>   <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsStar className='text-gray-500 h-[17px] w-[17px] '/>
       </div>
       <p className='text-[#E63E58]'>$200 <span className='text-[#2B3445]'>$180</span></p>
         </div>
         <div>
     <FiHeart className='h-6 w-6 text-gray-500'/>
         </div>
     </div>
         </div>
         <div className='ml-8'>
             <img 
             className='hover:brightness-75 '
src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt3.png&w=384&q=75" alt='' />
     <div className='flex  justify-between w-[275px]  p-4'>
         <div className='flex flex-col space-y-2'>
       <h1>Smart Acth black</h1>
    <div className='flex'>   <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsStar className='text-gray-500 h-[17px] w-[17px]'/>
       <BsStar className='text-gray-500 h-[17px] w-[17px] '/>
       </div>
       <p className='text-[#E63E58]'>$200 <span className='text-[#2B3445]'>$180</span></p>
         </div>
         <div>
     <FiHeart className='h-6 w-6 text-gray-500'/>
         </div>
     </div>
         </div>
         <div className='ml-8'>
             <img 
            
src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt4.png&w=384&q=75" alt='' 
className='hover:brightness-50  '/>
     <div className='flex  justify-between w-[275px]  p-4'>
         <div className='flex flex-col space-y-2'>
       <h1>Smart Acth black</h1>
    <div className='flex'>   <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsStar className='text-gray-500 h-[17px] w-[17px]'/>
       <BsStar className='text-gray-500 h-[17px] w-[17px]'/>
       </div>
       <p className='text-[#E63E58]'>$200 <span className='text-[#2B3445]'>$180</span></p>
         </div>
         <div>
     <FiHeart className='h-6 w-6 text-gray-500'/>
         </div>
     </div>
         </div>
         <div className='ml-8'>
             <img 
             className='hover:brightness-50 '
src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt5.png&w=384&q=75" alt='' />
     <div className='flex  justify-between w-[275px]  p-4'>
         <div className='flex flex-col space-y-2'>
       <h1>Smart Acth black</h1>
    <div className='flex'>   <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsStar className='text-gray-500 h-[17px] w-[17px] '/>
       </div>
       <p className='text-[#E63E58]'>$200 <span className='text-[#2B3445]'>$180</span></p>
         </div>
         <div>
     <FiHeart className='h-6 w-6 text-gray-500'/>
         </div>
     </div>
         </div>
      



      
     </div>
    </section>
    </>
  )
}

export default NewArrival