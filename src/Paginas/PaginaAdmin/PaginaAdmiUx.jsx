import styled from "styled-components";
import { useContext, useEffect } from "react";
import { PaginaContext } from "./Contexto";
import { AgregarDatos } from "./Secciones/AgregarDatos";
import { useNavigate } from "react-router-dom";
import { CatalogoAdmin } from "./Secciones/CatalogoAdmin";

export const PaginaAdmiUx = () => {
    const { user, pagina } = useContext(PaginaContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        
        if (user.userName === '' || user.password === '') {
          navigate('/login');
        }
      }, [user, navigate]);

    const secciones = {
        agregar_admi: <AgregarDatos />,
        modificar_admi: <CatalogoAdmin />,
     
    };
    return (
        <>
            {secciones[pagina] || <p>Página no encontrada  </p>  }
        </>
    );
}