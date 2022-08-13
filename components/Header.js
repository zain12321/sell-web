import Image from 'next/image'
import React from 'react'
import {AiFillAppstore, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import  { BiShoppingBag } from 'react-icons/bi'
import { MdKeyboardArrowDown, MdKeyboardArrowRight 
 } from 'react-icons/md'
 import Link from 'next/link'
function Header() {
  return (
    <>
    <header className=' fixed bg-white flex justify-between h-20 px-16  w-full items-center justify-center'>
   <div className=' '>
      <Link href='/'>
      <a>
      <img  class=" "
      src="https://bazar-react.vercel.app/assets/images/logo2.svg" alt="" />
      </a>
      </Link>
   </div>
   <div
    className='flex ml-1 mr-60 sm:mr-1 sm:ml-1  items-center
    lg:max-w-2xl 2xl:max-w-2xl md:max-w-2xl xl:max-w-2xl
     justify-center border rounded-full border-gray-300 hover:border-red-500 h-12 w-[1190px] sm:[690px]'>
 
  <AiOutlineSearch className='h-[30px] w-[30px] text-gray-500 ml-4 '/>
    <input type='search' id="search" name='search' 
    placeholder="Searching for..."
     required className='outline-none
        pl-1
    ' />
 
   <div className='flex bg-gray-100 text-black  ml-[790px] sm:ml-[290px] rounded-tr-full rounded-br-full h-[46px] w-[290px] items-center'>
   <button className='pl-6 sm:pl-6 text-gray-500 text-sm'>
     <Link href='/category'>
     All Categories
     </Link>
   </button>
   <MdKeyboardArrowDown className='pl-3 h-8 w-8 text-black'/>
   </div>
   </div>
   
   <div className='hidden sm:flex items-center justify-center space-x-5 '>
      <Link href="/watch"><a>
     <AiOutlineUser className=' h-[60px] w-[60px] bg-gray-100 hover:bg-gray-300 p-[20px] rounded-full max-w-md'/>
     </a>
     </Link>
    <div className='flex items-center justify-center'>
      <Link href="/weak">
        <a>
       <BiShoppingBag className='h-[60px] w-[60px] bg-gray-100 hover:bg-gray-300 p-[20px] rounded-full max-w-md'/>
       </a>
       </Link>
    <p className='mb-12 mt-3  px-2 bg-[#D23F57] text-white  rounded-full w-6'>3</p></div>
   </div>
   
    </header>


       <navbar className="hidden sm:flex sm:items-center sm:pt-24 sm:px-11 sm:justify-between ">
<Link href="/trending">
           <div className='flex items-center  justify-center bg-gray-100 py-2 px-1 rounded-md '>
  
         <AiFillAppstore className='h-6 w-8'/>
                <p>
                  {/* <Link href='/trending'>Categories</Link> */}
                  Categories

                </p>
         <MdKeyboardArrowRight className='pl-28 h-[25px] w-[140px] '/>
         </div>
         </Link>
           <div className='flex items-center pr-16 pl-[500px] sm:pl-[300px] md:pl-[600px] sm:pr-0 '>
               <ul className='hidden md:flex space-x-32 sm:space-x-3 text-md  text-gray-700  ' >
             
                   <li className='hover:text-red-600 '>
                   <Link href="/footer" >
          <a className=' '>Footer</a>
        </Link>
                       


                   </li>
                   <li className='hover:text-red-600'> 
                   <Link href="/watch">
          <a>Watch</a>
        </Link>
                   </li>
                   <li className='hover:text-red-600'>
                     
                   <Link href="/newdeals">
          <a>New User</a>
        </Link>


                   </li>
                   <li className='hover:text-red-600'>
                   <Link href="/weak">
          <a>Deal Weak</a>
        </Link>

                   </li>
                   <li className='hover:text-red-600'>
                   <Link href="/trending">
          <a>Trending items</a>
        </Link>
                     </li>
                  

               </ul>

           </div>
       </navbar>
      
    </>
  )
}

export default Header