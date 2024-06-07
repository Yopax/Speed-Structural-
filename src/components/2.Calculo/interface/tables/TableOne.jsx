import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import useStore from '@/store/useStore';
import { useEffect } from 'react';


function TableOne() {
    //Losa Aligerada
    const { losa, setLosa, lng, vx, vy, caed, np, fc, atcc, atce, atcx, qadm, cs,
        getMaxRowSize, getMaxColumnSize,columnGap,rowGap,
     } = useStore((state) => ({
        losa: state.losa,
        setLosa: state.setLosa,
        lng: state.lng,
        vx: state.vx,
        vy: state.vy,
        caed: state.caed,
        np: state.np,
        fc: state.fc,
        atcc: state.atcc,
        atce: state.atce,
        atcx: state.atcx,
        qadm: state.qadm,
        cs: state.cs,
        getMaxRowSize: state.getMaxRowSize,
        getMaxColumnSize: state.getMaxColumnSize,
        columnGap: state.columnGap,
        rowGap: state.rowGap,

    }));

    const maxRowSize = getMaxRowSize();
      const maxColumnSize = getMaxColumnSize();
      const clmax = columnGap + maxColumnSize*100;
        const rlmax = rowGap + maxRowSize*100;
      const maxSize = rlmax > clmax ? rlmax: clmax;
      console.log(maxSize);



    useEffect(() => {
        const closa = (maxSize) / 25;
        console.log(`losaaa:${closa}`);

        const calculateLosa = () => {
            if (closa === 0) {
                setLosa(closa);
            } else {
                const distances = [
                    Math.abs(closa - 30),
                    Math.abs(closa - 25),
                    Math.abs(closa - 20),
                    Math.abs(closa - 17),
                ];
                const minDistance = Math.min(...distances);
                if (minDistance === Math.abs(closa - 30)) {
                    setLosa(30);
                } else if (minDistance === Math.abs(closa - 25)) {
                    setLosa(25);
                } else if (minDistance === Math.abs(closa - 20)) {
                    setLosa(20);
                } else {
                    setLosa(17);
                }
            }
        };
        calculateLosa();
    }, [maxSize, setLosa]);

    const vigax = ((maxColumnSize*100)+(columnGap)) / 10;
    const vigay = ((maxRowSize*100)+(rowGap)) / 10;

    //columnas
    const pservicio = caed * atcc * np;
    const areaColumna = pservicio / (0.45 * fc);
    const acolumnofinal = Math.ceil(Math.sqrt(areaColumna) / 5) * 5;

    //columna esquinada
    const pservicio2 = caed * atce * np;
    const areaColumna2 = pservicio2 / (0.35 * fc);
    const acolumnofinal2 = Math.ceil(Math.sqrt(areaColumna2) / 5) * 5;

    //columna excentrica
    const pservicio3 = caed * atcx * np;
    const areaColumna3 = pservicio3 / (0.35 * fc);
    const acolumnofinal3 = Math.ceil(Math.sqrt(areaColumna3) / 5) * 5;

    //Zapatacentrada
    const zapatacentrada = pservicio / (cs * qadm);
    const azapatacentrada = Math.ceil(Math.sqrt(zapatacentrada) / 5) * 5;

    //Zapataesquinada
    const zapataesquinada = pservicio2 / (cs * qadm);
    const azapataesquinada = Math.ceil(Math.sqrt(zapataesquinada) / 5) * 5;

    //Zapataexcentrica
    const zapataexcentrica = pservicio3 / (cs * qadm);
    const azapataexcentrica = Math.ceil(Math.sqrt(zapataexcentrica) / 5) * 5;

    const { dimx, dimy } = useStore((state) => ({
        dimx: state.dimx,
        dimy: state.dimy,
    }));
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead ></TableHead>
                        <TableHead>la</TableHead>
                        <TableHead>vx</TableHead>
                        <TableHead >vy</TableHead>
                        <TableHead >cc</TableHead>
                        <TableHead>ce</TableHead>
                        <TableHead>cx</TableHead>
                        <TableHead >zc</TableHead>
                        <TableHead>ze</TableHead>
                        <TableHead >zx</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Altura</TableCell>
                        <TableCell>{losa}</TableCell>
                        <TableCell>{vigax}</TableCell>
                        <TableCell>{vigay}</TableCell>
                        <TableCell>{isNaN(acolumnofinal) ? "0" : `${acolumnofinal}`}</TableCell>
                        <TableCell>{isNaN(acolumnofinal2) ? "0" : `${acolumnofinal2}`}</TableCell>
                        <TableCell>{isNaN(acolumnofinal3) ? "0" : `${acolumnofinal3}`}</TableCell>
                        <TableCell>50</TableCell>
                        <TableCell>50</TableCell>
                        <TableCell>50</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Base</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>{vigax / 2}</TableCell>
                        <TableCell>{vigay / 2}</TableCell>
                        <TableCell>{isNaN(acolumnofinal) ? "0" : `${acolumnofinal}`}</TableCell>
                        <TableCell>{isNaN(acolumnofinal2) ? "0" : `${acolumnofinal2}`}</TableCell>
                        <TableCell>{isNaN(acolumnofinal3) ? "0" : `${acolumnofinal3}`}</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>size x</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>{isNaN(azapatacentrada) ? "0" : `${azapatacentrada}`}</TableCell>
                        <TableCell>{isNaN(azapataesquinada) ? "0" : `${azapataesquinada}`}</TableCell>
                        <TableCell>{isNaN(azapataexcentrica) ? "0" : `${azapataexcentrica}`}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>size y</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>{isNaN(azapatacentrada) ? "0" : `${azapatacentrada}`}</TableCell>
                        <TableCell>{isNaN(azapataesquinada) ? "0" : `${azapataesquinada}`}</TableCell>
                        <TableCell>{isNaN(azapataexcentrica) ? "0" : `${azapataexcentrica}`}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </>
    )
}

export default TableOne