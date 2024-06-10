import styled from "styled-components";
import { ContenedorSeccion } from "./Componentes";
import { TbTruckDelivery } from "react-icons/tb";
import { ImPriceTag } from "react-icons/im";
import { IoDiamondSharp } from "react-icons/io5";
import {ContenedorImgCompromisos} from './Formas'
import { ImgPicture } from "../../../ComponentesPrincipales/Img";
import imgpSeccionCompromisos from '../../../img/bolsavar2.jpg'
const ContenedorCompromisos = styled(ContenedorSeccion)`
    background-color: var(--Blanco);
    width: 100%;
    height: calc(100vh - 80px);
    padding: 30px;
`
const ContenedorHijoCompromisos = styled.div`
    display:flex;
    flex-direction:column;
    height: calc(100% - 80px);
    width: 100%;
    
`
const TituloSeccion = styled.h3`
    font-size: 42px;
    margin: 10px;
    font-weight:bold;
    font-family: 'FuenteEspecial';

    text-align:center;
`

const ContenedorItemLista = styled.div`
    display:flex;
    width: 100%;
    align-items:center;
    max-height: auto;
    gap: 20px;

`
const TextoItem = styled.p`
    color: var(--Dorado);
    font-size: ${props => props.size ? props.size :'16px'};
    font-weight: ${props => props.titulo ? 'bold' :''};
    margin: 0;

    
`
const ContedorTextoItem = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
    height:auto;

`
const ContenedorItems = styled.div`
    display:flex;
    height:calc(100% - 80px);
    max-height: calc(100vh - 80px) ;
    flex-direction:column;
    justify-content: space-around;
    
    padding: ${props => props.contenedor2 ? '30px' : '0px'};
    @media (max-width: 800px) {
        
        gap: 30px;
        padding: ${props => props.contenedor2 ? '0' : '0px'};
    }
`
const ContenedorPrincipalCompromisos = styled.div`
display:grid;
    width: 100%;
    height: 100%;
        grid-template-columns: 3fr 2fr;
    @media (max-width: 800px) {
        gap: 30px;
        grid-template-columns: 1fr;
    }
`
const ItemLista = ({icono, txt,tituloItem}) =>{
    return(
        <ContenedorItemLista>
            {icono}
            
            <ContedorTextoItem>
                <TextoItem titulo size='24px'>{tituloItem}</TextoItem>
                <TextoItem>{txt}</TextoItem>
            </ContedorTextoItem>
    
        </ContenedorItemLista>
    )
}
export const SeccionCompromisos = ()=>{
    return(
        <ContenedorCompromisos>
            <ContenedorPrincipalCompromisos>
                  <ContenedorHijoCompromisos>
                    
                    <TituloSeccion>Nuestros Compromisos</TituloSeccion>
                    <ContenedorItems>
                        <ItemLista 
                        icono={<ImPriceTag fontSize={'52px'} color={'var(--Dorado)'} />} 
                        tituloItem={'Precio'} 
                        txt={'En nuestro negocio de bolsas, encontrarás precios que se adaptan a cualquier presupuesto. Nos esforzamos por ofrecer productos de calidad a precios asequibles, asegurando que cada cliente obtenga el mejor valor por su dinero.'} />
                        
                        <ItemLista 
                        icono={<IoDiamondSharp fontSize={'52px'} color={'var(--Dorado)'} />} 
                        tituloItem={'Calidad'} 
                        txt={'Nos comprometemos a ofrecerte productos de la más alta calidad, elaborados con materiales duraderos y técnicas de fabricación avanzadas. Cada bolsa que fabricamos pasa por estrictos controles de calidad para garantizar tu satisfacción y confianza en nuestro producto.'} />

                        <ItemLista 
                        icono={<TbTruckDelivery fontSize={'52px'} color={'var(--Dorado)'} />} 
                        tituloItem={'Rapidez'} 
                        txt={'Desde la realización del pedido hasta la entrega, nos comprometemos a agilizar cada proceso para que tus bolsas lleguen a tus manos en el menor tiempo posible, sin comprometer la calidad.'} />
                    </ContenedorItems>
                
                </ContenedorHijoCompromisos>

                <ContenedorItems contenedor2>
                        <ContenedorImgCompromisos>
                            <ImgPicture src={imgpSeccionCompromisos} alt={'Imagen '} />
                        </ContenedorImgCompromisos>

                </ContenedorItems>
            </ContenedorPrincipalCompromisos>

        </ContenedorCompromisos>
    )
}