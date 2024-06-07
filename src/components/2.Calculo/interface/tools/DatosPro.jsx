"use client";
// components/GridForm.js
import useStore from "@/store/useStore";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import React from 'react'

function DatosPro() {
    const {
        caed,
        np,
        fc,
        setCaed,
        setNp,
        setFc,
        qadm,
        cs,
        setQadm,
        setCs,
        ca,
        setCa,
        pec,
        setPec,
        pdd,
        setPdd,
    } = useStore();
    return (
        <>
            <Dialog>
                <DialogTrigger className="font-sans text-xs h-20 w-20  text-white">
                    <div className="flex flex-col items-center justify-center">

                        <p>Datos Generales</p>
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
                                <p className="font-sans text-start mb-2">
                                    Distribución del plano
                                </p>
                                <div className="flex">
                                    <div className="flex-col w-full divide-y divide-stone-200 border-x  border-y  mx-auto">
                                        <div className="flex mx-auto">
                                        <label
                                            className="w-2/3 px-2 text-stone-600 text-start"
                                            >Carga de la Edificación(P)</label>
                                            <input
                                        
                                                type="number"
                                                value={caed}
                                                onChange={(e) => setCaed(e.target.value)}
                                                className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                            />
                                        </div>
                                        <div className="flex mx-auto">
                                        <label htmlFor="rowGap"
                                            className="w-2/3 px-2 text-stone-600 text-start"
                                            >Numero de pisos:</label>
                                            <input
                                                id="rowGap"
                                                type="number"
                                                value={np}
                                                onChange={(e) => setNp(e.target.value)}
                                                className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                            />
                                        </div>
                                        <div className="flex mx-auto">
                                        <label htmlFor="rowGap"
                                            className="w-2/3 px-2 text-stone-600 text-start"
                                            >Resistencia a la compresión fc</label>
                                            <input
                                                id="rowGap"
                                                type="number"
                                                value={fc}
                                                onChange={(e) => setFc(parseInt(e.target.value))}
                                                className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                            />
                                        </div>
                                        <div className="flex mx-auto">
                                        <label htmlFor="rowGap"
                                            className="w-2/3 px-2 text-stone-600 text-start"
                                            >Coeficiente del suelo(k)</label>
                                            <input
                                               
                                                type="number"
                                                value={cs}
                                                onChange={(e) => setCs(e.target.value)}
                                                className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                            />
                                        </div>
                                        <div className="flex mx-auto">
                                        <label htmlFor="rowGap"
                                            className="w-2/3 px-2 text-stone-600 text-start"
                                            >Capacidad admisible</label>
                                            <input
                                            
                                                type="number"
                                                value={qadm}
                                                onChange={(e) => setQadm(parseInt(e.target.value))}
                                                className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                            />
                                        </div>
                                        <div className="flex mx-auto">
                                        <label htmlFor="rowGap"
                                            className="w-2/3 px-2 text-stone-600 text-start"
                                            >Carga por area</label>
                                            <input
                                            
                                                type="number"
                                                value={ca}
                                                onChange={(e) => setCa(e.target.value)}
                                                className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                            />
                                        </div>
                                        <div className="flex mx-auto">
                                        <label htmlFor="rowGap"
                                            className="w-2/3 px-2 text-stone-600 text-start"
                                            >Peso especifico del concreto</label>
                                            <input
                                            
                                                type="number"
                                                value={pec}
                                                onChange={(e) => setPec(e.target.value)}
                                                className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                            />
                                        </div>
                                        <div className="flex mx-auto">
                                        <label htmlFor="rowGap"
                                            className="w-2/3 px-2 text-stone-600 text-start"
                                            >Profundidad de desplante</label>
                                            <input
                                            
                                                type="number"
                                                value={pdd}
                                                onChange={(e) => setPdd(parseInt(e.target.value))}
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
        </>
    )
}

export default DatosPro