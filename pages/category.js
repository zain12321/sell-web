import Link from 'next/link'
import React from 'react'
import { MdArrowBack } from 'react-icons/md'

function Login() {
  return (
      <>
      <div className='px-4 py-3'>
      <Link href='/'><a>
       <MdArrowBack
        className='rotate-260 hover:bg-black 
        hover:text-white bg-green-800 text-white h-11 rounded-full w-11 px-3 py-2 mt-2 mr-11 mb-4'/>
        </a>
        </Link>
      </div>
    < section className='mt-1'>
    



         <div className='flex  flex-col items-center justify-center'>
             <img className='h-11 w-11' src='https://cdn-icons-png.flaticon.com/512/246/246170.png' alt="" />
             <h1 className='pt-8 text-3xl font-bold text-gray-900'>Subscribe To Our Newsletter</h1>
             <p className='pt-2 text-md font-bold text-gray-400'>lorem ipsumm login modu;e  functionn rract<br/> <span className='pl-16'>return export default</span> </p>
         </div>
           <div className='flex items-center bg-[#E3E9EF] justify-center border border-gray-300 hover:rounded-br-md hover:rounded-tr-md hover:border-gray-700 mt-6  rounded-md mb-11 mx-80'>
               <input type="search" name='search' placeholder='Searching for..' required 
               className='ml-3 outline-none placeholder:w-96  placeholder:bg-[#E3E9EF] '/>
               <button className='bg-[#E63E58] text-white rounded-tr-md rounded-br-md w-60 font-bold
                ml-[350px] h-11 '>SUBSCRIBE</button>
           </div>
    </section>
    <section className='flex space-x-6 pl-16 border-gray-300 rounded-xl mt-14 border mb-11 bg-gray-100 h-32 w-[1300px] ml-4'>
  
   <div className='flex items-center'>
       <div className='flex  items-center justify-center'>
       <div className=''>
       <img
           className='h-14 w-16'
 src='https://o.remove.bg/downloads/e97d895f-6e9c-48be-9527-94dbeb1454fe/images-removebg-preview.png'
  alt=''/>

       </div>
       <div className='flex flex-col '>
           <h1 className='font-bold text-2xl'>FAST DELEIVERY</h1>
          
              <p className='text-gray-500'>Start from $10</p>
       </div>
       </div>
   </div>
   <div className='flex items-center'>
       <div className='flex  items-center justify-center'>
       <div className=''>
           <img
           className='h-14 w-16'
 src='https://images-na.ssl-images-amazon.com/images/I/31HElDuPuML._SX331_BO1,204,203,200_.jpg'
  alt=''/>

       </div>
       <div className='flex flex-col '>
           <h1 className='font-bold text-2xl'>Money Garentee</h1>
          
              <p className='text-gray-500'>7 Bdays Back</p>
       </div>
       </div>
   </div>
   <div className='flex items-center'>
       <div className='flex  items-center justify-center'>
       <div className=''>
           <img
           className='h-14 w-16'
 src='https://media.istockphoto.com/vectors/stopwatch-line-icon-watch-and-countdown-timer-sign-vector-graphics-a-vector-id1092047396?s=612x612'
  alt=''/>

       </div>
       <div className='flex flex-col '>
           <h1 className='font-bold text-2xl'>365 Days</h1>
          
              <p className='text-gray-500'>For Free returns</p>
       </div>
       </div>
   </div>
   <div className='flex items-center'>
       <div className='flex  items-center justify-center'>
       <div className=''>
           <img
           className='h-16 w-16'
 src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR5QJz9t8bLoGKAeqkR31JQR2uH0Ui7qB_xEKYGD8QUOEqpL7Jt'
  alt=''/>

       </div>
       <div className='flex flex-col '>
           <h1 className='font-bold text-2xl'>Payment </h1>
          
              <p className='text-gray-500'>Secure System</p>
       </div>
       </div>
   </div>
   <div className='flex items-center'>
       <div className='flex  items-center justify-center'>
       <div className=''>
           <img
           className='h-12 w-16'
 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrHHYhxUDY0l1PBtCxnPz_8fba_zxxEQCGKjaYi0-Xo_f7Yyk'
  alt=''/>

       </div>
       <div className='flex flex-col '>
           <h1 className='font-bold text-2xl'>Online Support</h1>
          
              <p className='text-gray-500'>24/7 daily</p>
       </div>
       </div>
   </div>
    </section>
</>
  )
}

export default Login