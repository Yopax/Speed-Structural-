import React, { useEffect } from 'react';
import TableOne from './tables/TableOne';
import useStore from "@/store/useStore";
import TableTwo from './tables/TableTwo';
import TableTheer from './tables/TableTheer';
import TableFour from './tables/TableFour';
import DescargarPfd from '../DescargarPfd';
import DescargaWord from '../DescargaWord';

function Resultados() {
  const { getTotalColumnSizes, getTotalRowSizes, rowGap, columnGap, columns, rows, setDimx, setDimy, dimx, dimy
    , columnSizes
  } = useStore((state) => ({
    getTotalColumnSizes: state.getTotalColumnSizes,
    getTotalRowSizes: state.getTotalRowSizes,
    rowGap: state.rowGap,
    columnGap: state.columnGap,
    columns: state.columns,
    rows: state.rows,
    setDimx: state.setDimx,
    setDimy: state.setDimy,
    dimx: state.dimx,
    dimy: state.dimy,
    columnSizes: state.columnSizes,
  }));

  const totalColumnSizes = useStore(getTotalColumnSizes);
  const totalRowSizes = useStore(getTotalRowSizes);

  useEffect(() => {
    const newDimx = ((columnGap / 100) * (columns + 1)) + totalColumnSizes;
    const newDimy = ((rowGap / 100) * (rows + 1)) + totalRowSizes;
    setDimx(newDimx);
    setDimy(newDimy);
  }, [columnGap, columns, rowGap, rows, totalColumnSizes, totalRowSizes, setDimx, setDimy]);

  return (
    <>
      <div className=" m-auto w-[50%] max-sm:w-full   mb-6">
        <TableOne />
        <TableTwo />
        <TableTheer />
        <TableFour />
        <div className='flex w-[100%] space-x-4 mt-6 mx-auto'>
          <DescargarPfd />
          <DescargaWord />

        </div>
        <p className='flex text-[10px] font w-full mx-auto justify-center text-center'>
          completa toda la información solicitada para poder descargar tu informe.
        </p>

      </div>
    </>
  );
}

export default Resultados;
