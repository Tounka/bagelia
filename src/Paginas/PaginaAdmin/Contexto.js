import React, { createContext, useState, useEffect } from 'react';

export const PaginaContext = createContext(null); 

export const PaginaProvider = ({ children }) => {
  const [pagina, setPagina] = useState('agregar_admi'); 
  const [user, setUser] = useState({
    userName: '',
    password: ''
  });
  return (
    <PaginaContext.Provider value={{ pagina, setPagina, user, setUser  }}>
      {children} {/* Wrap your components here */}
    </PaginaContext.Provider>
  );
};