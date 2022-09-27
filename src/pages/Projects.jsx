import React from "react";
import { Link } from "react-router-dom";
import '../estilos/projects.css'
import Iconos from "../componentes/Iconos";


export default function Projects() {
  return (
    <div className="contenedor-projects">
      <div className="contenedor-singular caja1">
        <Link className='texto-caja ' to='/calculadora' >
          Calculadora
        </Link>
      </div>
      <div className="contenedor-singular caja2">
        <Link className='texto-caja' to='/projects' >
        Coming soon
        </Link>
      </div>
      <div className="contenedor-singular caja3">
        <Link className='texto-caja' to='/projects' >
        Coming soon
        </Link>
      </div>
      <div className="contenedor-singular caja4">
        <Link className='texto-caja' to='/projects' >
          Coming soon
        </Link>
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
    </div>
  )
}