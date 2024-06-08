import styled from "styled-components";
import { ContenedorSeccion } from "./Componentes";
import CuponImg from '../../../img/Cupon.jpg';
import { ImgPicture } from "../../../ComponentesPrincipales/Img";
import imgBg from '../../../img/bg4.jpg'
import { useState } from "react";

const ContenedorSeccionPrincipalCupon = styled(ContenedorSeccion)`
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: var(--Rosado);
`;

const ContenedorSeccionCupon = styled.div`
    width: 60%;
    max-width: 800px;
    height: 90%;
    gap: 30px;
    position: relative;
`;

const ContenedorCupon = styled.div`
    width: 100%;
    height: auto;
    max-height: 720px;
    position: relative;
`;

const TextoTitularCupon = styled.h3`
    font-size: 42px;
    color: black;
    text-align: center;
    font-family: FuenteEspecial;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    font-size: 46px;
    
    background-color: var(--Blanco);
    
    background-image:  radial-gradient(var(--Dorado) 1px, transparent 0.5px), radial-gradient(var(--Blanco) 1px, #e5e5f7 0.5px);
    background-size: 20px 20px;
    background-position: 0 0,10px 10px;


    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: bold;
    font-family: FuenteEspecial;
    color: black;
    cursor: pointer;
    transition: clip-path 0.5s ease-in-out;
    clip-path: ${props => props.estado ?  'polygon(0 0, 100% 0, 0% 00%, 0% 0%);' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' };
    
    &:hover {
        
    }
`;

export const SeccionCupon = () => {
    const [bool, setBool] = useState(false);
    const handleClick = ()=> {
        
        setBool(true);
        
    }
    return (
        <ContenedorSeccionPrincipalCupon>
            <ContenedorSeccionCupon>
                <TextoTitularCupon>Shhhh... no le cuentes a nadie, tenemos un regalo para ti</TextoTitularCupon>
                <ContenedorCupon onClick={handleClick}>
                    <Overlay estado={bool}>Da click</Overlay>
                    <ImgPicture  src={CuponImg} alt='Img Cupon' />
                </ContenedorCupon>
            </ContenedorSeccionCupon>
        </ContenedorSeccionPrincipalCupon>
    );
};
