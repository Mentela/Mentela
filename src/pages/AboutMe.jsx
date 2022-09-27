import React from "react";
import '../estilos/aboutme.css'
import { FormattedMessage } from 'react-intl';
import Iconos from "../componentes/Iconos";
import mifoto from '../imagenes/foto.jpg'


export default function AboutMe() {
  return (
    <div className="contenedor-aboutme">
      <img src={mifoto} alt='foto personal' className="foto" />
      <div className="contenedor-historia">
        <h1 className="titulo-aboutme">
          <FormattedMessage id='about.h1' defaultMessage='' />
        </h1>
        <p className="historia">
          <FormattedMessage id='about.p' defaultMessage='' />
        </p>
      </div>
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