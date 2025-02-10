import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

export default function Header() {
  return (
    <div className='bg-[#000000] flex px-32 text-[#fff] pb-2'>
      <div className="txt w-24 flex-1 mt-2">
        <h1 className='p-2 text-[20px] flex gap-2 items-center font-medium'><span className='bg-[#e7e186] text-[#000000] p-2'>Black</span> Friday</h1>
      </div>
      <div className="offSales w-24 flex flex-1 items-center gap-2 mt-2 p-2">
        <p>UP to</p>
        <p className='text-[#ece047] text-[40px]'>59%</p>
        <p className='font-medium text-[20px]'>OFF</p>
      </div>
      <div className="text-[#000000] button w-24 ml-24 mt-2">
        <button className='flex items-center gap-1 bg-[#ece047] p-2 rounded-md'>Shope Now <span className='mt-1 text-2xl'><MdArrowRightAlt />
        </span></button>
      </div>
    </div>
  )
}
