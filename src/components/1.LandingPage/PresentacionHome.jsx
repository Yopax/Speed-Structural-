import React from "react";
import Boton from "@/components/1.LandingPage/Boton";

function PresentacionHome() {
  return (
    <>
      <div className="flex mx-auto max-[1580px]:pb-20 mt-[80px] bg-[url('/img3.jpg')] bg-cover w-full h-screen max-sm:w-screen items-center justify-center">
        <div className="flex flex-col max-[425px]:pb-[50px] max-[320px]:pb-[10px] w-[80%] max-[1024px]:w-[100%] max-[768px]:w-[70%] max-[425px]:w-[80%] max-[768px]:justify  justify-center items-center text-center">
          <h4 className="text-2xl max-[1580px]:text-sm  max-sm:text-[11px] text-white tracking-[0.2rem] max-[1024px]:tracking-[0.1rem] max-[1024px]:text-xl max-[425px]:tracking-normal leading-3">
            App Web creada para optimizar el tiempo de cálculo de tu
          </h4>
          <h1 className="text-8xl max-[1580px]:text-7xl   max-[425px]:text-5xl w-full py-8 max-sm:py-5 max-sm:text-3xl max-[320px]:text-2xl flex justify-center text-white font-extrabold text-center">
            Metrado de cargas para el análisis y diseño sísmico.
            <br />
          </h1>
          <div className="flex justify-center space-x-4 my-2">
            <Boton />
          </div>
          <p className="text-slate-200 max-[425px]:text-xs text-base font-medium">
            Proyecto para optar el grado de Ing. Civil.
          </p>
        </div>
      </div>
    </>
  );
}

export default PresentacionHome;
