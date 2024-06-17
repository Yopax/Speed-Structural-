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
import { Formulas } from "../Formulas";
import { TbRulerMeasure } from "react-icons/tb";




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
                    <p className="font-bold text-sky-700">PRE</p>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex space-x-2">
                        <TbRulerMeasure />

                            <p className="font-sans">Configuración de Datos</p>
                        </div>
                    </DialogTitle>
                    <DialogDescription asChild="asChild">
                        <div>


                            <p className="font-sans text-start mt-2">
                               Area Tributaria Columnas
                            </p>
                            <div className="flex ">
                                <div className="flex-col w-full divide-y divide-stone-200 border-x  border-y  mx-auto">
                                    <div className="flex mx-auto">
                                        <label className="w-2/3 px-2 text-sky-600 text-start">
                                            AT - Columna Centrada(m2)
                                        </label>
                                        <input
                                            type="number"
                                            value={atcc}
                                            onChange={(e) => setAtcc(parseInt(e.target.value))}
                                            className="w-1/3 text-center flex h-5  text-sky-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                        />
                                    </div>
                                    <div className="flex mx-auto">
                                        <label className="w-2/3 px-2 text-sky-600 text-start">
                                            AT - Columna Esquinada(m2)
                                        </label>
                                        <input
                                            type="number"
                                            value={atce}
                                            onChange={(e) => setAtce(parseInt(e.target.value))}
                                            className="w-1/3 text-center flex h-5  text-sky-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                        />
                                    </div>
                                    <div className="flex mx-auto">
                                        <label className="w-2/3 px-2 text-sky-600 text-start">
                                            AT - Columna Excéntrica(m2)
                                        </label>
                                        <input
                                            type="number"
                                            value={atcx}
                                            onChange={(e) => setAtcx(parseInt(e.target.value))}
                                            className="w-1/3 text-center flex h-5  text-sky-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                        />
                                    </div>

                                    <Formulas
                                        item2="Losas"
                                        description2="Las formulas utilizadas para calcular las losas fueron las siguientes, para la losa aligerada: ln/25, para la Losa Prefabricada Pretensada: ln/28, para la losa maciza: ln/30, para la losa maciza bidireccional: ln x-x *2 + ln y-y*2 / 140."
                                        title="Formulas predimensionamiento"
                                        boton="Ver las formulas utilizadas para calcular el  PRE"
                                        item3="Vigas"
                                        description3="Las formulas utilizadas para calcular las vigas es ta dada por, para la altura: ln/10 y para la base: la altura /2, esto aplica para ambas direcciones."
                                        item4="Columnas centradas"
                                        description4="pservicio = carga de la edificación(P)*AT - Columna Centrada:*N de pisos;"
                                        description41="AreaColumna = (pservicio/(0.45*f´c del concreto))"
                                        item5="Columnas excéntricas"
                                        description5="pservicio = carga de la edificación(P)*AT - Columna excéntrica:*N de pisos;"
                                        description51="AreaColumna = (pservicio/(0.35*f´c del concreto))"
                                        item6="Columnas esquinadas"
                                        description6="pservicio = carga de la edificación(P)*AT - Columna esquinada:*N de pisos;"
                                        description61="AreaColumna = (pservicio/(0.35*f´c del concreto))"
                                        item7="Zapatas:"
                                        description7="La formula para calcular las zapatas es la siguiente: Area de de la zapata = pservicio/(coeficiente del suelo * la carga admisible)

              Siendo pservicio, el calculo para cada tipo de columna, ejem: si se requiere calcular la zapata centrada se debe utilizar el pservicio de la columna centrada, este dato el programa ya lo calcula y utiliza internamente, por lo que no tendría mayor relevancia."
                                    />

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
