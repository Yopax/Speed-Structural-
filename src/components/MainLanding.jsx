import React from 'react'
import PresentacionHome from './1.LandingPage/PresentacionHome'
import Items from './1.LandingPage/Items'
import Footer from './Footer'
import Boton from './1.LandingPage/Boton'

function MainLanding() {
  return (
    <>
      <PresentacionHome />
      <h2 className='w-screen py-8 mx-auto text-5xl font-extrabold text-white text-center bg-black'>
        ¿Cómo funciona?
      </h2>
      <Items />
      <div className='flex w-screen bg-black justify-center mx-auto py-8'>
        <Boton />
      </div>
      
      <Footer />
    </>
  )
}

export default MainLanding