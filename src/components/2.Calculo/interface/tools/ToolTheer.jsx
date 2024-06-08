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
import { TbResize } from "react-icons/tb";


function ToolTheer() {
    const { dimclx, dimcly, setDimclx, setDimcly, npa, setNpa, dimplx, dimply, setDimplx, setDimply, lcol, setLcol,
        dimvlx, dimvly, setDimvlx, setDimvly, lvx, setLvx, dimvlx2, dimvly2, setDimvlx2, setDimvly2, lvy, setLvy,
        cv1, setCv1, cv2, setCv2,
    } = useStore();

    return (
        <Dialog>
            <DialogTrigger className="font-sans text-xs h-20 w-20 text-white">
                <div className="flex flex-col items-center justify-center">
                    <p>MET</p>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex space-x-2">
                            <TbResize />
                            <p className="font-sans">Configuración de Datos</p>
                        </div>
                    </DialogTitle>
                    <DialogDescription asChild="asChild">
                        <div>
                            <p className="font-sans text-start">
                           Columnas
                            </p>
                            <div className="flex">
                                <div className="flex-col w-full divide-y divide-stone-200 border-x border-y mx-auto">
                                    <div className="flex mx-auto">
                                        <label className="w-2/3 px-2 text-stone-600 text-start">
                                            Altura de las columnas(m)
                                        </label>
                                        <input
                                            type="number"
                                            value={lcol}
                                            onChange={(e) => setLcol(parseFloat(e.target.value))}
                                            className="w-1/3 text-center flex h-5 text-stone-600 font-sans bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="font-sans text-start">
                            Vigas 
                            </p>
                            <div className="flex">
                            </div>
                            <div className="flex">
                                <div className="flex-col w-full divide-y divide-stone-200 border-x border-y mx-auto">
                                    <div className="flex mx-auto">
                                        <label className="w-2/3 px-2 text-stone-600 text-start">
                                        Altura de las vigas x(cm)
                                        </label>
                                        <input
                                            type="number"
                                            value={lvx}
                                            onChange={(e) => setLvx(parseFloat(e.target.value))}
                                            className="w-1/3 text-center flex h-5 text-stone-600 font-sans bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-col w-full divide-y divide-stone-200 border-x border-y mx-auto">
                                    <div className="flex mx-auto">
                                        <label className="w-2/3 px-2 text-stone-600 text-start">
                                        Altura de las vigas y(cm)
                                        </label>
                                        <input
                                            type="number"
                                            value={lvy}
                                            onChange={(e) => setLvy(parseFloat(e.target.value))}
                                            className="w-1/3 text-center flex h-5 text-stone-600 font-sans bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="font-sans text-start">
                                Carga Viva
                            </p>
                            <div className="flex">
                                <div className="flex-col w-full divide-y divide-stone-200 border-x border-y mx-auto">
                                    <div className="flex mx-auto">
                                        <label className="w-2/3 px-2 text-stone-600 text-start">
                                            Primer piso(tn/m2)
                                        </label>
                                        <input
                                            type="number"
                                            value={cv1}
                                            onChange={(e) => setCv1(parseFloat(e.target.value))}
                                            className="w-1/3 text-center flex h-5 text-stone-600 font-sans bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-col w-full divide-y divide-stone-200 border-x border-y mx-auto">
                                    <div className="flex mx-auto">
                                        <label className="w-2/3 px-2 text-stone-600 text-start">
                                            Pisos intermedios(tn/m2)
                                        </label>
                                        <input
                                            type="number"
                                            value={cv2}
                                            onChange={(e) => setCv2(parseFloat(e.target.value))}
                                            className="w-1/3 text-center flex h-5 text-stone-600 font-sans bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Formulas
                                item2="Losa Aligerada = Np * Ca * Dx * Dy"
                                description2="Np= Numero de paños,
        Ca= Carga por área,
        Dx= Dimensión en x del paño,
        Dy= Dimensión en y del paño "
                                title="Formulas - Metrado de cargas"
                                boton="Ver las formulas utilizadas para calcular MET"
                                item3="Columnas = Nc * Pec * Dx_col * Dy_col * L_col"
                                description3="Numero de columnas,
        Peso especifico del concreto,
        Dimensión en x de la columna,
        Dimensión en y de la columna,
        Longitud de la columna"
                                item4="Viga x-x = Nv * Pec * Dx_vg * Dy_vg * L_vg"
                                description41="Numero de vigas,
        Peso especifico del concreto,
        Dimensión en x de la viga,
        Dimensión en y de la viga,
        Longitud de la viga"
                                item5="Viga y-y = Nv * Pec * Dx_vg * Dy_vg * L_vg"
                                description5="Numero de vigas,
        Peso especifico del concreto,
        Dimensión en x de la viga,
        Dimensión en y de la viga,
        Longitud de la viga"
                                item6="Cv = Cv_tch * Dx * Dy"
                                description6="Carga Viva,
        Dimensión en x,
        Dimensión en y;"
                            />
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default ToolTheer;
