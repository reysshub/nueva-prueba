import React from "react";
import { TituloGrande, LetraGrande, Espacio } from "../components/styledcodigo";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Espacio />
      <TituloGrande>Home</TituloGrande>
      <Espacio />
      <LetraGrande>
        <MargenLados>
          Cuerpo de la pagina Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Aliquid sint iusto molestiae quas voluptatibus optio
          ipsum. Ipsum dolore corrupti soluta eius inventore enim illum odit
          porro mollitia nam eligendi rem delectus magni eveniet eum recusandae
          dolorem asperiores officia, assumenda facere deleniti iste temporibus
          labore. Laboriosam praesentium nulla deserunt sit similique, amet vel
          atque est obcaecati voluptatem, ducimus labore quidem eum! Nostrum
          quis eaque ipsa! Eos odit non eum a consequatur fugit, facere
          consectetur adipisci cum quibusdam nemo reiciendis autem impedit unde
          quia numquam. Veniam placeat illum incidunt optio? Repudiandae
          blanditiis inventore dolorem dignissimos quae, natus impedit
          voluptate! Eius, itaque neque Cuerpo de la pagina Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Aliquid sint iusto molestiae
          quas voluptatibus optio ipsum. Ipsum dolore corrupti soluta eius
          inventore enim illum odit porro mollitia nam eligendi rem delectus
          magni eveniet eum recusandae dolorem asperiores officia, assumenda
          facere deleniti iste temporibus labore. Laboriosam praesentium nulla
          deserunt sit similique, amet vel atque est obcaecati voluptatem,
          ducimus labore quidem eum! Nostrum quis eaque ipsa! Eos odit non eum a
          consequatur fugit, facere consectetur adipisci cum quibusdam nemo
          reiciendis autem impedit unde quia numquam. Veniam placeat illum
          incidunt optio? Repudiandae blanditiis inventore dolorem dignissimos
          quae, natus impedit voluptate! Eius, itaque neque Cuerpo de la pagina
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sint
          iusto molestiae quas voluptatibus optio ipsum. Ipsum dolore corrupti
          soluta eius inventore enim illum odit porro mollitia nam eligendi rem
          delectus magni eveniet eum recusandae dolorem asperiores officia,
          assumenda facere deleniti iste temporibus labore. Laboriosam
          praesentium nulla deserunt sit similique, amet vel atque est obcaecati
          voluptatem, ducimus labore quidem eum! Nostrum quis eaque ipsa! Eos
          odit non eum a consequatur fugit, facere consectetur adipisci cum
          quibusdam nemo reiciendis autem impedit unde quia numquam. Veniam
          placeat illum incidunt optio? Repudiandae blanditiis inventore dolorem
          dignissimos quae, natus impedit voluptate! Eius, itaque neque
        </MargenLados>
      </LetraGrande>
      <Espacio />
    </>
  );
};

export const MargenLados = styled.p`
  margin: 20px;
`;

export default Home;
