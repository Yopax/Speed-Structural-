// components/GridView.js
"use client";
import useStore from '@/store/useStore';
import { Badge } from "@/components/ui/badge"


const GridView = () => {
  const { columns, rows, columnGap, rowGap, columnSizes, rowSizes, setColumnSize, setRowSize } = useStore();

  return (
    <>
    <div className="flex bg-slate-100  max-sm:w-full  justify-center  mx-auto mt-10 max-sm:mt-4">

        <div className="flex flex-col  justify-center items-center mx-auto space-y-10">
          {/* First nested div */}
          <div className="flex w-full  justify-center items-center mx-auto">
            <div className="relative  justify-center items-center mx-auto">
              <div className="flex w-[400px] max-sm:w-[250px]    space-x-8 items-center ">
                {Array.from({ length: columns }).map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    value={columnSizes[index].replace('fr', '')}
                    onChange={(e) => setColumnSize(index, e.target.value)}
                    placeholder="1"
                    className="w-full max-sm:text-xs text-center border h-[19px]"
                  />
                ))}
              </div>
              <div className="grid  absolute h-[200px] max-sm:h-[130px]  items-center max-sm:-left-8 -left-20">
                {Array.from({ length: rows }).map((_, index) => (
                  <input
                    key={index}
                    type="number"
                    value={rowSizes[index].replace('fr', '')}
                    onChange={(e) => setRowSize(index, e.target.value)}
                    placeholder="1"
                    className="w-14 max-sm:text-xs  max-sm:w-10 mr-20 max-sm:h-[50%] h-[20%] text-center border space-y-8"
                  />
                ))}
              </div>
              <div
                className="grid w-[400px] max-sm:w-[250px] max-sm:h-[130px] h-[200px] relative"
                style={{
                  gridTemplateColumns: columnSizes.map(size => size).join(' '),
                  gridTemplateRows: rowSizes.map(size => size).join(' '),
                  columnGap: `${columnGap / 200}cm`,
                  rowGap: `${rowGap / 200}cm`,
                }}
              >
                {Array.from({ length: columns * rows }).map((_, idx) => (
                  <div key={idx} className="bg-[#ddd] border border-solid border-[#aaa]"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
    <Badge>Tabla de resultados</Badge>
    </>
    
  );
};

export default GridView;
