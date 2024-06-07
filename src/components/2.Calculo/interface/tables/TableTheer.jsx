import React from 'react'
import useStore from '@/store/useStore';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function TableTheer() {
    const { columns, rows, ca, dimplx, dimply, pec, dimclx, dimcly, lcol,dimvlx,dimvly,lvx,lvy,dimvlx2,dimvly2,
        cv1,cv2, losa, setLosa, columnGap, rowGap,rowSizes,getMaxRowSize, getMaxColumnSize,setTotal2,np
    } = useStore((state) => ({
        columns: state.columns,
        rows: state.rows,
        ca: state.ca,
        dimplx: state.dimplx,
        dimply: state.dimply,
        pec: state.pec,
        dimclx: state.dimclx,
        dimcly: state.dimcly,
        lcol: state.lcol,
        dimvlx: state.dimvlx,
        dimvly: state.dimvly,
        lvx: state.lvx,
        lvy: state.lvy,
        dimvlx2: state.dimvlx2,
        dimvly2: state.dimvly2,
        cv1: state.cv1,
        cv2: state.cv2,
        losa: state.losa,
        setLosa: state.setLosa,
        columnGap: state.columnGap,
        rowGap: state.rowGap,
        getMaxRowSize: state.getMaxRowSize,
        rowSizes: state.rowSizes,
        getMaxColumnSize: state.getMaxColumnSize,
        setTotal2: state.setTotal2,
        np: state.np,


    }));

    //CARGA MUERTA
    //Losa aligerada
    const losaAligerada = (columns * rows)*ca*dimplx*dimply;
    
    const numeroColumnas = (columns+1) * (rows+1);

    const numerovigay = (columns+1) * rows;
    const numerovigax = columns * (rows+1);

    const { dimx, dimy } = useStore((state) => ({
        dimx: state.dimx,
        dimy: state.dimy,
    }));

    function getConinValue(setLosa2) {
        if (setLosa2 === 17) {
          return 0.28;
        } else if (setLosa2 === 20) {
          return 0.3;
        } else if (setLosa2 === 25) {
          return 0.35;
        } else if (setLosa2 === 30) {
          return 0.4;
        } else {
          return 0;
        }
      }
      const losa2 = getConinValue(losa);
      const maxRowSize = getMaxRowSize();
      const maxColumnSize = getMaxColumnSize();

      const losaAligerada2 =(columns * rows)*losa2*maxColumnSize*maxRowSize;
      const total2 = losaAligerada2 + (numeroColumnas*pec*(columnGap/100)*(rowGap/100)*lcol) + (numerovigax*pec*(columnGap/100)*maxRowSize*lvx) + (numerovigay*pec*(rowGap/100)*maxColumnSize*lvy) + (cv2*dimx*dimy);



    return (
        <>

            <Table>
                <TableCaption>pisos intermedios cv + cm: {total2}</TableCaption>

                <TableBody>
                    <TableRow>
                        <TableCell>cm</TableCell>
                        <TableCell>{losaAligerada2.toFixed(3)}</TableCell>
                        <TableCell>{(numeroColumnas*pec*(columnGap/100)*(rowGap/100)*lcol).toFixed(3)}</TableCell>
                        <TableCell>{(numerovigax*pec*(columnGap/100)*maxRowSize*lvx).toFixed(3)}</TableCell>
                        <TableCell>{(numerovigay*pec*(rowGap/100)*maxColumnSize*lvy).toFixed(3)}</TableCell>
                        <TableCell>-</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>cv</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>{(cv2*dimx*dimy).toFixed(3)}</TableCell>
  
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default TableTheer