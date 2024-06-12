import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Definimos la animación de pulsación
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

// Definimos el componente Estrella usando styled-components
export const Estrella = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #8C6E4A;
  position: relative;
  margin: 50px;
  animation: ${pulse} 2s infinite;

  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid #8C6E4A;
    position: absolute;
    top: 30px;
    left: -50px;
    transform: rotate(35deg);
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid #8C6E4A;
    position: absolute;
    top: 30px;
    left: -50px;
    transform: rotate(-35deg);
  }
`;
export const Puerta = styled.div`
  height: 50%;
  min-height: 500px;
  width: 60%;
  min-width: 350px;
  max-width: 450px;
  
  background-color: var(--Dorado);
  border-radius: 50% 50% 0% 0% / 35% 35% 10% 10%  ;
  
  overflow:hidden;

    @media (max-width: 800px) {
      width:100%;
      min-width: 100%;
      
    }

`;

export const Linea = styled.hr`
    width:100%;
    
    color:  var(--Dorado);
    border-color:  var(--Dorado);
    border-width: 5px; /* Ajusta el grosor del borde */
    
    border-style:dashed;
`

export const ContenedorImgCompromisos = styled.div`
    border-radius: 0% 55% 0% 0% / 25% 29% 25% 25%;
    height: calc(100% );
    width:100%;

    @media (max-width: 800px) {
        height: 400px;
        border-radius: 0% 25% 0% 0% / 25% 29% 25% 25%;
        background-position: center;
    }
    overflow: hidden;
    background-color: var(--Dorado);
`
export const PuertaSeccionContacto = styled.div`
  height: 70%;
  min-height: 500px;
  width: 80%;
  min-width: 350px;
  max-width: 700px;
  padding: 30px 10px;
  margin-bottom: 80px;
  background-color: var(--Blanco2);
  border-radius: 50% 50% 0% 0% / 60% 60% 10% 10%  ;
  overflow:hidden;
  @media (max-width: 800px) {
    border-radius: 50% 50% 0% 0% / 40% 40% 10% 10%  ;
      
    }

    @media (max-width: 600px) {
      width:100%;
      min-width: 100%;
      
    }
`