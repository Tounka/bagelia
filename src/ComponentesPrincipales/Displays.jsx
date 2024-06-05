import styled from "styled-components";
import { Menu } from "./MenuSuperior";

const DisplayPrincipalStyled = styled.div`
    display:flex;
    flex-direction:column;

    width: 100%;
    height: calc(100% - 80px);
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