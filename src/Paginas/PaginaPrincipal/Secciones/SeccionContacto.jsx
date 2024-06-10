import styled from "styled-components";
import { ContenedorSeccion } from "./Componentes";
import {PuertaSeccionContacto} from './Formas'
const ContenedorSeccionContacto = styled(ContenedorSeccion)`
    height: calc(100vh - 80px);
    background-color: var(--Blanco);
    display:flex;
    justify-content:center;
    align-items:center;

`   
export const SeccionContacto = () => {
    return(
        <ContenedorSeccionContacto>
                <PuertaSeccionContacto />
        </ContenedorSeccionContacto>
    )
}