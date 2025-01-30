import React from 'react'

export default function Header() {
  return (
    <div className='bg-[#000000] flex px-32 text-[#fff] max-h-16'>
      <div className="txt w-24 flex-1 mt-2">
        <h1 className='p-2'><span className='bg-[#ece047] p-2'>Black</span> Friday</h1>
      </div>
      <div className="offSales w-24 flex flex-1 mt-2 p-2">
        <p>UPTO</p>
        <h1 className='text-[#ece047] text-2xl'>59%</h1>
        <p>OFF</p>
      </div>
      <div className="button w-24 ml-24 mt-2">
        <button className='bg-[#ece047] p-2'>Shope Now</button>
      </div>
    </div>
  )
}
