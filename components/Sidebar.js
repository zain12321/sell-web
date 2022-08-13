import React from 'react'
import { FiActivity, FiLogOut } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { BsHeadphones } from 'react-icons/bs'
import { BsFileBarGraph } from 'react-icons/bs'
import { RiArrowRightLine } from 'react-icons/ri'
function Sidebar() {
  return (
    <div className='fixed text-white bg-[#3c3c47] h-screen p-6  flex flex-col justify-between'>
        <div>
            <h1 className='text-[#83D8AE] font-bold'>A</h1>
        </div>
        <div className='space-y-7 text-[#9A9CAB] text-[24px]'>
          <FiActivity/>
          <BiUser/>
          <BsHeadphones/>
          <BsFileBarGraph/>
          <FiLogOut/>
        </div>
        <div className='text-[20px] text-[#9A9CAB]'>
<RiArrowRightLine/>
        </div>
    </div>
  )
}

export default Sidebar