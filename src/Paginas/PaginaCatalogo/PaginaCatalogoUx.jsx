import styled from "styled-components";
import { DisplayPrincipal } from "../../ComponentesPrincipales/Displays";
import { ContenedorPrincipal } from "../../ComponentesPrincipales/Displays";
import { ContenedorCard } from "./Secciones/ContenedorCards";
const ContenedorPrincipalPaginaCatalogo = styled(ContenedorPrincipal)`
    background-color: var(--Dorado);
`


export const PaginaCatalogoUx = () => {
    return(
        <ContenedorPrincipalPaginaCatalogo>
            <ContenedorCard />
        </ContenedorPrincipalPaginaCatalogo>
    )
}