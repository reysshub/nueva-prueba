import { TituloGrande, LetraGrande, Espacio } from "../components/styledcodigo";
import { ContenedorHome } from "./Home";
import styled from "styled-components";
import paisaje from "../img/paisaje.png";
import images from "../img/imagen.png";
import BotonAppointment from "../components/BotonAppointment";

const Rates = () => {
  return (
    <>
      <ContenedorHome>
        <Espacio />
        <Division1>
          <img src={paisaje} alt="paisaje imagen" />
          <Espacio />
          <Espacio />
          <TituloGrande>Services</TituloGrande>
          <TextoLimite>
            <LetraGrande>
              At Valor Counseling, therapy services, therapeutic methods, and
              intervention are tailored to each individual client, couple, and
              family to meet their unique needs.
            </LetraGrande>
          </TextoLimite>
          <Espacio />
          <Espacio />
          <TarjetaPrecios>
            <LetraGrande>
              <TituloGrande>Rates</TituloGrande>
              <Espacio />
              <Espacio />
              Individual session -- $95.00 <br />
              Couples session -- $145.00 <br />
              (2 or more members of the family) <br />
              Family session -- $195.00 <br />
              <Espacio />
              <Espacio />
              <b>Not accepting insurance at this time</b>
            </LetraGrande>
            <Espacio />
            <BotonAppointment />
            <Espacio />
          </TarjetaPrecios>
        </Division1>

        <ListaAreas>
          <Imagen>
            <img src={images} className="App-logo" alt="images" />
          </Imagen>
          <Espacio />
          <DobleLista>
            <LetraGrandex>
              <TituloGrande>Areas of Focus</TituloGrande>
              <Espacio />
              Trauma <br />
              Anxiety <br />
              Depression <br />
              Relationship Issues <br />
              Family Conflict <br />
              Grief / Bereavement <br />
              Stress Management <br />
              Conflict Resolution <br />
              Post Traumatic Stress Disorder <br />
              Mood Disorders <br />
              Bipolar Disorders <br />
              Mindfulness <br />
            </LetraGrandex>
            <LetraGrandex>
              <TituloGrande>Couples & Family Services</TituloGrande>
              <Espacio />
              The Gottman Method <br />
              Imago Relationship Therapy <br />
              Couple Power Therapy <br />
              Structural Family Therapy <br />
              Attachment-based Therapy <br />
              Pre-marital Counseling <br />
            </LetraGrandex>
          </DobleLista>
        </ListaAreas>
      </ContenedorHome>
    </>
  );
};

const Imagen = styled.div`
  @media screen and (min-width: 390px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Division1 = styled.div`
  grid-area: uno;
  @media screen and (min-width: 390px) {
    width: 350px;
    margin-bottom: 20px;

    div {
      margin: auto;
    }

    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  @media screen and (min-width: 750px) {
    width: 710px;
    gap: 20px;
  }
  @media screen and (min-width: 1300px) {
    width: 1260px;
    padding: 30px;

    div {
      padding: 5px;
    }
  }
`;
const ListaAreas = styled.div`
  grid-area: dos;
  @media screen and (min-width: 390px) {
    width: 350px;
    margin-bottom: 20px;

    div {
      margin: auto;
    }

    img {
      width: 50%;
      border-radius: 50%;
    }
  }
  @media screen and (min-width: 750px) {
    width: 710px;

    img {
      width: 40%;
    }
  }
  @media screen and (min-width: 1300px) {
    width: 1260px;
    padding: 30px;

    div {
      padding: 5px;
    }

    img {
      width: 30%;
    }
  }
`;

export const DobleLista = styled.div`
  @media screen and (min-width: 390px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  @media screen and (min-width: 750px) {
    justify-content: space-around;
  }
  @media screen and (min-width: 1300px) {
    justify-content: space-evenly;
  }
`;

const LetraGrandex = styled.p`
  border: 1px solid lightblue;
  border-radius: 10px;

  @media screen and (min-width: 390px) {
    min-width: 300px;
    text-align: left;
    color: darkblue;
    font-size: 20px;
    font-weight: 100;
    padding: 10px;
    padding-left: 30px;
    padding-bottom: 30px;
    padding-top: 30px;
  }
  @media screen and (min-width: 750px) {
    min-width: 320px;
    font-size: 22px;
  }
  @media screen and (min-width: 1300px) {
    min-width: 500px;
    font-size: 25px;
  }
`;

export const TarjetaPrecios = styled.div`
  @media screen and (min-width: 390px) {
    box-shadow: 0 3px 13px 1px rgb(0 0 0 / 16%);
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
    width: 70%;
  }
  @media screen and (min-width: 1300px) {
    width: 50%;
  }
`;

export const TextoLimite = styled.div`
  @media screen and (min-width: 390px) {
    width: 100%;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 750px) {
    width: 70%;
  }
  @media screen and (min-width: 1300px) {
    width: 50%;
    margin-bottom: 50px;
  }
`;

export default Rates;
