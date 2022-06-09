import React from "react";
import { TituloGrande, LetraGrande, Espacio } from "../components/styledcodigo";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Espacio />
      <TituloGrande>Home</TituloGrande>
      <Espacio />
      <LetraGrande>Haciendo la Pagina Home</LetraGrande>
      <Espacio />
    </>
  );
};

export const MargenLados = styled.p`
  margin: 20px;
`;

export default Home;
