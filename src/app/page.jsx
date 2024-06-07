import PresentacionHome from '@/components/1.LandingPage/PresentacionHome'
import MainLanding from '@/components/MainLanding'
import NavBar from '@/components/NavBar'
import React from 'react'

function page() {
  return (
    <>
      <div className='grid'>
        <NavBar />
        <MainLanding />
      </div>

    </>

  )
}

export default page