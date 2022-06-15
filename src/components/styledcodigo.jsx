import React from "react";
import styled from "styled-components";

const CardCodigo = () => {
  return <></>;
};

export const TarjetaBlanca = styled.div`
  @media screen and (min-width: 390px) {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    background-color: white;
    border-radius: 10px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    width: 95%;
    height: auto;
  }
  @media screen and (min-width: 750px) {
    width: 97%;
  }
`;
// TITULOS DISPONIBLES
export const TituloGrande = styled.h2`
  @media screen and (min-width: 390px) {
    font-family: "Oswald";
    text-align: center;
    font-size: 32px;
    color: darkblue;
  }
  @media screen and (min-width: 750px) {
    font-size: 40px;
  }
`;
export const TituloMedio = styled.h2`
  @media screen and (min-width: 390px) {
    font-family: "Oswald";
    font-weight: 600;
    text-align: center;
    font-size: 20px;
    color: darkblue;
  }
  @media screen and (min-width: 750px) {
    font-size: 33px;
  }
`;
export const TituloChico = styled.h2`
  @media screen and (min-width: 390px) {
    font-family: "Oswald";
    font-weight: 400;
    text-align: center;
    font-size: 12px;
    color: darkblue;
  }
  @media screen and (min-width: 750px) {
    font-size: 23px;
  }
`;
export const TituloLeft = styled.h2`
  @media screen and (min-width: 390px) {
    font-family: "Oswald";
    text-align: left;
    font-size: 25px;
    color: darkred;
  }
  @media screen and (min-width: 750px) {
    font-size: 33px;
    padding-left: 30px;
  }
`;
// PARRAFOS DISPONIBLES
export const LetraGrande = styled.p`
  @media screen and (min-width: 390px) {
    font-family: "Oswald";
    color: darkblue;
    font-size: 17px;
    text-align: center;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: auto;
  }
  @media screen and (min-width: 750px) {
    font-size: 25px;
  }
`;
export const LetraChica = styled.p`
  @media screen and (min-width: 390px) {
    font-family: "Oswald";
    color: darkblue;
    font-size: 14px;
    text-align: center;
    padding: 10px;

    /* display:flex;
  align-items:center; */
  }
  @media screen and (min-width: 750px) {
    font-size: 20px;
  }
`;

// IMAGENES CODIGOS
export const ImagenSombra = styled.div`
  img {
    box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    margin-top: 10px;
    width: 100%;
  }
`;
export const ImagenSombraDos = styled.div`
  img {
    box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
  }
`;
export const ImagenGrande = styled.div`
  @media screen and (min-width: 390px) {
    img {
      border-radius: 10px;
      margin-top: 5px;
      width: 100%;
    }
  }
  @media screen and (min-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    img {
      width: 650px;
      margin: auto;
    }
  }
`;
export const ImagenMedia = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  img {
    border-radius: 10px;
    width: 70%;
  }
`;
export const ImagenLogo = styled.div`
  @media screen and (min-width: 390px) {
    padding: 2px;
    img {
      width: 70px;
    }
  }
  @media screen and (min-width: 750px) {
    img {
      width: 115px;
    }
  }
`;
export const FotoLogo = styled.div`
  text-align: center;

  img {
    width: 30%;
    border-radius: 50%;
  }
`;

// DIV BLANCO LARGO CON SOMBRA
export const BlancoSombra = styled.div`
  @media screen and (min-width: 390px) {
    box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    text-align: center;
    color: darkblue;
    margin-top: 12px;
    padding-left: 20px;
    padding-right: 20px;
    gap: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 750px) {
    font-size: 20px;
    justify-content: space-around;
  }
`;
// DIV BLANCO CORTO CON SOMBRA
export const BlancoSombraCorto = styled.div`
  @media screen and (min-width: 390px) {
    box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    text-align: center;
    color: darkblue;
    margin-top: 12px;
    margin: auto;
    padding: 6px;
    width: 30%;
    gap: 16px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  @media screen and (min-width: 750px) {
    font-size: 20px;
    width: 40%;
  }
`;

//BOTONES NORMAL Y GRANDE
export const CajaBotones = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Boton = styled.button`
  @media screen and (min-width: 390px) {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    background-color: white;
    border-radius: 10px;
    padding: 10px 15px;
    color: darkblue;
    font-size: 16px;
    height: 40px;
    margin: auto;
    width: 70%;
  }
  @media screen and (min-width: 750px) {
    padding: 20px 30px;
    font-size: 20px;
    height: 70px;
    margin: auto;
  }
`;
//MISCENALEAS LINEA ESPACIO BORDE CENTRO
export const Linea = styled.hr`
  color: lightblue;
  margin: auto;
  width: 80%;
`;
export const Espacio = styled.div`
  padding-bottom: 15px;
  @media screen and (min-width: 750px) {
    padding-bottom: 30px;
  }
`;
export const MarginLeft = styled.p`
  margin-left: 20px;
`;
export const BordeCentro = styled.div`
  border: 1px solid lightblue;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  margin: auto;
  padding: 8px;
  width: 90%;

  /* Texto links */
  a:hover {
    color: blue;
  }

  @media screen and (min-width: 750px) {
    font-size: 30px;
  }
`;
//  COLORES
export const ColorWhite = styled.h2`
  color: white;
`;
export const ColorRed = styled.h2`
  color: darkred;
`;
export const ColorRojo = styled.p`
  color: darkred;
`;
export const ColorBlue = styled.p`
  color: blue;
`;

//LINK QUE SUSTITUYE A LA a
export const ConexionWeb = styled.a`
  @media screen and (min-width: 390px) {
    /* text-decoration:none; */
    font-size: 15px;
  }
  @media screen and (min-width: 750px) {
    font-size: 22px;
  }
`;

export default CardCodigo;
