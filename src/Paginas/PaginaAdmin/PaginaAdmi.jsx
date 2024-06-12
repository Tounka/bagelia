import React from "react";
import styled from "styled-components";
import { PaginaAdmiUx } from "./PaginaAdmiUx";
import { DisplayAdmi } from "../../ComponentesPrincipales/Displays";
import { PaginaProvider } from "./Contexto"; // Import context

export const PaginaAdmi = () => {
  return (
    <PaginaProvider> {/* Wrap PaginaAdmi with the provider */}
      <DisplayAdmi>
        <PaginaAdmiUx />
      </DisplayAdmi>
    </PaginaProvider>
  );
};