import React from "react";
import '../estilos/home.css'
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="contenedor-home">
      <div className='contenedor-titulos'>
        <h3>
          <FormattedMessage id='not.h3' defaultMessage='' />
        </h3>
        <h1>
          <FormattedMessage id='not.h1' defaultMessage='' />
        </h1>
        <Link className='comebackhome' to='/'><i class="fa-solid fa-house"></i></Link>
      </div>
    </div>
  )
} 