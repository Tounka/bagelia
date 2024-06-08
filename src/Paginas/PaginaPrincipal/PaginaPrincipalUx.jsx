
import { SeccionBienvenida } from "./Secciones/SeccionBienvenida"
import { SeccionCupon } from "./Secciones/SeccionCupon"
import { SeccionEnvio } from "./Secciones/SeccionEnvio"
import { SeccionRegalo } from "./Secciones/SeccionRegalo"
export const PaginaPrincipalUx = () =>{
    return(
        <>
            <SeccionBienvenida />
            <SeccionRegalo />
            <SeccionEnvio />

            <SeccionCupon />
        </>
    )
}