import React, { createContext, useState, useEffect } from 'react';

export const PaginaContext = createContext(null); 

export const PaginaProvider = ({ children }) => {
  const [pagina, setPagina] = useState(''); 

  return (
    <PaginaContext.Provider value={{ pagina, setPagina }}>
      {children} {/* Wrap your components here */}
    </PaginaContext.Provider>
  );
};