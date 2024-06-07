import styled from "styled-components";
import { ContenedorSeccion } from "./Componentes";
import img1 from '../../../img/bolsa.jpg'
import img2 from '../../../img/delivery.jpg'
import { BtnNavigatePaginaPrincipal } from "../../../ComponentesPrincipales/Botones/BtnNavigate";
const ContenedorSeccionEnvio = styled(ContenedorSeccion)`
    display:grid;
    grid-template-columns: 1fr 1fr;
    height: calc(100vh - 80px);
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        max-height: auto;
    }
`

const BgImg = styled.div`
    width: 100%;
    height:100%;
    background-image: url(${props => props.img ? props.img : ''});
    background-position: center;
    background-size: cover;
    position: relative;

    @media (max-width: 800px) {
        display: ${props => props.imgSecundaria ? 'none' : 'flex'};
    }

`
const ContenedorEnvio = styled.div`
    width: 100%;
    height:100%;
    position:absolute;
    top:0;
    left: 0;

    display:flex;
    flex-direction: column;
    justify-content: space-around;

    background-color: #8c6e4a35;
`

const ContenedorTextoSuperior = styled.div`
    height: 300px;
    width: 100%;
    padding: 40px 80px;

    background-color: #8c6e4ac2;

       @media (max-width: 800px) {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        
    }
 
`
const ContenedorBtn = styled(ContenedorTextoSuperior)`
    height: auto;
    background-color: transparent;
     @media (max-width: 800px) {
        display:flex;
        justify-content:center;
    }
`
const Texto = styled.p`
    color: var(--Blanco);
    font-family: ${props => props.titulo ? 'FuenteEspecial' : ''};
    font-size: ${props => props.size ? props.size : '16px'};
    max-width: 300px;
    margin: 0;
    margin-bottom: 20px;

       @media (max-width: 800px) {
            text-align:center;
            
    }
`
export const SeccionEnvio = () =>{
    return(
        <ContenedorSeccionEnvio>
            
                <BgImg img ={img1}>
                    <ContenedorEnvio>
                        <ContenedorTextoSuperior>
                            <Texto titulo size={'48px'}>Envío a domicilio</Texto>
                            <Texto titulo size={'24px'}>Entregamos tu bolsa donde tu lo necesites</Texto>
                        </ContenedorTextoSuperior>
                        <ContenedorBtn>
                            <BtnNavigatePaginaPrincipal txt='Contactanos' path='contacto'  />
                        </ContenedorBtn>
                        
                    </ContenedorEnvio>
                    
                </BgImg>
                <BgImg img ={img2} imgSecundaria>
                    
                </BgImg>
            
        </ContenedorSeccionEnvio>
    )
}