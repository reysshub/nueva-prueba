import React from "react";
import { TituloGrande, LetraGrande, Espacio } from "../components/styledcodigo";
import styled from "styled-components";
import homeheidy from "../img/homeheidy.png";
import primero from "../img/dorys.png";
import segundo from "../img/veronica.png";
import tercero from "../img/heiden.png";
import cuarto from "../img/teffy.png";

const Home = () => {
  return (
    <>
      <Espacio />
      <TituloGrande>Home</TituloGrande>

      <ContenedorHome>
        <HomeDivision1>
          <img src={primero} alt="home imagen" />
          <img src={segundo} alt="home imagen" />
          <img src={tercero} alt="home imagen" />
          <img src={cuarto} alt="home imagen" />
        </HomeDivision1>

        <HomeDivision2>
          <TituloGrande>Historia</TituloGrande>
          <Parrafo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            laudantium veniam doloremque ratione dolore minima ad at tempore
            voluptate nulla similique nostrum magnam quia, hic nihil illum
            reiciendis. Ullam sint, porro officia fuga nihil at obcaecati iure?
            Placeat incidunt molestias perferendis similique? Fuga pariatur
            ullam sequi, quae neque eaque amet!
          </Parrafo>
        </HomeDivision2>

        <HomeDivision3>
          <TituloGrande></TituloGrande>
          <img src={homeheidy} alt="home imagen" />
        </HomeDivision3>

        <HomeDivision4>
          <TituloGrande>Frases Celebres</TituloGrande>
          <Parrafo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            laudantium veniam doloremque ratione dolore minima ad at tempore
            voluptate nulla similique nostrum magnam quia, hic nihil illum
            reiciendis. Ullam sint, porro officia fuga nihil at obcaecati iure?
            Placeat incidunt molestias perferendis similique? Fuga pariatur
            ullam sequi, quae neque eaque amet!
          </Parrafo>
        </HomeDivision4>

        <HomeDivision5>
          <div>
            <img src={primero} alt="home imagen" />
            <LetraGrande>Dorys</LetraGrande>
          </div>
          <div>
            <img src={segundo} alt="home imagen" />
            <LetraGrande>Veronica</LetraGrande>
          </div>
          <div>
            <img src={tercero} alt="home imagen" />
            <LetraGrande>Heiden</LetraGrande>
          </div>
          <div>
            <img src={cuarto} alt="home imagen" />
            <LetraGrande>Teffy</LetraGrande>
          </div>
        </HomeDivision5>

        <HomeDivision6>
          <TituloGrande>Testimonio</TituloGrande>
          <Parrafo>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quia
            nulla veritatis modi voluptas, quo harum quibusdam sint minus nihil
            amet alias, recusandae provident iure excepturi impedit ad. Dolores
            dicta et labore officiis? Quo a tempore possimus omnis ex quibusdam,
            temporibus minima. Soluta quis dolore alias sit hic possimus velit
            earum deserunt odio cupiditate sed, itaque pariatur ab ea repellat.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quia
            nulla veritatis modi voluptas, quo harum quibusdam sint minus nihil
            amet alias, recusandae provident iure excepturi impedit ad. Dolores
            dicta et labore officiis? Quo a tempore possimus omnis ex quibusdam,
            temporibus minima.
          </Parrafo>
        </HomeDivision6>
      </ContenedorHome>
    </>
  );
};

export const ContenedorHome = styled.div`
  /* border: 1px solid blue; */
  @media screen and (min-width: 390px) {
    padding: 10px;
    margin: 10px;
    color: blue;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "uno"
      "dos"
      "tres"
      "cuatro"
      "cinco"
      "seis";
  }
  @media screen and (min-width: 750px) {
    /* grid-template-columns: repeat(auto-fill, 1fr); */
    grid-template-columns: 1fr;
    grid-template-areas:
      "uno"
      "dos"
      "tres"
      "cuatro"
      "cinco"
      "seis";
  }
  @media screen and (min-width: 1300px) {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas:
      "uno      uno       uno"
      "dos      tres      cuatro"
      "cinco    cinco     cinco"
      "seis     seis      seis";
  }
`;

const HomeDivision1 = styled.div`
  grid-area: uno;
  @media screen and (min-width: 390px) {
    width: 350px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;

    img {
      /* border: 1px solid blue; */
      padding: 5px;
      width: 22%;
      border-radius: 50%;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }
  @media screen and (min-width: 750px) {
    width: 710px;
    justify-content: space-around;
    align-items: center;

    img {
      width: 140px;
      border-radius: 50%;
      /* border: 1px solid darkblue; */
      padding: 10px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }
  @media screen and (min-width: 1300px) {
    width: 1260px;
    padding: 30px;
    justify-content: space-around;

    img {
      width: 240px;
      border-radius: 50%;
      border: 1px solid lightblue;
      padding: 10px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }
`;
const HomeDivision2 = styled.div`
  /* border: 1px solid blue; */
  @media screen and (min-width: 390px) {
    width: 350px;
    grid-area: dos;
    margin-bottom: 10px;
    margin-top: 20px;
    margin-right: 0px;

    @media screen and (min-width: 750px) {
      margin-right: 0px;
      width: 710px;
    }
    @media screen and (min-width: 1300px) {
      width: 260px;
      /* margin-right: 10px; */
    }
  }
`;
const HomeDivision3 = styled.div`
  /* border: 1px solid blue; */
  @media screen and (min-width: 390px) {
    grid-area: tres;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 350px;
    img {
      width: 100%;
    }
  }
  @media screen and (min-width: 750px) {
    margin-right: 0px;
    width: 710px;
    img {
      width: 100%;
    }
  }
  @media screen and (min-width: 1300px) {
    width: 680px;
    padding-top: 20px;
    padding-right: 10px;

    img {
      width: 100%;
    }
  }
`;
const HomeDivision4 = styled.div`
  /* border: 1px solid blue; */
  @media screen and (min-width: 390px) {
    grid-area: cuatro;
    width: 350px;
    margin-left: 0px;
    margin-top: 20px;

    @media screen and (min-width: 750px) {
      margin-left: 0px;
      width: 710px;
    }
    @media screen and (min-width: 1300px) {
      width: 260px;
      margin-left: 20px;
    }
  }
`;
const HomeDivision5 = styled.div`
  /* border: 1px solid blue; */
  @media screen and (min-width: 390px) {
    grid-area: cinco;
    height: 400px;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;

    img {
      width: 100%;
      border-radius: 10px;
    }

    div {
      width: 40%;
      border: 1px solid lightblue;
      padding: 8px;
      border-radius: 10px;
      margin-bottom: 20px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }
  @media screen and (min-width: 750px) {
    width: 710px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 20px;

    img {
      width: 100%;
      border-radius: 10px;
    }

    div {
      border: 1px solid lightblue;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }

  @media screen and (min-width: 1300px) {
    width: 1260px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 100%;
    }

    div {
      border: 1px solid lightblue;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }
`;
const HomeDivision6 = styled.div`
  /* border: 1px solid blue; */
  grid-area: seis;
  @media screen and (min-width: 390px) {
    width: 350px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 750px) {
    width: 710px;
  }
  @media screen and (min-width: 1300px) {
    width: 1260px;
  }
`;

export const Parrafo = styled.p`
  @media screen and (min-width: 390px) {
    text-align: justify;
    color: darkblue;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 19px;
    padding: 10px;
  }
  @media screen and (min-width: 750px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1300px) {
    font-size: 25px;
  }
`;

export default Home;
