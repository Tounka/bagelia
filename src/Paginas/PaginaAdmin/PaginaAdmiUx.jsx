import styled from "styled-components";
import { useContext, useEffect } from "react";
import { PaginaContext } from "./Contexto";
import { AgregarDatos } from "./Secciones/AgregarDatos";
import { useNavigate } from "react-router-dom";


export const PaginaAdmiUx = () => {
    const { user, setPagina } = useContext(PaginaContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        
        if (user.userName === '' || user.password === '') {
          navigate('/login');
        }
      }, [user, navigate]);
    return(
        <>
            
            <AgregarDatos />
        </>
    )
}