"use client";
import useStore from "@/store/useStore";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import React from 'react';

function ToolTwo() {
  
  const { lng, setLng, vx, vy, setVx, setVy, atcc, setAtcc, atce, setAtce, atcx, setAtcx } = useStore((state) => ({
    lng: state.lng,
    setLng: state.setLng,
    vx: state.vx,
    vy: state.vy,
    setVx: state.setVx,
    setVy: state.setVy,
    atcc: state.atcc,
    setAtcc: state.setAtcc,
    atce: state.atce,
    setAtce: state.setAtce,
    atcx: state.atcx,
    setAtcx: state.setAtcx,
  }));
  
  return (
    <Dialog>
        <DialogTrigger className="font-sans text-xs h-20 w-20  text-white">
            <div className="flex flex-col items-center justify-center">
                <p>PRE</p>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    <div className="flex space-x-2">
                        <p className="font-sans">Configuración de Datos</p>
                    </div>
                </DialogTitle>
                <DialogDescription asChild="asChild">
                    <div>
                        
                        
                        <p className="font-sans text-start mt-2">
                            Columnas
                        </p>
                        <div className="flex ">
                            <div className="flex-col w-full divide-y divide-stone-200 border-x  border-y  mx-auto">
                                <div className="flex mx-auto">
                                    <label className="w-2/3 px-2 text-stone-600 text-start">
                                    AT - Columna Centrada:
                                    </label>
                                    <input
                                        type="number"
                                        value={atcc}
                                        onChange={(e) => setAtcc(parseInt(e.target.value))}
                                        className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                    />
                                </div>
                                <div className="flex mx-auto">
                                    <label className="w-2/3 px-2 text-stone-600 text-start">
                                    AT - Columna Esquinada:
                                    </label>
                                    <input
                                        type="number"
                                        value={atce}
                                        onChange={(e) => setAtce(parseInt(e.target.value))}
                                        className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                    />
                                </div>
                                <div className="flex mx-auto">
                                    <label className="w-2/3 px-2 text-stone-600 text-start">
                                    AT - Columna Excéntrica:
                                    </label>
                                    <input
                                        type="number"
                                        value={atcx}
                                        onChange={(e) => setAtcx(parseInt(e.target.value))}
                                        className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default ToolTwo;
