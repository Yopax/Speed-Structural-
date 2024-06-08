"use client";
import React from 'react'
import IconComp from './2.Calculo/IconComp'

function Footer() {
  return (
    <>
      <footer className="footer footer-center p-6 bg-emerald-700 text-white rounded mt-6">
        <nav>
          <IconComp />
        </nav>
        <aside className='mt-2  max-sm:mt-6'>
          <p className='text-center text-xs mb-2'>Copyright © 2024 - by SPEED SAC.</p>
          <p className='text-center text-xs '>Fundado por Barreto Rodriguez Darli.</p>
        </aside>
      </footer>
    </>
  )
}

export default Footer