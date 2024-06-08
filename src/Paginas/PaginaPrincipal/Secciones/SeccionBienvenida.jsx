import styled from "styled-components";
import { ContenedorBienvenida } from "./Componentes";
import { BtnNavigatePaginaPrincipal } from "../../../ComponentesPrincipales/Botones/BtnNavigate";

const ContenedorTextoBienvenida = styled.div`
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    display:flex;
    flex-direction:column;
    align-items:center;
`
const TextoBienvenida = styled.h3`
    font-size: ${props => props.size ? props.size : '20px'};
    font-family: ${props => props.titulo ? 'FuenteEspecial' : ''};
    text-align:center;
    margin-bottom:10px;
    padding: 0 10px;

`
const ContenedorBg = styled.div`
  position: absolute;
  top: 45%;
  top: 45%;
  left: 50%;
  height: 50%;
  min-height: 450px;
  width: 60%;
  min-width: 350px;
  max-width: 500px;
  background-color: #8c6e4aa3;
  border-radius: 50% 50% 0 0;
  z-index: -1;
  transform: translate(-50%, -50%);

    @media (max-width: 355px) {
        
        min-width: 200px;
        width: 300px;
      
    }

`;


export const SeccionBienvenida = () =>{
    return(
        <ContenedorBienvenida>
            <ContenedorTextoBienvenida>
                <ContenedorBg />
                <TextoBienvenida size={'46px'} titulo>Buenas bolsas a buen precio</TextoBienvenida>
                <TextoBienvenida size={'26px'}>Date ese detalle</TextoBienvenida>

                <BtnNavigatePaginaPrincipal txt={'Contacto'} path={'contacto'} />

            </ContenedorTextoBienvenida>
        </ContenedorBienvenida>
    )
}