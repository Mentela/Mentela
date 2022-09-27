import React from 'react';
import '../estilos/nav.css'
import { useContext } from 'react';
import {useState} from 'react';
import { langContext } from '../contexts/langContext';



export default function BotonIdioma() {
  
  const idioma = useContext(langContext);
  const [imagen, setImagen] = useState('usa');

  const cambiarImagen = () => imagen === 'usa' ? setImagen('arg') : setImagen('usa');

  return (
    <button className='boton-idioma' onClick={()=>idioma.manejarEvento()}>
      <img onClick={cambiarImagen}
        className='icono-lang'
        id='img1'
        src={require(`../imagenes/${imagen}.png`)}
        alt={`Icono lang`}
      />
    </button>
  )
}

