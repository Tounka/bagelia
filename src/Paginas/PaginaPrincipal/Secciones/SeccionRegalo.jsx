import styled from "styled-components";
import { SubtituloTexto, TextoGenerico, ContenedorSeccion } from "./Componentes";
import { BtnNavigatePaginaPrincipal } from "../../../ComponentesPrincipales/Botones/BtnNavigate";
import {  Puerta, Linea  } from "./Formas";
import {ImgPicture} from '../../../ComponentesPrincipales/Img';
import { SlDiamond } from "react-icons/sl";
import img from '../../../img/imgRam2.jpg'
const ContenedorRegalo = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr;
    gap: 30px;
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        
    }
    width: 100%;
    height: 100%;
   
    background-color: var(--Blanco);
    padding: 30px;

`

const ContenedorSubseccionRegalo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    

`
const ContenedorDerechoSubseccionRegalo = styled.div`
    height: 500px;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: right;

     @media (max-width: 800px) {
        width:100%;
        position: relative;
        justify-content:center;
    }

`
const ContenedorTextoDerechoSubseccionRegalo = styled.div`
    display:flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    @media (max-width: 800px) {
        display:none;
    }
    
`
const TextoDerechoSubseccionRegalo = styled.p`
    font-size: ${props => props.titular ? '36px' : '16px'};
    line-height: ${props => props.espaciado ? '16px' : 'null'};
    margin: 0;
    justify-content:center;
    font-family: ${props => props.titular ? 'FuenteEspecial' : 'null'};
    font-weight: ${props => props.titular ? 'Bold' : 'null'};
    margin-right:auto;
    width: auto;
    max-width:200px;
    display: ${props => props.ocultar ? 'none' : ''};
    
    @media (min-width: 1124px) {

        max-width:371px;

    }
    @media (max-width: 900px) {

        max-width: 150px;

    }
    @media (max-width: 800px) {
        max-width: 700px;
        margin-top: 20px;
        text-align:center;
        width: 100%;

        display: ${props => props.ocultar ? 'block' : ''};

        
    }
  
    

`


const ContenedorTituloDerecho =styled.div`
    display:flex;
    margin-top: 30px;
    margin-left: -50px;
    align-items:Center;
    justify-content:center;
    flex-wrap: wrap;
    @media (max-width: 800px) {
        display:none;
        
    }
     @media (max-width: 850px) {
       margin-right:auto;
        flex-direction:column;
    }

`

export const SeccionRegalo = () =>{
    return(
        <ContenedorSeccion>
            <ContenedorRegalo>
                <ContenedorSubseccionRegalo>
                    <div>
                    <SubtituloTexto size={'42px'}>Memorable y único</SubtituloTexto>
                    <TextoGenerico>Una bolsa es un regalo versátil y con estilo. Va más allá de su función práctica, siendo un símbolo de cuidado y conexión. Es una forma simple pero significativa de expresar aprecio y cariño.</TextoGenerico>
                    </div>
                    <Linea />
                    <TextoDerechoSubseccionRegalo titular ocultar>EL REGALO PERFECTO</TextoDerechoSubseccionRegalo>
                    <BtnNavigatePaginaPrincipal path={'catalogo'} txt={'Ve nuestro catalogo'} border />
                </ContenedorSubseccionRegalo>

                <ContenedorSubseccionRegalo>
                    <ContenedorDerechoSubseccionRegalo>
                        <Puerta>
                            <ImgPicture src={img} alt={'Imagen de bolsa'}/>
                        </Puerta>
                        <ContenedorTextoDerechoSubseccionRegalo>
                            <ContenedorTituloDerecho>
                                <TextoDerechoSubseccionRegalo titular>EL REGALO PERFECTO</TextoDerechoSubseccionRegalo>
                                <SlDiamond color="var(--Dorado)" fontSize={'44px'} />
                            </ContenedorTituloDerecho>
                      
                           <TextoDerechoSubseccionRegalo espaciado>Dale ese regalo a tu persona favorita</TextoDerechoSubseccionRegalo>
                        </ContenedorTextoDerechoSubseccionRegalo>
                    </ContenedorDerechoSubseccionRegalo>

                </ContenedorSubseccionRegalo>
            </ContenedorRegalo>
        </ContenedorSeccion>
    )
}