
import { SeccionBienvenida } from "./Secciones/SeccionBienvenida"
import { SeccionEnvio } from "./Secciones/SeccionEnvio"
import { SeccionRegalo } from "./Secciones/SeccionRegalo"
export const PaginaPrincipalUx = () =>{
    return(
        <>
            <SeccionBienvenida />
            <SeccionRegalo />
            <SeccionEnvio />
        </>
    )
}