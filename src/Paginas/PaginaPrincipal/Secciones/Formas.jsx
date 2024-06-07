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
      max-width: auto;
    }
`;

export const Linea = styled.hr`
    width:100%;
    
    color:  var(--Dorado);
    border-color:  var(--Dorado);
    border-width: 5px; /* Ajusta el grosor del borde */
    
    border-style:dashed;
`
