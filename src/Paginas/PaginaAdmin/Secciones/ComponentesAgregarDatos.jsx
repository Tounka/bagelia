import React, { useEffect, useState } from 'react';
import imageCompression from 'browser-image-compression';
import { useFormikContext, Form, Field} from 'formik';
import styled, { keyframes } from 'styled-components';

// Estilos para el componente (adaptar según tu preferencia)
export const TxtTitular = styled.p`
  font-family: FuenteEspecial;
  font-size: 46px;
  text-align: center;
  color: var(--Blanco);
  font-weight: bold;
  margin: 0 0 10px 0;
`;

export const ContenedorForm = styled(Form)`
  width: 80%;
  max-width: 800px;
  padding: 20px;
  background-color: var(--Dorado);
  max-height: auto;
  display: flex;
  flex-direction: column;
    justify-content:center;
    align-items:center;
  gap: 20px;
  border-radius: 30px 0 30px 0;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ContenedorInputStyled = styled.div`
  height: 80px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  overflow: hidden;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const LabelInput = styled.label`
  width: 240px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  background-color: var(--Rosado);
  color: var(--Dorado);
  max-width: ${(props) => (props.dual ? '40%' : '')};
  font-size: ${(props) => (props.dual ? '16px' : '')};

  @media (max-width: 700px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    font-size: ${(props) => (props.dual ? '24px' : '')};
  }
`;

const FieldInput = styled(Field)`
  border: none;
  width: 100%;
  height: 100%;
  outline: none;

  @media (max-width: 480px) {
    min-height: 40px;
  }
`;

export const ContenedorInput = ({ name, type = 'text', placeholder, txt, dual }) => {
  return (
    <ContenedorInputStyled>
      <LabelInput htmlFor={name} dual={dual}>{txt}</LabelInput>
      <FieldInput
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </ContenedorInputStyled>
  );
};

const FieldFileStyled = styled.input`
  cursor: pointer;
  background-color: var(--BlancoSecundario);
  padding: 0;
  width: 100%;

  &::-webkit-file-upload-button {
    background-color: var(--Blanco);
    color: var (--AzulPrincipal);
    border: none;
    height: 100%;
    width: 50%;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
  }

  &::file-selector-button {
    background-color: var(--Blanco);
    color: var(--Dorado);
    width: 50%;
    border: none;
    height: 100%;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
  }
`;

const ContenedorInputFile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--Blanco);
`;

const LabelInputFile = styled(LabelInput)`
  width: 100%;
`;

export const InputFile = ({ name }) => {
  const { setFieldValue } = useFormikContext();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        let fileToUpload = file;
        if (file.size > 1048576) {
          // 1MB en bytes
          fileToUpload = await imageCompression(file, options);
          console.log('Original file size:', file.size);
          console.log('Compressed file size:', fileToUpload.size);
        } else {
          console.log('File size is acceptable:', file.size);
        }

        // Usar setFieldValue de Formik para actualizar el valor del campo
        setFieldValue(name, fileToUpload);
      } catch (error) {
        console.error('Error compressing the image:', error);
      }
    }
  };

  return (
    <ContenedorInputFile>
      <LabelInputFile htmlFor={name}>Imagen principal</LabelInputFile>
      <FieldFileStyled
        id={name}
        type="file"
        name={name}
        accept="image/*"
        onChange={handleFileChange}
      />
    </ContenedorInputFile>
  );
};

export const InputFileMultiple = ({ name }) => {
  const { setFieldValue } = useFormikContext();

  const handleMultipleFileChange = async (event) => {
    const files = Array.from(event.target.files);

    const compressedFiles = await Promise.all(
      files.map(async (file) => {
        if (file.size > 1048576) {
          // 1MB en bytes
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          };
          return await imageCompression(file, options);
        }
        return file;
      })
    );

    setFieldValue(name, compressedFiles);
  };

  return (
    <ContenedorInputFile>
      <LabelInputFile htmlFor={name}>Demás imágenes</LabelInputFile>
      <FieldFileStyled
        id={name}
        type="file"
        name={name}
        accept="image/*"
        multiple
        onChange={handleMultipleFileChange}
      />
    </ContenedorInputFile>
  );
};

const FieldTextAreaStyled = styled.textarea`
  padding: 0;
  background-color: var(--Blanco);
  height: 120px;
  width: 100%;
  box-sizing: border-box ;
  padding-left: 10px;
  resize: vertical;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  outline: none;
  border: none;

  &::placeholder {
    color: var(--AzulPrincipal);
    opacity: 1;
  }
`;

const ContenedorInputTextArea = styled(ContenedorInputStyled)`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const InputTextArea = ({ name, txt, placeholder }) => {
  return (
    <ContenedorInputTextArea>
      <LabelInputFile htmlFor={name}>{txt}</LabelInputFile>
      <Field
        as={FieldTextAreaStyled}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </ContenedorInputTextArea>
  );
};

const shakeAnimation = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-5px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

const MensajeErrorWrapper = styled.div`
  color: white;
  background-color: brown;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  animation: ${shakeAnimation} 0.5s ease-in-out;
`;

export const CompErrores = ({ errores }) => {
  const [erroresArray, setErroresArray] = useState([]);

  useEffect(() => {
    const newErroresArray = Object.values(errores);
    setErroresArray(newErroresArray);
  }, [errores]);

  // Usamos una clave única basada en la longitud del array de errores
  const key = erroresArray.length > 0 ? erroresArray.length : 'default';

  return (
    <MensajeErrorWrapper key={key}>
      {erroresArray.length > 0 && erroresArray[0]}
    </MensajeErrorWrapper>
  );
};