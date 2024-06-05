import styled from "styled-components";
import {BtnNavigateMenu} from "../ComponentesPrincipales/Botones/BtnNavigate"
const MenuStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items:center;

    width: 100%;
    height: 80px;

    font-size: 24px;
    color: var(--Negro);
    background-color: var(--Blanco);

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