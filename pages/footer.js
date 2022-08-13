import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineGoogle, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { MdArrowBack } from 'react-icons/md'

function footer() {
  return (
      <>
       
    <footer className='bg-[#0C0E30] px-8 py-14 flex items-center justify-center h-screen '>
   <div> <Link href='/'><a>
       <MdArrowBack
        className='rotate-260 hover:bg-black 
        hover:text-white bg-white text-black h-11 rounded-full w-11 px-3 py-2 mr-11 mb-[540px]'/>
        </a>
        </Link>
        </div>
          <div className='  space-y-4 '>
        <img 
        
        src="https://bazar-react.vercel.app/assets/images/logo.svg"
         alt="" />
         <p className='text-[#AEB4BE] pt-2'>lorem ipsum inside footer login headr div class <br/> name componenets spaces theu he is never <br/>want  selection spaces type search</p>
                <div className='flex space-x-2 '>
                <div className='flex items-center bg-[#0C2A4D] px-3 rounded-md'>
                 <img 
                   className='h-6 w-8'
        src='https://o.remove.bg/downloads/2709fb9a-a322-4d4d-922c-b3398b8ce3c2/images__3_-removebg-preview.png' alt=''/>
                   <div className='flex flex-col text-[#FFFFFF] pl-2'>  <p className='text-[9px] font-bold mr-12'>Get it on</p>
                     <p className='text-[14px] font-bold'>Google Play</p></div>
                     </div>
                  <div className='flex items-center py-1 px-4 rounded-md bg-[#0C2A4D]'>
                  <img className='h-8 w-[40px]' 
 src='https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-appstore-icon-png-image-purepng-transparent-4.png'
                    alt='' />
{/* <Image src='/khan.png' width="20" height="20"
   
 alt=''/> */}
                   <div className='flex flex-col text-[#FFFFFF] pl-2'>
                   <p className='text-[8px] font-bold '>Download on the </p>
                        <p className='text-[14px] font-bold'>App Store</p>
                   </div>
                  </div>
              
                </div>
          </div>


          <div className='pl-16  space-y-4'>
           <h1 className='text-3xl text-[#FFFFFF] '>

               <Link href="/">
           <a>About us</a>
           </Link>
           </h1>
          
             
           <div className='text-[#AEB4BE] '>
               <ul className=' space-y-2'>
               <li>Careers</li>
               <li>Our Store</li>
               <li>Our Cares</li>
                   
               <li>Terms and condition</li>
               <li>Privacy Policy</li>
               </ul>
               </div>
          </div>
            

          <div className='pl-16  space-y-4 '>
           <h1 className='text-3xl text-[#FFFFFF]  '>Customer Care</h1>
           <div className=' text-[#AEB4BE]'>
               <ul className=' space-y-2'>
               <li>Help center</li>
               <li>How to Buy</li>
               <li>Tracke your order</li>
                   
               <li>Comprate And bulk Purchasing</li>
               <li>Returns and Refunds</li>
               </ul>
           </div>
          </div>

          <div className='pl-16  space-y-4 mt-4'>
           <h1 className='text-3xl text-[#FFFFFF]  '>Contact us</h1>
           <div className=' text-[#AEB4BE]'>
               <ul className=' space-y-2'>
               <li>70 Washington Square South, New York, NY <br/>10012, United States</li>
               <li  className='pt-4'>Email: uilib.help@gmail.com</li>
                   
               <li>Phone: +1 1123 456 780</li>
               
               </ul>
               <div className='flex space-x-4 mt-3 '>
                 <FiFacebook className='bg-[#00000033]  h-[36px] w-[36px] p-2 rounded-full'/>
                 <FiTwitter className='bg-[#00000033]  h-[36px] w-[36px] p-2 rounded-full'/>
                 <AiOutlineYoutube className='bg-[#00000033]   h-[36px] w-[36px] p-2 rounded-full'/>
                 <AiOutlineInstagram className='bg-[#00000033]  h-[36px] w-[36px] p-2 rounded-full'/>
                 <AiOutlineGoogle className='bg-[#00000033]   h-[36px] w-[36px] p-2 rounded-full'/>
              
            </div>
           </div>

          </div>


      
    </footer>
    </>
  )
}

export default footer