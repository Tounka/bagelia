import styled from "styled-components";

import { ContenedorPrincipal } from "../../../ComponentesPrincipales/Displays";
import { ContenedorCardStyled } from "../../../ComponentesPrincipales/Displays";
import { CardItem } from "../../PaginaCatalogo/Componentes/CardItem";
const ContenedorPrincipalPaginaCatalogo = styled(ContenedorPrincipal)`
    background-color: var(--Dorado);
    min-height: calc(100vh - 80px);
`


export const CatalogoAdmin = () => {
    return(
        <ContenedorPrincipalPaginaCatalogo>
            <ContenedorCardStyled>
                
                <CardItem />

            </ContenedorCardStyled>
           
        </ContenedorPrincipalPaginaCatalogo>
    )
}