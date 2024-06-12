import styled from "styled-components"
import { CardItem } from "../Componentes/CardItem"
const ContenedorCardsStyled = styled.div`
    width: 100%;
    height: 100%;
    max-height: auto;
    gap: 20px;
    padding:  20px;
    display:grid;

    grid-template-columns: repeat(5, 1fr);
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 400px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const ContenedorCard = () => {
    return(
        <ContenedorCardsStyled>
            <CardItem />

        </ContenedorCardsStyled>
    )
}