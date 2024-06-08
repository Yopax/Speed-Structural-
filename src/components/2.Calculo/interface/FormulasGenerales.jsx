import React from "react";
import { Formulas } from "@/components/2.Calculo/interface/Formulas";

function FormulasGenerales() {
  return (
    <>
      <Formulas
        item2="Losas"
        description2="Las formulas utilizadas para calcular las losas fueron las siguientes, para la losa aligerada: ln/25, para la Losa Prefabricada Pretensada: ln/28, para la losa maciza: ln/30, para la losa maciza bidireccional: ln x-x *2 + ln y-y*2 / 140."
        title="Formulas predimensionamiento"
        boton="F-PRE"
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


      <Formulas
        item2="Losa Aligerada = Np * Ca * Dx * Dy"
        description2="Np= Numero de paños,
        Ca= Carga por área,
        Dx= Dimensión en x del paño,
        Dy= Dimensión en y del paño "
        title="Formulas - Metrado de cargas"
        boton="F-MET"
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
    </>
  );
}

export default FormulasGenerales;
