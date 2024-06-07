import styled from "styled-components";
import { Menu } from "./MenuSuperior";

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
        </DisplayPrincipalStyled>
    )
}