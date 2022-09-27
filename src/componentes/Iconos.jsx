import React from "react";
import '../estilos/iconos.css'

const Iconos = (props) => {

  const manejarClick = () =>{
    window.open(`${props.link}`, '_blank')
  }

  return (
      <button className="boton-iconos" onClick={manejarClick}>
        <img
          className={`${props.clase}`}
          src={require(`../imagenes/${props.icono}.png`)}
          alt={`Icono ${props.icono}`}
        />
      </button>
  );
};

export default Iconos;



