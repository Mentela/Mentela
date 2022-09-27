import React from "react";
import '../estilos/home.css'
import '../estilos/aboutme.css'
import { FormattedMessage } from 'react-intl';
import Iconos from "../componentes/Iconos";


export default function Home() {
  
  const handleClick = () => {
    window.open('tel:3584876535', '_blank')
  }

  return (
    <div className="contenedor-home">
      <div className='contenedor-titulos'>
        <h3>
          <FormattedMessage id='home.h3' defaultMessage='' />
        </h3>
        <h1>
          <FormattedMessage id='home.h1' defaultMessage='' />
        </h1>
        <button className="boton-hire" onClick={handleClick}>
          <FormattedMessage id='home.button' defaultMessage='' />
        </button>
      </div>
      <div className='esfera uno'></div>
      <div className='esfera dos'></div>
      <div className="contenedor-contact">
        <div className="efecto">
          <Iconos
            icono='wsp'
            link='https://walink.co/f63c6d'
            clase='icono-contact' />
        </div>
        <div className="efecto">
          <Iconos
            icono='gmail'
            link='mailto:lorenzomentesana@gmail.com'
            clase='icono-contact' />
        </div>
      </div>
    </div>)
}