import styled from "styled-components";
import { ContenedorSeccion } from "./Componentes";
import {PuertaSeccionContacto} from './Formas'
const ContenedorSeccionContacto = styled(ContenedorSeccion)`
    height: calc(100vh - 80px);
    position: relative;
    background-color: var(--Blanco);
    display:flex;
    justify-content:center;
    align-items:center;

`   

const ContenedorTextoContacto = styled.div`
   overflow-y: auto; /* Permitir el desplazamiento vertical */
  padding-right: 10px; /* Espacio para evitar que el contenido se sobreponga al scroll */
  box-sizing: border-box;
`

const TituloTextoContacto = styled.h2`
    font-size: 68px;
    font-family: 'FuenteEspecial';
    text-align:center;
`
const TxtContacto = styled.p`
    font-size: ${props => props.titular ? '28px' : '26px'};
    font-weight: ${props => props.titular ? 'bold' : ''};
    text-align: center;
    margin: 5px;
`

const FooterContacto = styled.div`
    background-color: var(--Blanco2);
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    height: 80px;
    bottom: 0;
    left: 0;
`
const BtnRedSocialStyled = styled.a`
    height: 100%;
    min-width: 120px;
    font-size: 24px;
    color: black;
    text-decoration: none;

    display: flex;
    justify-content:center;
    align-items:center;

    cursor: pointer;
    transition: .2s ease-in;
    &:hover{
        color: var(--Dorado);
        

        transition: .2s ease-in;
    }
`
const BtnRedSocial = ({txt, link}) => {
    return(
        <BtnRedSocialStyled href={link}>{txt}</BtnRedSocialStyled>
    )
}


export const SeccionContacto = () => {
    return(
        <ContenedorSeccionContacto>
                <PuertaSeccionContacto>
                    <ContenedorTextoContacto>
                        <TituloTextoContacto>Contacto</TituloTextoContacto>
                        <TxtContacto titular>Dirección:</TxtContacto>
                        <TxtContacto>Av Internacional 5107 (al lado de casa 5 de mayo)</TxtContacto>
                        <TxtContacto titular>Teléfono</TxtContacto>
                        <TxtContacto>669 167 6113</TxtContacto>
                        <TxtContacto titular>Email</TxtContacto>
                        <TxtContacto>Bageliastore</TxtContacto>
                    </ContenedorTextoContacto>
                </PuertaSeccionContacto>

                <FooterContacto>
                    <BtnRedSocial txt="Facebook" link="https://www.facebook.com/profile.php?id=61557215203912" /> 
                    <BtnRedSocial txt="WhatsApp" link="https://wa.me/526691676113?text=Hola,%20quiero%20información%20sobre%20las%20bolsas" /> 
                    <BtnRedSocial txt="Instagram" link="https://www.instagram.com/bageliastore/" /> 
                    
                </FooterContacto>
        </ContenedorSeccionContacto>
    )
}