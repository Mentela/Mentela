import React from 'react';
import '../estilos/calculadora/pantallacalculadora.css';

export default function PantallaCalculadora({ entrada }) {
  return (
    <div className='input'>
      {entrada}
    </div>
  );
} 