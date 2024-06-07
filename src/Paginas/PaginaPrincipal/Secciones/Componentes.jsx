import styled from "styled-components";
import bg from '../../../img/bg1.png';
export const ContenedorBienvenida = styled.div`
    
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    background-color: var(--Dorado);
    position: relative;
    z-index: 100;
    height: calc(100vh - 80px);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${bg});
        background-size: cover; /* Para ajustar la imagen al tamaño del contenedor */
        background-repeat: no-repeat;
        background-position: center; /* Para centrar la imagen */
        opacity: 0.5; /* Ajusta este valor para la transparencia deseada */
        z-index: -1; /* Debe estar detrás del contenido */
    }
`;

export const ContenedorSeccion = styled.div`
    height: calc(100vh - 80px);
    @media (max-width: 800px) {
      height: auto;
    }
`
export const SubtituloTexto = styled.h2`
    font-size: ${props => props.size ? props.size : '24px'};
    font-family: 'FuenteEspecial';
    text-align:center;
    margin:0;
    margin-bottom: 10px 0;

`
export const TextoGenerico = styled.p`
    font-size: ${props => props.size ? props.size : '20px'};
    font-family: 'FuentePrincipal';
    text-align:center;
    
    

`

