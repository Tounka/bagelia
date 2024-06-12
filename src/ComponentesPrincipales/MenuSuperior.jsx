import styled from "styled-components";
import {BtnNavigateMenu, BtnSwitchMenuAdmi} from "../ComponentesPrincipales/Botones/BtnNavigate"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { PaginaContext } from "../Paginas/PaginaAdmin/Contexto";
const MenuStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items:center;

    width: 100%;
    height: 80px;

    font-size: 24px;
    color: var(--Negro);
    background-color: var(--Blanco2);

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1000;

`

export const Menu = () =>{
 
    return(
        <MenuStyled>
            <BtnNavigateMenu txt='Bolsas' path='bolsas'  />
            <BtnNavigateMenu txt='BAGELIA' path='' principal={true} />
            <BtnNavigateMenu txt='Contacto' path='contacto'  />
        </MenuStyled>
    )
}
export const MenuAdmi = () =>{
    const { pagina, setPagina } = useContext(PaginaContext);
    
    return(
        <MenuStyled>
            <BtnSwitchMenuAdmi txt='Modificar' path='modificar_admi' setPagina={setPagina} />
            <BtnSwitchMenuAdmi txt='BAGELIA' path='' principal={true} setPagina={setPagina} />
            <BtnSwitchMenuAdmi txt='Agregar' path='agregar_admi'  setPagina={setPagina} />
        </MenuStyled>
    )
}