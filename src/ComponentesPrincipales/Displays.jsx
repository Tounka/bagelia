import styled from "styled-components";
import { Menu, MenuAdmi } from "./MenuSuperior";
import { Footer } from "./Footer";
import { useState } from "react";

const DisplayPrincipalStyled = styled.div`
    display:flex;
    flex-direction:column;

    width: 100%;
    
    height: 100%;
    max-height: calc(100vh-  80px);
    margin-top: 80px;

    
` 
export const DisplayPrincipal = ({children}) =>{
    return(
        <DisplayPrincipalStyled>
            <Menu />
            {children}
            <Footer />
        </DisplayPrincipalStyled>
    )
}


export const DisplayAdmi = ({children}) =>{
    
    return(
        <DisplayPrincipalStyled>
            <MenuAdmi />
            {children}
            <Footer />
        </DisplayPrincipalStyled>
    )
}

export const ContenedorPrincipal = styled.div`
    height: calc(100vh - 80px);
    @media (max-width: 800px) {
      height: auto;
    }
`

export const DisplayPrincipalAdmi = ({children}) =>{
    return(
        <DisplayPrincipalStyled>
            <Menu />
            {children}
            <Footer />
        </DisplayPrincipalStyled>
    )
}
