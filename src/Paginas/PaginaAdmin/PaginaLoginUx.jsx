import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ContenedorPrincipal } from "../../ComponentesPrincipales/Displays";
import { Field, Formik } from "formik";
import { PaginaContext } from "./Contexto";
import {
  ContenedorForm,
  ContenedorInput,
  TxtTitular,
  InputTextArea,
  CompErrores
} from "./Secciones/ComponentesAgregarDatos";
import { BtnSubmit } from "../../ComponentesPrincipales/Botones/BtnNavigate";
import { useNavigate } from "react-router-dom";

// Styled component for the `ContenedorAgregarDatos` container
const StyledContenedorAgregarDatos = styled(ContenedorPrincipal)`
  background-color: var(--Rosado);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: calc(100vh - 80px);
`;

export const PaginaLoginUx = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(PaginaContext);
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar la navegación

  const validate = (values) => {
    let errors = {};

    if (!values.usuario) {
      errors.usuario = "Debes ingresar usuario";
    }
    if (!values.password) {
      errors.password = "Debes ingresar contraseña";
    }

    return errors; // Debes retornar el objeto de errores
  };

  useEffect(() => {
    if (isSubmitting && user && user.userName && user.password) {
      console.log('user', user);
      navigate('/Administrador');
    }
  }, [user, isSubmitting, navigate]);

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    const errors = validate(values);
    if (Object.keys(errors).length === 0) {
      // Implementa la lógica para enviar los datos al servidor (por ejemplo, usando fetch o una biblioteca de API)
      console.log(values);
      setUser({ userName: values.usuario, password: values.password });
      setIsSubmitting(true); // Marcar el estado de envío como verdadero
    } else {
      setErrors(errors); // Setea los errores al estado de Formik
      setIsSubmitting(false); // Marcar el estado de envío como falso
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        usuario: "",
        password: ""
      }}
      validate={validate}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        isSubmitting
      }) => (
        <StyledContenedorAgregarDatos>
          <ContenedorForm onSubmit={handleSubmit}>
            <TxtTitular>Ingresa tus datos</TxtTitular>
            <ContenedorInput
              txt="Usuario"
              type="text"
              placeholder="Ingresa tu usuario"
              name="usuario"
              value={values.usuario}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ContenedorInput
              txt="Contraseña"
              type="password"
              placeholder="Ingresa la Contraseña"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {Object.keys(errors).length > 0 && <CompErrores errores={errors} />}
            <BtnSubmit type="submit" disabled={isSubmitting}>
              Subir
            </BtnSubmit>
          </ContenedorForm>
        </StyledContenedorAgregarDatos>
      )}
    </Formik>
  );
};
