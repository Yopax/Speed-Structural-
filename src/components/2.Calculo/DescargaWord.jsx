"use client";
import React from 'react';
import { saveAs } from "file-saver";
import * as docx from "docx";
import useStore from '@/store/useStore';
import { useEffect } from 'react';
import {
    TextRun,
    Document,
    Packer,
    Paragraph,
    Table,
    TableCell,
    TableRow,
    WidthType,
    Header,
    Footer,
    HeadingLevel,
    AlignmentType,
    VerticalAlign,
    BorderStyle,
    Alignment,
  } from "docx";

function DescargaWord() {
    const { losa, setLosa, lng, vx, vy, caed, np, fc, atcc, atce, atcx, qadm, cs,
        getMaxRowSize, getMaxColumnSize, columnGap, rowGap,
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
    const clmax = columnGap + maxColumnSize * 100;
    const rlmax = rowGap + maxRowSize * 100;
    const maxSize = rlmax > clmax ? rlmax : clmax;
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

    const vigax = ((maxColumnSize * 100) + (columnGap)) / 10;
    const vigay = ((maxRowSize * 100) + (rowGap)) / 10;

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
    const { columns, rows, ca, dimplx, dimply, pec, dimclx, dimcly, lcol, dimvlx, dimvly, lvx, lvy, dimvlx2, dimvly2,
        cv1, cv2, pdd
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


    const numeroColumnas = (columns + 1) * (rows + 1);

    const numerovigay = (columns + 1) * rows;
    const numerovigax = columns * (rows + 1);



    const losaAligerada = (columns * rows) * ca * maxColumnSize * maxRowSize;
    const total1 = losaAligerada + (numeroColumnas * pec * (columnGap / 100) * (rowGap / 100) * lcol) + (numerovigax * pec * (columnGap / 100) * maxRowSize * lvx) + (numerovigay * pec * (rowGap / 100) * maxColumnSize * lvy) + (cv1 * dimx * dimy);



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

    const losaAligerada2 = (columns * rows) * losa2 * maxColumnSize * maxRowSize;
    const total2 = losaAligerada2 + (numeroColumnas * pec * (columnGap / 100) * (rowGap / 100) * lcol) + (numerovigax * pec * (columnGap / 100) * maxRowSize * lvx) + (numerovigay * pec * (rowGap / 100) * maxColumnSize * lvy) + (cv2 * dimx * dimy);






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
    const columna2 = (numeroColumnas * pec * (columnGap / 100) * (rowGap / 100) * hcol);

    const total3 = losaAligerada2 + columna2 + (numerovigax * pec * (columnGap / 100) * maxRowSize * lvx) + (numerovigay * pec * (rowGap / 100) * maxColumnSize * lvy) + (cv2 * dimx * dimy);




    //WORD

    const downloadDocument = async () => {
        const header = new Header({
            children: [new Paragraph("Informe Final - Metrado de cargas")],
        });

        const footer = new Footer({
            children: [new Paragraph("Fuente: Datos recopilados")],
        });

        const title = new Paragraph({
            children: [
                new TextRun({
                    text: "Informe Final - Diseño y análisis estructural",
                    size: 36,
                    bold: true,
                }),
            ],
            spacing: {
                before: 200,
                after: 400,
            },
            alignment: AlignmentType.CENTER,
        });
        const description2 = new Paragraph({
            children: [
                new TextRun({
                    text: "Tabla 2 - Predimensionamiento de vigas",
                }),
            ],
            spacing: {
                before: 400,
            },
        });
        const description3 = new Paragraph({
            children: [
                new TextRun({
                    text: "Tabla 3 - Predimensionamiento de columnas",
                }),
            ],
            spacing: {
                before: 400,
            },
        });
        const description4 = new Paragraph({
            children: [
                new TextRun({
                    text: "Tabla 4 - Predimensionamiento de zapatas",
                }),
            ],
            spacing: {
                before: 400,
            },
        });
        const description5 = new Paragraph({
            children: [
                new TextRun({
                    text: `Tabla 5 - Carga muerta- Último piso(piso${np}:)`,
                }),
            ],
            spacing: {
                before: 400,
            },
        });
        const description6 = new Paragraph({
            children: [
                new TextRun({
                    text: "Tabla 6 - Carga viva - Último piso",
                }),
            ],
            spacing: {
                before: 400,
            },
        });
        const description7 = new Paragraph({
            children: [
                new TextRun({
                    text: "Tabla 7 - Carga muerta - Pisos intermedios (son todos los pisos sin tener en cuenta el ultimo ni el primero:)",
                }),
            ],
            spacing: {
                before: 400,
            },
        });
        const description8 = new Paragraph({
            children: [
                new TextRun({
                    text: "Tabla 8 - Carga viva - Pisos intermedios (son todos los pisos sin tener en cuenta el ultimo ni el primero:)",
                }),
            ],
            spacing: {
                before: 400,
            },
        });
        const description9 = new Paragraph({
            children: [
                new TextRun({
                    text: "Tabla 9 - Carga muerta - Primer piso",
                }),
            ],
            spacing: {
                before: 400,
            },
        });
        const description10 = new Paragraph({
            children: [
                new TextRun({
                    text: "Tabla 10 - Carga viva - Primer piso",
                }),
            ],
            spacing: {
                before: 400,
            },
        });
        const description11 = new Paragraph({
            children: [
                new TextRun({
                    text: "Tabla 11 - Totales de cargas",
                }),
            ],
            spacing: {
                before: 400,
            },
        });

        const subtitle = new Paragraph({
            children: [
                new TextRun({
                    text: "01. Predimensionamiento de elementos estructurales",
                    size: 24,
                    bold: true,
                }),
            ],
        });
        const subtitle2 = new Paragraph({
            children: [
                new TextRun({
                    text: "02. Metrado de cargas",
                    size: 24,
                    bold: true,
                }),
            ],
            spacing: {
                before: 400,
            },
        });

        const introduction = new Paragraph({
            children: [
                new TextRun({
                    text: "Estas dimensiones preliminares son fundamentales para permitir un Análisis Estructural que cumpla lo establecido por las normas Peruanas (José Alberto, 2022).",
                    size: 24,
                }),
            ],
            spacing: {
                after: 200,
                before: 150,
            },
        });
        const introduction2 = new Paragraph({
            children: [
                new TextRun({
                    text: "Efectuamos el metrado de cargas, calculando los pesos por pisos y para ello utilizamos la Norma de Cargas E-0.20",
                    size: 24,
                }),
            ],
            spacing: {
                after: 200,
                before: 150,
            },
        });

        const table = new Table({
            columnWidths: [3505, 3505, 3505, 3505],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 5000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 5000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Losa Aligerada",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),

                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 5000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Altura(h)",
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 5000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${losa}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
        const table2 = new Table({         //tabla vigas
            columnWidths: [3505, 3505, 3505],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "viga eje x-x ",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "viga eje y-y ",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Altura(h)",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${vigax}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${vigay}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Base",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${vigax / 2}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${vigay / 2}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
        const table3 = new Table({          //tabla columnas
            columnWidths: [3505, 3505, 3505, 3505],
            rows: [
                new TableRow({               //primera fila
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Columna centrada",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Columna esquinada ",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Columna excéntrica",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({               //segunda fila   
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Altura(h)",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(acolumnofinal) ? "0" : `${acolumnofinal}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(acolumnofinal2) ? "0" : `${acolumnofinal2}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(acolumnofinal3) ? "0" : `${acolumnofinal3}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({               // tercera fila  
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Base",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(acolumnofinal) ? "0" : `${acolumnofinal}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(acolumnofinal2) ? "0" : `${acolumnofinal2}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(acolumnofinal3) ? "0" : `${acolumnofinal3}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
        const table4 = new Table({
            columnWidths: [3505, 3505, 3505, 3505],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Zapata centrada",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Zapata esquinada",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Zapata excéntrica",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Altura(h)",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "50cm",
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "50cm",
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "50cm",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Size x",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(azapatacentrada) ? "0" : `${azapatacentrada}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(azapataesquinada) ? "0" : `${azapataesquinada}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(azapataexcentrica) ? "0" : `${azapataexcentrica}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Size y",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(azapatacentrada) ? "0" : `${azapatacentrada}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(azapataesquinada) ? "0" : `${azapataesquinada}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${isNaN(azapataexcentrica) ? "0" : `${azapataexcentrica}`}cm`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
        const table5 = new Table({
            columnWidths: [3505, 3505, 3505, 3505],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                                left: {
                                    style: BorderStyle.NIL,
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Losa Aligerada",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Columnas",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Viga x-x",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                                right: {
                                    style: BorderStyle.NIL,
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Viga y-y",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                                left: {
                                    style: BorderStyle.NIL,
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "CM",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${losaAligerada.toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(numeroColumnas*pec*(columnGap/100)*(rowGap/100)*lcol).toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(numerovigax*pec*(columnGap/100)*maxRowSize*lvx).toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                                right: {
                                    style: BorderStyle.NIL,
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(numerovigay*pec*(rowGap/100)*maxColumnSize*lvy).toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
        const table6 = new Table({
            columnWidths: [3505, 3505, 3505, 3505],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 5000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 5000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Techo",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "CV",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(cv1*dimx*dimy).toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
        const table7 = new Table({
            columnWidths: [3505, 3505, 3505, 3505],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Losa Aligerada",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Columnas",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Viga x-x",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Viga y-y",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "CM",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${losaAligerada2.toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(numeroColumnas*pec*(columnGap/100)*(rowGap/100)*lcol).toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(numerovigax*pec*(columnGap/100)*maxRowSize*lvx).toFixed(3)}TN`,
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(numerovigay*pec*(rowGap/100)*maxColumnSize*lvy).toFixed(3)}TN`,
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
        const table8 = new Table({
            columnWidths: [3505, 3505, 3505, 3505],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 5000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 5000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Techo",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "CV",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(cv2*dimx*dimy).toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
        const table9 = new Table({
            columnWidths: [3505, 3505, 3505, 3505],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Losa Aligerada",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Columnas",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Viga x-x",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Viga y-y",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "CM",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${losaAligerada2.toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${columna2.toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(numerovigax*pec*(columnGap/100)*maxRowSize*lvx).toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(numerovigay*pec*(rowGap/100)*maxColumnSize*lvy).toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
        const table10 = new Table({
            columnWidths: [3505, 3505, 3505, 3505],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 5000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 5000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Techo",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "CV",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(cv2*dimx*dimy).toFixed(3)}TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
        const table11 = new Table({
            columnWidths: [3505, 3505, 3505, 3505],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Ultimo Piso",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Pisos intermedios",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Primer piso",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 2000,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Cargas Totales",
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${total1} TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${total2*(np-2)} TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },

                                bottom: {
                                    style: BorderStyle.THIN_THICK_LARGE_GAP,
                                    size: 8,
                                    color: "000000",
                                },
                            },
                            width: {
                                size: 3505,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${total3} TN`,
                                            size: 20,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });

        const doc = new Document({
            sections: [
                {
                    properties: {},
                    headers: { default: header },
                    footers: { default: footer },
                    children: [
                        title,
                        subtitle,
                        introduction,
                        new Paragraph({ text: "Tabla 1 - Predimensionamiento de losa aligerada" }),
                        table,
                        new Paragraph({
                            text: `Recomendación : en la losa aligerada para los primeros pisos asumimos ${losa} cm y para el último piso consideramos ${losa - 5
                                }cm.`,
                        }),
                        description2,
                        table2,
                        description3,
                        table3,
                        description4,
                        table4,
                        new Paragraph({
                            text: "Recomendación : la altura de la zapata de (50cm) es una altura tentativa, verificar por punzonamiento.",
                        }),
                        subtitle2,
                        introduction2,
                        description5,
                        table5,
                        new Paragraph({
                            text: ``,
                        }),
                        description6,
                        table6,
                        new Paragraph({
                            text: `CV+CM : ${total1} TN`,
                        }),
                        description7,
                        table7,
                        new Paragraph({
                            text: ``,
                        }),
                        description8,
                        table8,
                        new Paragraph({
                            text: `CV+CM: ${total2} TN`,
                        }),
                        description9,
                        table9,
                        new Paragraph({
                            text: ``,
                        }),
                        description10,
                        table10,
                        new Paragraph({
                            text: `CV+CM: ${total3} TN`,
                        }),
                        description11,
                        table11,
                    ],
                },
            ],
        });

        const buffer = await Packer.toBuffer(doc);
        const blob = new Blob([buffer], {
            type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Informe-SpeedStructural.docx");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <button
                className="bg-sky-800 text-sm h-8 max-sm:text-xs max-sm:w-full hover:bg-blue-300 p-2 rounded-sm 
        text-white font-semibold justify-center items-center flex w-1/2"
                onClick={downloadDocument}
            >
                WORD
            </button>
        </>
    )
}

export default DescargaWord