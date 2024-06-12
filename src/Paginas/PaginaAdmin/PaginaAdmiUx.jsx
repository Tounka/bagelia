import styled from "styled-components";
import { useContext } from "react";
import { PaginaContext } from "./Contexto";
import { AgregarDatos } from "./Secciones/AgregarDatos";


export const PaginaAdmiUx = () => {
    const { pagina, setPagina } = useContext(PaginaContext);
    return(
        <>
            <AgregarDatos />
        </>
    )
}