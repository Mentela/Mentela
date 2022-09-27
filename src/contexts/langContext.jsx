import React from "react";
import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import MensajesIngles from '../lang/en.json'
import MensajesLatino from '../lang/lat.json'


const langContext = React.createContext();

const LangProvider = ({ children }) => {

  const [mensajes, setMensajes] = useState(MensajesIngles);

  const manejarEvento = () => {
    mensajes === MensajesIngles ? setMensajes(MensajesLatino) : setMensajes(MensajesIngles);
  }

  return (
    <langContext.Provider value={{ manejarEvento: manejarEvento }}>
      <IntlProvider locale='en' messages={mensajes}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
}


export { LangProvider, langContext };