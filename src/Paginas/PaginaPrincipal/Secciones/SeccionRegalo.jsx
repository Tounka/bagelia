import styled from "styled-components";
import { SubtituloTexto, TextoGenerico, ContenedorSeccion } from "./Componentes";
import { BtnNavigatePaginaPrincipal } from "../../../ComponentesPrincipales/Botones/BtnNavigate";
import { Estrella, Puerta } from "./Formas";
import {ImgPicture} from '../../../ComponentesPrincipales/Img'
import img from '../../../img/imgRam.jpg'
const ContenedorRegalo = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr;
    
    @media (max-width: 600px) {
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




export const SeccionRegalo = () =>{
    return(
        <ContenedorSeccion>
            <ContenedorRegalo>
                <ContenedorSubseccionRegalo>
                    <div>
                    <SubtituloTexto size={'42px'}>Memorable y único</SubtituloTexto>
                    <TextoGenerico>Una bolsa es un regalo versátil y con estilo. Va más allá de su función práctica, siendo un símbolo de cuidado y conexión. Es una forma simple pero significativa de expresar aprecio y cariño.</TextoGenerico>
                    </div>
                    <Estrella />
                    <BtnNavigatePaginaPrincipal path={'catalogo'} txt={'Ve nuestro catalogo'} border />
                </ContenedorSubseccionRegalo>

                <ContenedorSubseccionRegalo>
                    <Puerta>
                        <ImgPicture src={img} alt={'Imagen de bolsa'}/>
                    </Puerta>
                </ContenedorSubseccionRegalo>
            </ContenedorRegalo>
        </ContenedorSeccion>
    )
}