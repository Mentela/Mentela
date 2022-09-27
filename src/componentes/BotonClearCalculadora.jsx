import React from "react";
import '../estilos/calculadora/botonclearcalculadora.css';

export default function BotonClearCalculadora(props) {
  return (
    <div
      className='boton-clear'
      onClick={props.manejarClear}>
      {props.children}
    </div>
  );
}