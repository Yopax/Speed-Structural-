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
import { AiOutlineSave } from "react-icons/ai";
import React from 'react'
import { PiPictureInPictureFill } from "react-icons/pi";


function ToolOne() {
    const {
        columns,
        setColumns,
        rows,
        setRows,
        columnGap,
        setColumnGap,
        rowGap,
        setRowGap,
    } = useStore();
    return (
        <>
            <Dialog>
                <DialogTrigger className="font-sans text-xs h-20 w-20  text-white">
                    <div className="flex flex-col items-center justify-center">
                        <p>Datos del Plano</p>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            <div className="flex space-x-2">
                            <PiPictureInPictureFill />
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
                                            <label className="w-2/3 px-2 text-stone-600 text-start">
                                                N° de paños en y-y (und)
                                            </label>
                                            <select
                                                id="columns"
                                                value={columns}
                                                onChange={(e) => setColumns(parseInt(e.target.value))}
                                                className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none "
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div className="flex mx-auto">
                                            <label className="w-2/3 px-2 text-stone-600 text-start">
                                                N° de paños en x-x (und)
                                            </label>
                                            <select
                                                id="rows"
                                                value={rows}
                                                onChange={(e) => setRows(parseInt(e.target.value))}
                                                className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div className="flex mx-auto">
                                            <label htmlFor="columnGap"
                                            className="w-2/3 px-2 text-stone-600 text-start"
                                            >Base de la viga y-y (cm)</label>
                                            <input
                                                id="columnGap"
                                                type="number"
                                                value={columnGap}
                                                onChange={(e) => setColumnGap(parseInt(e.target.value))}
                                                className="w-1/3 text-center flex h-5  text-stone-600 font-sans  bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                            />
                                        </div>
                                        <div className="flex mx-auto">
                                            <label htmlFor="rowGap"
                                            className="w-2/3 px-2 text-stone-600 text-start"
                                            >Base de la viga x-x (cm)</label>
                                            <input
                                                id="rowGap"
                                                type="number"
                                                value={rowGap}
                                                onChange={(e) => setRowGap(parseInt(e.target.value))}
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

export default ToolOne