"use client";
import React from 'react';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import useStore from '@/store/useStore';
import { useEffect } from 'react';



function DescargarPfd() {
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

    //METRADO DE CARGAS
    const { columns, rows, ca, dimplx, dimply, pec, dimclx, dimcly, lcol,dimvlx,dimvly,lvx,lvy,dimvlx2,dimvly2,
        cv1,cv2,pdd
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
        columnGap: state.columnGap,
        rowGap: state.rowGap,
        losa: state.losa,
        getMaxRowSize: state.getMaxRowSize,
        getMaxColumnSize: state.getMaxColumnSize,
        setTotal1: state.setTotal1,
        np: state.np,
        pdd: state.pdd,
        

    }));

    //CARGA MUERTA
    //Losa aligerada
    
    
    const numeroColumnas = (columns+1) * (rows+1);

    const numerovigay = (columns+1) * rows;
    const numerovigax = columns * (rows+1);



const losaAligerada = (columns * rows)*ca*maxColumnSize*maxRowSize;
const total1 = losaAligerada + (numeroColumnas*pec*(columnGap/100)*(rowGap/100)*lcol) + (numerovigax*pec*(columnGap/100)*maxRowSize*lvx) + (numerovigay*pec*(rowGap/100)*maxColumnSize*lvy) + (cv1*dimx*dimy);



