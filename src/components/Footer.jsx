"use client";
import React from 'react'
import IconComp from './2.Calculo/IconComp'

function Footer() {
  return (
    <>
      <footer className="footer  footer-center max-[425px]:pb-4 pb-20 pt-5 bg-black text-white">
        <nav>
          <IconComp />
        </nav>
        <aside className='mt-2  max-sm:mt-6'>
          <p className='text-center text-2xl max-[425px]:text-lg font-bold mb-2'>Copyright © 2024 - by SPEED SAC.</p>
          <p className='text-center text-xl max-[425px]:text-sm'>Fundado por Barreto Rodriguez Darli.</p>
        </aside>
      </footer>
    </>
  )
}

export default Footer