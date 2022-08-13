import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    < section className=''>
         <div className='flex  flex-col items-center justify-center'>
             <img className='h-11 w-11' src='https://cdn-icons-png.flaticon.com/512/246/246170.png' alt="" />
             <h1 className='pt-8 text-3xl font-bold text-gray-900'>Subscribe To Our Newsletter</h1>
             <p className='pt-2 text-md font-bold text-gray-400'>lorem ipsumm login modu;e  functionn rract<br/> <span className='pl-16'>return export default</span> </p>
         </div>
           <div className='flex items-center bg-[#E3E9EF] justify-center border border-gray-400 hover:rounded-br-md hover:rounded-tr-md hover:border-gray-700 mt-6  rounded-md mb-11 mx-80'>
               <input type="search" name='search' placeholder='Searching for..' required 
               className='ml-3 outline-none placeholder:w-96  placeholder:bg-[#E3E9EF] '/>
               <button className='bg-[#E63E58] text-white rounded-tr-md rounded-br-md w-60 font-bold
                ml-[350px] h-11 '>
                  <Link href='/'>
                  <a>SUBSCRIBE</a></Link>
                </button>
           </div>
    </section>
  )
}

export default Login