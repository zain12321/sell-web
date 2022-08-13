import React from 'react'

function Section() {
  return (
    <section className=' flex mt-3 space-x-11 bg-gray-100 '>
        <div className='h-[530px] w-96 bg-[#FFFFFF80] ml-28 mt-14 space-y-1 hover:shadow-xl'>
                <img className=' h-400 w-300  px-6 pb-4 pt-14' src="https://bazar-react.vercel.app/assets/images/products/shoes-1.png" alt=""/>
            <div className='p-4'>
            <p className='text-[#7D879C] pt-2'>SPECIAL OFFER</p>
                <h1 className='text-[#E63E58]  text-3xl font-bold pt-4'>
                  Comfortable<span className='text-[#2B3445] '> Original<br/> Cotton Sneaker</span>
                </h1>
                <p className='text-[#7D879C]'>Hancerchief we have a able for <br/>immport stuff special 
                  you can buy<br/> every thing from us.</p>
                <button className='text-[#2B3445]  border-b-2 border-red-500  text-sm font-bold'>Shop Now</button>

            </div>
        </div>
        <div>
            <div className='flex justify-between h-[240px] hover:shadow-xl w-[740px] mx-6 p-4 mt-[60px] mb-11 bg-[#FFFFFF80]'>
                      <div>
                      <p className='text-[#7D879C] pt-2'>JACKETS</p>
                <h1 className='text-[#E63E58] pb-2 text-3xl font-bold'>
                Minimalist<span className='text-[#2B3445]'> Geniune<br/>Cotton Jackets</span>
                </h1>
                <p className='text-[#7D879C]'>Hancerchief we have a able for <br/>immport stuff special 
                  you can buy<br/> every thing from us.</p>
                <button className='text-[#2B3445] pt-2 border-b-2 border-red-500  text-sm font-bold'>Shop Now
                </button>
                
                         </div>  
                         <div>
                           <img className='h-60 w-80' src="https://bazar-react.vercel.app/assets/images/products/jacket.png" alt="" />
                           </div>     

            </div>
            <div className='flex justify-between h-[240px] w-[740px] hover:shadow-xl mx-6 my-11 bg-[#FFFFFF80]'>
            <div>
  <img className='h-60 w-[220px]' src="https://bazar-react.vercel.app/assets/images/products/t-shirt2.png" alt="" />
                           </div>   
                      <div className='pr-40'>
                      <p className='text-[#7D879C] pt-2'>MEN'S SHOE</p>
                <h1 className='text-[#E63E58] pb-2 text-3xl font-bold'>
                Stylish<span className='text-[#2B3445] '> Geniune<br/>Comfy T-Shirt</span>
                </h1>
                <p className='text-[#7D879C]'>Hancerchief we have a able for<br/>immport stuff special 
                  you can buy<br/> every thing from us.</p>
                <button className='text-[#2B3445] pt-2 border-b-2 border-red-500  text-sm font-bold'>Shop Now
                </button>
                
                         </div>  
                          

            </div>
        </div>

    </section>
  )
}

export default Section