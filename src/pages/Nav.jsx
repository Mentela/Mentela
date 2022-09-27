import React from 'react';
import { Outlet, Link } from "react-router-dom";
import BotonIdioma from '../componentes/BotonIdioma';
import '../estilos/nav.css';
import Iconos from "../componentes/Iconos";
import { FormattedMessage } from 'react-intl';





export default function Nav() {
  return (
    <>
      <nav>      
        <Iconos
          icono='github'
          link='https://github.com/Mentela'
          clase='icono-nav' />
        <Iconos
          icono='linkedin'
          link='https://www.linkedin.com/in/lorenzo-mentesana-06126a205/'
          clase='icono-nav' />
        <div className='contenedor-botones'>
          <Link className='boton-link' to='/' >
            <i className="fa-sharp fa-solid fa-house"></i>
            <span className='msg'><FormattedMessage id='nav.home' defaultMessage='' /></span>
          </Link>
          <Link className='boton-link' to='/aboutme' >
            <i className="fa-solid fa-user"></i>
            <span className='msg'><FormattedMessage id='nav.aboutme' defaultMessage='' /> </span>
          </Link>
          <Link className='boton-link' to='/projects' >
            <i className="fa-solid fa-pen"></i>
            <span className='msg'><FormattedMessage id='nav.projects' defaultMessage='' /></span>
          </Link>
          <BotonIdioma />
        </div>
      </nav>
      <Outlet />
    </>
  )
}


