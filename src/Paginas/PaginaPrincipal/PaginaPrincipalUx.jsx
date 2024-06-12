
import { SeccionBienvenida } from "./Secciones/SeccionBienvenida"
import { SeccionCupon } from "./Secciones/SeccionCupon"
import { SeccionEnvio } from "./Secciones/SeccionEnvio"
import { SeccionRegalo } from "./Secciones/SeccionRegalo"
import { SeccionCompromisos } from "./Secciones/SeccionCompromisos"
import { SeccionContacto } from "./Secciones/SeccionContacto"
export const PaginaPrincipalUx = () =>{
    return(
        <>
            <SeccionBienvenida />
            <SeccionRegalo />
            <SeccionEnvio />
            <SeccionCompromisos />
            <SeccionCupon />
            <SeccionContacto  />
        </>
    )
}