import styled from "styled-components";
import { ImgPicture } from "../../../ComponentesPrincipales/Img";
const CardItemStyled = styled.div`
    height: 100%;
    min-height: 250px;
    width: 100%;
    background-color: var(--Rosado);
    border-radius: 20px;
    max-height: 400px;
    overflow: hidden;

    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;

    cursor: pointer;

`

const ContenedorImg = styled.div`
    width: 100%;
    height: 70%;
    overflow:hidden;
    transition: .2s ease-in;

    img{
        
            transition: .2s ease-in;
         &:hover{
            transition: .2s ease-in;
            transform: scale(1.1); 
        }
    
    }
   
`
const ContenedorTxt = styled.p`
    height: ${props => props.titular ?  '10%' : '20%'};
    width: 100%;
    display:flex;
    font-size: ${props => props.titular ?  '28px' : '16px'};
    text-align: ${props => props.titular ?  'center' : ''};
    font-weight: ${props => props.titular ?  'bold' : ''};
    font-family: ${props => props.titular ?  'FuenteEspecial' : ''};
    justify-content: ${props => props.titular ?  'center' : ''};
    align-items: ${props => props.titular ?  'center' : ''};
    border-bottom: ${props => props.titular ?  '4px solid var(--Blanco)' : ''};
    
    @media (max-width: 600px) {
        border-bottom: ${props => props.titular ?  'none' : ''};
        
    }
    margin: 0;
    padding: 0 10px;
`

export const CardItem = ({precio = '200', titulo = 'Bolsa elegante', img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1yeNA97zcgA9B3i8YhsbBdWspwub5gvxRw&s', onclick}) =>{
    return(
        <CardItemStyled onClick={onclick}>
            <ContenedorImg> <ImgPicture alt = {'Imagen bolsa ' + titulo} src = {img}/>   </ContenedorImg>
            <ContenedorTxt titular>${precio}</ContenedorTxt>
            <ContenedorTxt >{titulo}</ContenedorTxt>
        </CardItemStyled>
    )
}

