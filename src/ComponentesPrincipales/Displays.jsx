import styled from "styled-components";
import { Menu } from "./MenuSuperior";
import { Footer } from "./Footer";

const DisplayPrincipalStyled = styled.div`
    display:flex;
    flex-direction:column;

    width: 100%;
    
    height: auto;
    max-height: auto;
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

export const ContenedorPrincipal = styled.div`
    height: calc(100vh - 80px);
    @media (max-width: 800px) {
      height: auto;
    }
`