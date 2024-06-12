import React from "react";
import styled from "styled-components";
import { ContenedorPrincipal } from "../../../ComponentesPrincipales/Displays";
import { Field, Formik } from "formik";
import { ContenedorForm, ContenedorInput, TxtTitular, InputFile, InputFileMultiple, InputTextArea } from "./ComponentesAgregarDatos";

// Styled component for the `ContenedorAgregarDatos` container
const StyledContenedorAgregarDatos = styled(ContenedorPrincipal)`
  background-color: var(--Rosado);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
`;
const ContenedorInputNumeros = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`
export const AgregarDatos = () => {
  return (
    <Formik
      initialValues={{ nombre: "" }} // Set initial values for the form
      onSubmit={(values) => {
        console.log(values);
        // Implement logic to send data to the server (e.g., using fetch or an API library)
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => ( // Destructure Formik props
        <StyledContenedorAgregarDatos>
          <ContenedorForm>
                <TxtTitular>  Agrega un nuevo item </TxtTitular>
                <ContenedorInput txt='Nombre del Producto' type="text" placeholder='Ingresa el nombre del producto'  name='nombre' />
                <InputTextArea txt='Descripción del Producto'  placeholder='Ingresa la descripción del producto'  name='descripción' />
                <ContenedorInputNumeros>
                    <ContenedorInput dual txt='Precio' type="number" placeholder='Precio'  name='precio' />
                    <ContenedorInput dual txt='Cantidad' type="number" placeholder='Cantidad del producto'  name='cantidad' />
                </ContenedorInputNumeros>
   
                <InputFile name='hola' />
                <InputFileMultiple name='2' />
          </ContenedorForm>
        </StyledContenedorAgregarDatos>
      )}
    </Formik>
  );
};