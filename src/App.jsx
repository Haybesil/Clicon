import React from 'react'
import { ButtonSolid } from './components/common/base/buttons/Button'

export default function App() {
  return (
    <div>
      <h1 className='text-[50.8px] text-black font-black  mx-[45px] my-[60px] px-5 py-5 w-fit rounded-2xl border-[4px] border-red-600 animate-bounce'  >App</h1>
      <ButtonSolid text='Click Me' className=''></ButtonSolid>
    </div>
  )
}
