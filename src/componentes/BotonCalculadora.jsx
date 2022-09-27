import React from 'react';
import '../estilos/calculadora/botoncalculadora.css';

export default function BotonCalculadora(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return(
        <div 
            className={`contenedor-boton ${esOperador(props.children) ? 'operador' : ''}`.trimEnd() } 
            onClick={() => props.manejarClick(props.children)}>           
            {props.children}
        </div>
    )
};