import React, { useState } from "react";
import styled from "styled-components";
import { ContenedorPrincipal } from "../../../ComponentesPrincipales/Displays";
import { Field, Formik } from "formik";
import { ContenedorForm, ContenedorInput, TxtTitular, InputFile, InputFileMultiple, InputTextArea, CompErrores } from "./ComponentesAgregarDatos";
import { BtnSubmit } from "../../../ComponentesPrincipales/Botones/BtnNavigate";

// Styled component for the `ContenedorAgregarDatos` container
const StyledContenedorAgregarDatos = styled(ContenedorPrincipal)`
  background-color: var(--Rosado);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: auto;
`;

const ContenedorInputNumeros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const AgregarDatos = () => {
  const validate = values => {
    const errors = {};
    
    if (!values.titulo) {
      errors.titulo = 'Debes ingresar el titulo del producto';
    } 
    if (!values.descripcion) {
      errors.descripcion = 'Debes agregar la descripción del producto';
    } 
    if (!values.precio) {
      errors.precio = 'Debes agregar el precio del producto';
    } 
    if (!values.cantidad) {
      errors.cantidad = 'Debes agregar la cantidad productos';
    } 
    if (!values.imgPrincipal) {
      errors.imgPrincipal = 'Debes agregar una imagen principal del producto';
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    const errors = validate(values);
    if (Object.keys(errors).length === 0) {
      // Implementa la lógica para enviar los datos al servidor (por ejemplo, usando fetch o una biblioteca de API)
      console.log(values);
    } else {
      setErrors(errors);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        titulo: "",
        descripcion: "",
        precio: "",
        cantidad: "",
        imgPrincipal: "",
        ImgSecundarias: []
      }}
      validate={validate}
      onSubmit={handleSubmit}
      validateOnBlur={false} 
      validateOnChange={false} 
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors, isSubmitting }) => (
        <StyledContenedorAgregarDatos>
          <ContenedorForm onSubmit={handleSubmit}>
            <TxtTitular>Agrega un nuevo item</TxtTitular>
            <ContenedorInput
              txt="Nombre del Producto"
              type="text"
              placeholder="Ingresa el nombre del producto"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <InputTextArea
              txt="Descripción del Producto"
              placeholder="Ingresa la descripción del producto"
              name="descripcion"
              value={values.descripcion}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ContenedorInputNumeros>
              <ContenedorInput
                dual
                txt="Precio"
                type="number"
                placeholder="Precio"
                name="precio"
                value={values.precio}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ContenedorInput
                dual
                txt="Cantidad"
                type="number"
                placeholder="Cantidad del producto"
                name="cantidad"
                value={values.cantidad}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ContenedorInputNumeros>
            <InputFile name="imgPrincipal" value={values.imgPrincipal} onChange={handleChange} onBlur={handleBlur} />
            <InputFileMultiple name="ImgSecundarias" value={values.ImgSecundarias} onChange={handleChange} onBlur={handleBlur} />
            {Object.keys(errors).length > 0 ? <CompErrores errores={errors} /> : null}
            <BtnSubmit type="submit" disabled={isSubmitting}>
              Subir
            </BtnSubmit>
          </ContenedorForm>
        </StyledContenedorAgregarDatos>
      )}
    </Formik>
  );
};
