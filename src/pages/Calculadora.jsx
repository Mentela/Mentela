import Pantalla from '../componentes/PantallaCalculadora';
import Boton from '../componentes/BotonCalculadora';
import BotonClear from '../componentes/BotonClearCalculadora';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import '../estilos/calculadora/calculadora.css';


export default function Calculadora() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val)
  };

  const agregarResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese algun valor');
    };
  };

  return (
    <div className="Calculadora">  
      <div className='contenedor-calculadora'>
        <Pantalla entrada={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput} >7</Boton>
          <Boton manejarClick={agregarInput} >8</Boton>
          <Boton manejarClick={agregarInput} >9</Boton>
          <Boton manejarClick={agregarInput} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div>
          <BotonClear
            manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}