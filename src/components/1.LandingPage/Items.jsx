import React from 'react'
import { GrSelect } from "react-icons/gr";
import { GrConfigure } from "react-icons/gr";
import { BsInputCursor } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { BsDownload } from "react-icons/bs";






function Items() {
  const textOne = "w-[60%] mx-auto text-white text-2xl leading-6 font-bold"
  const textTwo ="text-lg max-sm:text-base font-normal my-6 text-white"
  return (
    <>
    
      <div className="w-full text-center bg-black items-center p-2 grid grid-cols-3 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 justify-center">
        
        <div className="flex flex-col text-white items-center justify-center bg-cover font-bold m-2 rounded-md h-80 bg-[url('/img4.jpg')]">
          <div>
            <p
              className={textOne}
            >
              01.Ingresa
            </p>
            <p className={textTwo}>Ingresa ala app mediante el boton  o qr</p>
          </div>
          <div className="flex flex-col text-9xl text-center items-center justify-center">
            <GrSelect />
          </div>
        </div>
        <div className="flex flex-col bg-cover bg-[url('/img6.jpg')] text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-blue-600">
          <div>
            <p
              className={textOne}
            >
              02.Completa
            </p>
            <p className={textTwo}>Completa los datos solicitados</p>
          </div>
          <div className="flex flex-col text-9xl text-center items-center justify-center">
          <BsInputCursor />
          </div>
        </div>
        <div className="flex flex-col bg-cover bg-[url('/img7.jpg')] text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-blue-600">
          <div>
            <p
              className={textOne}
            >
              03.Listo!
            </p>
            <p className={textTwo}>Descarga tu informe en pdf o Word</p>
          </div>
          <div className="flex flex-col text-9xl text-center items-center justify-center">
          <BsDownload />
          </div>
        </div>
      </div>
    </>
  );
}

export default Items