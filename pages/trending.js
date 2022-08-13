import Link from 'next/link'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillStarFill, BsStar } from 'react-icons/bs'
import { MdArrowBack } from 'react-icons/md'

function Trending() {
  return (
    <section>
      <div className='px-2 py-3'>
      <Link href='/'><a>
       <MdArrowBack
        className='rotate-260 hover:bg-black 
        hover:text-white bg-blue-800 text-white h-11 rounded-full w-11 px-3 py-2 mt-2 mx-2'/>
        </a>
        </Link>
      </div>

   <h1 className='text-2xl font-bold text-gray-800 px-14 pt-4'>
       Trending Items
   </h1>
   <div className='flex'>
<div className='h-56 w-[300px] ml-14  my-8'>
   <img 
   className='pr-4 w-96 hover:brightness-75 transition-all'
src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flong-product.png&w=384&q=75"
    alt="" />
    <div className='flex '>
       <div className='flex space-y-3  flex-col'>
           <h1 className='pt-4'>ASUS ROG STICKS G15</h1>
           
          <div className='flex space-x-1'> <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsStar className='text-gray-500 h-[17px] w-[17px] '/></div>
       <p className='text-gray-600'>$100<span className='text-[#E63E58] pl-1'>  $80</span></p>
       </div>
       <div className='pl-24 pt-4'>
           <AiOutlineHeart className='h-[21px] w-[21px] text-gray-400'/>
       </div> 
    </div>



</div>

 


<div>

<div className='flex space-x-6'>
  <div>  <div className='mt-8 ml-4'>
          <img className='h-[283.98px]  w-[283.98px] rounded hover:brightness-75 transition-all' src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flong-product.png&w=384&q=75'
          alt=''/>
        </div>
     <div className='flex justify-between mt-4'>
     <div className='space-y-3 pl-4 '>
          <h1 className=''>ASUS ROG STRIX 5G</h1>
    <div className='flex space-x-1'>      <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
          <BsStar className='text-gray-500 h-[17px] w-[17px] '/>
          <BsStar className='text-gray-500 h-[17px] w-[17px] '/>
          <BsStar className='text-gray-500 h-[17px] w-[17px] '/></div>
          <p className='text-gray-500'>$100.00<span className='text-[#E63E58] pl-3'>$80.00</span></p>
       
      </div>
      <div><AiOutlineHeart className='h-[21px] w-[21px] text-gray-400'/></div>
     </div>
    </div>

   
  <div>
  <div className='mt-8 '>
          <img className='h-[283.98px]  w-[283.98px] rounded hover:brightness-75 transition-all' 
          src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt3.png&w=384&q=75'
          alt=''/>
        </div>
     <div className='flex justify-between mt-4'>
     <div className='space-y-3 pl-3'>
          <h1 className=''>ASUS ROG STRIX 5G</h1>
    <div className='flex space-x-1'>       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
          <BsStar className='text-gray-500 h-[17px] w-[17px] '/></div>
          <p className='text-gray-500'>$100.00<span className='text-[#E63E58] pl-3'>$80.00</span></p>
       
      </div>
      <div><AiOutlineHeart className='h-[21px] w-[21px] text-gray-400'/></div>
     </div>
   
  </div>

    
   <div> <div className='mt-8 '>
          <img className='h-[283.98px]  w-[283.98px] rounded hover:brightness-75 transition-all' 
          src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt4.png&w=384&q=75'
          alt=''/>
        </div>
     <div className='flex justify-between mt-4'>
     <div className='space-y-3 '>
          <h1 className=''>ASUS ROG STRIX 5G</h1>
    <div className='flex space-x-1'>      <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
          <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
          <BsStar className='text-gray-500 h-[17px] w-[17px] '/></div>
          <p className='text-gray-500'>$100.00<span className='text-[#E63E58] pl-3'>$80.00</span></p>
       
      </div>
      <div><AiOutlineHeart className='h-[21px] w-[21px] text-gray-400'/></div>
     </div>
   </div>




   </div>




    <div className='flex space-x-6'>
    <div>  <div className='mt-8 ml-4'>
          <img className='h-[283.98px]  w-[283.98px] rounded hover:brightness-75 transition-all' src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flong-product.png&w=384&q=75'
          alt=''/>
        </div>
     <div className='flex justify-between mt-4'>
     <div className='space-y-3 pl-4'>
          <h1 className=''>ASUS ROG STRIX 5G</h1>
    <div className='flex space-x-1'>      <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
          <BsStar className='text-gray-500 h-[17px] w-[17px] '/>
          <BsStar className='text-gray-500 h-[17px] w-[17px] '/></div>
          <p className='text-gray-500'>$100.00<span className='text-[#E63E58] pl-3'>$80.00</span></p>
       
      </div>
      <div><AiOutlineHeart className='h-[21px] w-[21px] text-gray-400'/></div>
     </div>
    </div>

   
  <div>
  <div className='mt-8 '> 
          <img className='h-[283.98px]  w-[283.98px] rounded hover:brightness-75 transition-all' 
          src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt3.png&w=384&q=75'
          alt=''/>
        </div>
     <div className='flex justify-between mt-4'>
     <div className='space-y-3 '>
          <h1 className=''>ASUS ROG STRIX 5G</h1>
    <div className='flex space-x-1'>       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
          <BsStar className='text-gray-500 h-[17px] w-[17px] '/>
          <BsStar className='text-gray-500 h-[17px] w-[17px] '/>
          <BsStar className='text-gray-500 h-[17px] w-[17px] '/></div>
          <p className='text-gray-500'>$100.00<span className='text-[#E63E58] pl-3'>$80.00</span></p>
       
      </div>
      <div><AiOutlineHeart className='h-[21px] w-[21px] text-gray-400'/></div>
     </div>
   
  </div>

    
   <div> <div className='mt-8 '>
          <img className='h-[283.98px]  w-[283.98px] rounded hover:brightness-75 transition-all' 
          src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(3).png&w=384&q=75'
          alt=''/>
        </div>
     <div className='flex justify-between mt-4'>
     <div className='space-y-3 '>
          <h1 className=''>ASUS ROG STRIX 5G</h1>
    <div className='flex space-x-1'>     <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
       <BsFillStarFill className='text-yellow-500 h-[17px] w-[17px]'/>
          <BsStar className='text-gray-500 h-[17px] w-[17px] '/></div>
          <p className='text-gray-500'>$100.00<span className='text-[#E63E58] pl-3'>$80.00</span></p>
       
      </div>
      <div><AiOutlineHeart className='h-[21px] w-[21px] text-gray-400'/></div>
     </div>
   </div>




    </div>
</div>
</div>
    </section>
  )
}

export default Trending