import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const BtnStyled = styled.button`
    color: var(--negro);
    width: 100%;
    height: 100%;
    border: none;
    cursor:pointer;

    font-size: 16px;
    border: ${props => props.border ? '1px solid black' : ''};
`
const ContenedorBtnMenu = styled.div`
    min-width: 120px;
    height: 100%;
   
     @media (max-width: 600px) {
        width: ${props => props.principal ? '130px' : 'auto'};;
        min-width: auto;
    }
   



`

const BtnStyledMenu = styled(BtnStyled)`
    font-size: ${props => props.principal ? '28px' : '20px'};
    font-family: ${props => props.principal ? 'FuenteEspecial' : ''};
    font-weight: ${props => props.principal ? 'bold' : '400'};
    
    width: 160px;
    @media (max-width: 600px) {
        width: ${props => props.principal ? '140px' : '90px'};;
        
    }
    border:none;
    border-radius:none;
    background-color: transparent;
    transition: .3s ease-in-out;
    cursor: pointer;
    &:hover{
        font-size: ${props => props.principal ? '32px' : '24px'};
        transition: .3s ease-in-out;

    }
`
export const BtnNavigateMenu = ({path, txt, principal}) =>{
    const navigate = useNavigate();
    const handleClickNavigate = () => {
        
        const rutaTo = `/${path}`;
        navigate(rutaTo);
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Para que el scroll sea suave
        });
        
    }
    return(
        <ContenedorBtnMenu>
                  <BtnStyledMenu principal={principal} onClick={() => handleClickNavigate()}>
                    {txt}
                  </BtnStyledMenu>
        </ContenedorBtnMenu>
  
    )
}
export const BtnSwitchMenuAdmi = ({path, txt, principal, setPagina}) =>{
    
    const handleClickSwitch = () => {
        setPagina(path);

        window.scrollTo({
            top: 0,
            behavior: "smooth" // Para que el scroll sea suave
        });
        setPagina(path);
        
    }
    return(
        <ContenedorBtnMenu>
                  <BtnStyledMenu principal={principal} onClick={() => handleClickSwitch()}>
                    {txt}
                  </BtnStyledMenu>
        </ContenedorBtnMenu>
  
    )
}
const ContenedorBtnPaginaPrincipal = styled.div`
    width: 250px;
    height: 60px;
    margin-top: 36px;
    max-width: 100%;
    background-color: var(--Blanco);
    color: var(--Negro);


    cursor:pointer;
`

export const BtnNavigatePaginaPrincipal = ({txt, path, border}) =>{
    const navigate = useNavigate();
    const handleClickNavigate = () => {
        
        const rutaTo = `/${path}`;
        navigate(rutaTo);
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Para que el scroll sea suave
        });
        
    }
    return(
        <ContenedorBtnPaginaPrincipal>
            <BtnStyled onClick={handleClickNavigate} border={border}>
                {txt}
            </BtnStyled>
        </ContenedorBtnPaginaPrincipal>
    )
}

export const BtnSubmit = styled.button`
    display: flex;
    flex-direction: column;
    width: 260px;
    height: 60px;
    border: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
    background-color: var(--Rosado);
    color: var(--Dorado);

    font-size: 24px;
    font-weight: bold;
`