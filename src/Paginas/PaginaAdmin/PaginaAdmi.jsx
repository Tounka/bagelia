import React from "react";
import styled from "styled-components";
import { PaginaAdmiUx } from "./PaginaAdmiUx";
import { DisplayAdmi } from "../../ComponentesPrincipales/Displays";


export const PaginaAdmi = () => {
  return (

      <DisplayAdmi>
        <PaginaAdmiUx />
      </DisplayAdmi>
  );
};