//CARGA MUERTA
//Losa aligerada


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

  const losaAligerada2 =(columns * rows)*losa2*maxColumnSize*maxRowSize;
  const total2 = losaAligerada2 + (numeroColumnas*pec*(columnGap/100)*(rowGap/100)*lcol) + (numerovigax*pec*(columnGap/100)*maxRowSize*lvx) + (numerovigay*pec*(rowGap/100)*maxColumnSize*lvy) + (cv2*dimx*dimy);


 



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

  const hcol = lcol + pdd;
  const columna2 = (numeroColumnas*pec*(columnGap/100)*(rowGap/100)*hcol) ;

  const total3 = losaAligerada2 + columna2 + (numerovigax*pec*(columnGap/100)*maxRowSize*lvx) + (numerovigay*pec*(rowGap/100)*maxColumnSize*lvy) + (cv2*dimx*dimy);

    const generarPDF = () => {
        const doc = new jsPDF();

        var logo = new Image();
        logo.src = "https://i.imgur.com/BPtZlMH.png"; // logo
        doc.addImage(logo, "PNG", 10, 10, 28, 8); // Ajusta las

        doc.setFontSize(18);
        doc.text("Informe Final", 85, 25);

        doc.setFontSize(10);

        // Dividir el texto en varias líneas para que se ajuste dentro de los márgenes
        var textLines = doc.splitTextToSize(
            `Aunque los cálculos realizados por SpeedStructural se ajustan rigurosamente a las normativas peruanas de construcción y han sido exhaustivamente probados, se recomienda encarecidamente que los usuarios realicen una verificación independiente de los resultados. Esto con el fin de asegurar la precisión y coherencia del análisis estructural efectuado.`,
            180
        );

        doc.text(textLines, 15, 40);

        // Subtítulo
        doc.setFontSize(12);
        doc.text("01. Predimensionamiento y Metrado de cargas", 15, 62);
        // Subtítulo
        doc.setFontSize(10);
        doc.text("Predimensionamiento de elementos estructurales", 15, 72);
        const tableLosas = [
            "",
            "Losa Aligerada",
            "Viga x-x",
            "Viga y-y",

        ];
        const tableRows = [
            [
                "Altura(h)",
                `${losa}cm`,
                `${vigax}cm`,
                `${vigay}cm`,
            ],
            [
                "Base",
                `-`,
                `${vigax / 2}cm`,
                `${vigax / 2}cm`,
            ],
        ];

        tableRows.sort((a, b) => a[0] - b[0]);
        doc.autoTable({
            startY: 75,
            head: [tableLosas],
            body: tableRows,
        });
        doc.setFontSize(8);
        doc.text(
            `Recomendación : en la losa aligerada para los primeros pisos asumimos ${losa}cm y para el ultimo piso consideramos ${losa-5}cm.`,
            14,
            doc.autoTable.previous.finalY + 3
        );

        const tablecolumnas = [
            "",
            "columna centrada",
            "columna esquinada",
            "columna excéntrica",

        ];
        const tableRowscolumnas = [
            [
                "Altura(h)",
                `${isNaN(acolumnofinal) ? "0" : `${acolumnofinal}`}cm`,
                `${isNaN(acolumnofinal2) ? "0" : `${acolumnofinal2}`}cm`,
                `${isNaN(acolumnofinal3) ? "0" : `${acolumnofinal3}`}cm`,
            ],
            [
                "Base",
                `${isNaN(acolumnofinal) ? "0" : `${acolumnofinal}`}cm`,
                `${isNaN(acolumnofinal2) ? "0" : `${acolumnofinal2}`}cm`,
                `${isNaN(acolumnofinal3) ? "0" : `${acolumnofinal3}`}cm`,
            ],
        ];
        doc.autoTable({
            startY: 115,
            head: [tablecolumnas],
            body: tableRowscolumnas,
        });
        const tableZapatas = [
            "",
            "Zapata centrada",
            "Zapata esquinada",
            "Zapata excéntrica",
        ];
        const tableRows2 = [
            ["Altura(h)", `50cm`, `50cm`, `50cm`],
            [
                "Size x",
                `${isNaN(azapatacentrada) ? "0" : `${azapatacentrada}`}cm`,
                `${isNaN(azapataesquinada) ? "0" : `${azapataesquinada}`}cm`,
                `${isNaN(azapataexcentrica) ? "0" : `${azapataexcentrica}`}cm`,
            ],
            [
                "Size y",
                `${isNaN(azapatacentrada) ? "0" : `${azapatacentrada}`}cm`,
                `${isNaN(azapataesquinada) ? "0" : `${azapataesquinada}`}cm`,
                `${isNaN(azapataexcentrica) ? "0" : `${azapataexcentrica}`}cm`,
            ],
        ];
        doc.autoTable({
            startY: 150,
            head: [tableZapatas],
            body: tableRows2,
        });
        
        

        doc.addPage();
        // Subtítulo
        doc.setFontSize(12);
        doc.text("02. Metrado de cargas", 15, 20);
        doc.setFontSize(10);
        doc.text(
            "Efectuamos el metrado de cargas, calculando los pesos por pisos y para ello utilizamos la Norma de Cargas E020",
            15,
            30
        );

        doc.setFontSize(10);
        doc.text(`Ultimo Piso (piso${np}:)`, 15, 40);
        doc.text("Carga Muerta", 15, 50);

        // Tabla ordenada
        const tableCargaMuerta = [
            "",
            "Losa Aligerada",
            "Columnas",
            "Viga x-x",
            "Viga y-y",
        ];
        const tableRows5 = [
            [
                "CM",
                `${losaAligerada.toFixed(3)}TN`,
                `${(numeroColumnas*pec*(columnGap/100)*(rowGap/100)*lcol).toFixed(3)}TN`,
                `${(numerovigax*pec*(columnGap/100)*maxRowSize*lvx).toFixed(3)}TN`,
                `${(numerovigay*pec*(rowGap/100)*maxColumnSize*lvy).toFixed(3)}TN`,
            ],
        ];
        doc.autoTable({
            startY: 55,
            head: [tableCargaMuerta],
            body: tableRows5,
        });

        doc.setFontSize(10);
        doc.text("Carga Viva", 15, doc.autoTable.previous.finalY + 10);
        // Tabla ordenada
        const tableCargaViva = ["", "Techo"];
        const tableRows6 = [["CV", `${(cv1*dimx*dimy).toFixed(3)}TN`]];
        doc.autoTable({
            startY: doc.autoTable.previous.finalY + 15,
            head: [tableCargaViva],
            body: tableRows6,
        });
        // Descripción de la tabla
        doc.setFontSize(8);
        doc.text(
            `CV+CM : ${total1} TN`,
            14,
            doc.autoTable.previous.finalY + 3
        );

        doc.setLineWidth(0.5); // Establecer el ancho de la línea
        doc.line(
            14,
            doc.autoTable.previous.finalY + 8,
            200,
            doc.autoTable.previous.finalY + 8
        );

        doc.setFontSize(10);
        doc.text(
            `Pisos intermedios (son todos  los pisos sin tener en cuenta el ultimo ni el primero:)`,
            15,
            121
        );
        doc.text("Carga Muerta", 15, 126);

        // Tabla ordenada
        const tableCargaMuerta2 = [
            "",
            "Losa Aligerada",
            "Columnas",
            "Viga x-x",
            "Viga y-y",
        ];
        const tableRows7 = [
            [
                "CM",
                `${losaAligerada2.toFixed(3)}TN`,
                `${(numeroColumnas*pec*(columnGap/100)*(rowGap/100)*lcol).toFixed(3)}TN`,
                `${(numerovigax*pec*(columnGap/100)*maxRowSize*lvx).toFixed(3)}TN`,
                `${(numerovigay*pec*(rowGap/100)*maxColumnSize*lvy).toFixed(3)}TN`,
            ],
        ];
        doc.autoTable({
            startY: 130,
            head: [tableCargaMuerta2],
            body: tableRows7,
        });

        doc.setFontSize(10);
        doc.text("Carga Viva", 15, doc.autoTable.previous.finalY + 10);
        // Tabla ordenada
        const tableCargaViva2 = ["", "Techo"];
        const tableRows8 = [["CV", `${(cv2*dimx*dimy).toFixed(3)}TN`]];
        doc.autoTable({
            startY: doc.autoTable.previous.finalY + 15,
            head: [tableCargaViva2],
            body: tableRows8,
        });
        // Descripción de la tabla
        doc.setFontSize(8);
        doc.text(
            `CV+CM: ${total2} TN`,
            14,
            doc.autoTable.previous.finalY + 3
        );

        doc.setLineWidth(0.5); // Establecer el ancho de la línea
        doc.line(
            14,
            doc.autoTable.previous.finalY + 8,
            200,
            doc.autoTable.previous.finalY + 8
        );

        doc.setFontSize(10);
        doc.text(`Pisos Primer piso`, 15, 193);
        doc.text("Carga Muerta", 15, 198);

        // Tabla ordenada
        const tableCargaMuerta3 = [
            "",
            "Losa Aligerada",
            "Columnas",
            "Viga x-x",
            "Viga y-y",
        ];
        const tableRows9 = [
            [
                "CM",
                `${losaAligerada2.toFixed(3)}TN`,
                `${columna2.toFixed(3)}TN`,
                `${(numerovigax*pec*(columnGap/100)*maxRowSize*lvx).toFixed(3)}TN`,
                `${(numerovigay*pec*(rowGap/100)*maxColumnSize*lvy).toFixed(3)}TN`,
            ],
        ];
        doc.autoTable({
            startY: 200,
            head: [tableCargaMuerta3],
            body: tableRows9,
        });
        doc.setFontSize(10);
        doc.text("Carga Viva", 15, doc.autoTable.previous.finalY + 12);
        // Tabla ordenada
        const tableCargaViva3 = ["", "Techo"];
        const tableRows10 = [["CV", `${(cv2*dimx*dimy).toFixed(3)}TN`]];
        doc.autoTable({
            startY: doc.autoTable.previous.finalY + 15,
            head: [tableCargaViva3],
            body: tableRows10,
        });
        // Descripción de la tabla
        doc.setFontSize(8);
        doc.text(
            `CV+CM: ${total3} TN`,
            14,
            doc.autoTable.previous.finalY + 3
        );

        doc.setLineWidth(0.5); // Establecer el ancho de la línea
        doc.line(
            14,
            doc.autoTable.previous.finalY + 8,
            200,
            doc.autoTable.previous.finalY + 8
        );
        //tabla de las cargas totales de cada piso
        const tableCargasTotales = [
            "",
            "Ultimo Piso",
            "Pisos intermedios",
            "Primer piso",
        ];
        const tableRows11 = [
            [
                "Cargas Totales",
                `${total1}TN`,
                `${total2*(np-2)}TN`,
                `${total3}TN`,
            ],
        ];
        doc.autoTable({
            startY: doc.autoTable.previous.finalY + 15,
            head: [tableCargasTotales],
            body: tableRows11,
        });

       

        doc.save("informe.pdf");
    };
    return (
        <>
            <button
                className=" w-1/2 h-8 bg-red-600 font-semibold max-sm:text-sm max-sm:w-full hover:bg-red-300 p-2 rounded-sm 
        text-white font justify-center items-center flex"
                onClick={generarPDF}
            >
                PDF
            </button>
        </>
    )
}

export default DescargarPfd