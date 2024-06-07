import React from 'react'
import ToolOne from '@/components/2.Calculo/interface/tools/ToolOne'
import ToolTwo from './tools/ToolTwo'
import DatosPro from './tools/DatosPro'
import ToolTheer from './tools/ToolTheer'

function BarNav() {
  return (
    <>
      <div className='flex w-[85%] max-sm:w-full  mx-auto mt-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 divide-x'>
        <DatosPro/>
        <ToolOne/>
        <ToolTwo/>
        <ToolTheer/>
      </div>
    </>
  )
}

export default BarNav