import React from 'react'
import Link from 'next/link'

function Boton() {
  return (
    <>
      <Link target='blank' href="/analisis">
      <button
            type="button"
            className="text-3xl max-[425px]:text-base bg-sky-900 hover:bg-emerald-600 text-white font-extrabold py-8 px-[50px] rounded-lg"
          >
            PROBAR AHORA
          </button>
      </Link>
    </>
  );
}

export default Boton;