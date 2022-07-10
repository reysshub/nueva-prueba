import {
  TituloGrande,
  TituloChico,
  LetraGrande,
  Espacio,
  TituloMedio,
} from "../components/styledcodigo";
import styled from "styled-components";
import BotonAppointment from "../components/BotonAppointment";
import homeheidy from "../img/homeheidy.png";
import heidy from "../img/heidyx.png";
import pareja from "../img/valor3.png";
import manos from "../img/valor2.png";
import familia from "../img/valor1.png";

const Home = () => {
  return (
    <>
      <Espacio />
      <Espacio />
      <TituloGrande>Welcome to Valor Counseling LLC</TituloGrande>
      <ContenedorHome>
        <HomeDivision1>
          <div>
            <img src={heidy} alt="foto heidy" />
            <LetraGrande>
              Heidy Castaneda
              <TituloChico>MA, RMHCI, RMFTI</TituloChico>
            </LetraGrande>
          </div>
          <LetraGrande>
            <TituloMedio>Valor Counseling LLC</TituloMedio>
            <TituloChico>Never Give Up</TituloChico>
            heidycastaneda@valorcounselingllc.com <br />
            www.valorcounselingllc.com <br />
            (407) 212-7508 <br />
            It is my pleasure to serve you <br />
            Es un gran placer servirte <br />
            English or Español
            <Espacio />
            <Espacio />
            <BotonAppointment />
          </LetraGrande>
        </HomeDivision1>

        <HomeDivision2>
          <LetraGrande>
            Heidy Castaneda is Master Degree <br />
            By Rollins College University <br />
            in Winter Park Florida
            <Espacio />
            Registered Mental Health Counselor Intern <br />
            Registered Marriage and Family Therapist Intern <br />
            By the State of Florida, USA.
          </LetraGrande>
          <Espacio />
          <Espacio />
          <img src={homeheidy} alt="home imagen" />
        </HomeDivision2>

        <HomeDivision3>
          <div>
            <img src={pareja} alt="home imagen" />
            <LetraGrande>
              Valor the strength of body and mind that enables a perso to
              respond to danger with firmness, fearlessness, courage, and
              bravery
            </LetraGrande>
          </div>
          <div>
            <img src={manos} className="App-logo" alt="home imagen" />
            <LetraGrande>
              Valor the strength of body and mind that enables a perso to
              respond to danger with firmness, fearlessness, courage, and
              bravery.
            </LetraGrande>
          </div>
          <div>
            <img src={familia} alt="home imagen" />
            <LetraGrande>
              Valor the strength of body and mind that enables a perso to
              respond to danger with firmness, fearlessness, courage, and
              bravery.
            </LetraGrande>
          </div>
        </HomeDivision3>
        <Espacio />

        <Espacio />
        <HomeDivision4>
          <TituloGrande></TituloGrande>
          <Espacio />
          <Parrafo>
            More than just a listening ear, we are here to help you discover a
            new perspective, identify the source of the challenges you're
            facing, and equip you with the resources you need to overcome.
            Beyond developing a healthier mind, we'll assess your overall
            wellbeing, including physical and emotional wellness. Together, we
            can work towards a healthier, happier you.
          </Parrafo>
          <Espacio />
          <BotonAppointment />
        </HomeDivision4>
      </ContenedorHome>
    </>
  );
};

export const ContenedorHome = styled.div`
  /* border: 1px dashed blue; */
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
      "cuatro";
  }
  @media screen and (min-width: 750px) {
    /* grid-template-columns: repeat(auto-fill, 1fr); */
    grid-template-columns: 1fr;
    grid-template-areas:
      "uno"
      "dos"
      "tres"
      "cuatro";
  }
  @media screen and (min-width: 1300px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "uno"
      "dos"
      "tres"
      "cuatro";
  }
`;

const HomeDivision1 = styled.div`
  grid-area: uno;
  @media screen and (min-width: 390px) {
    width: 350px;
    margin-bottom: 40px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    div {
      margin: auto;
    }

    img {
      box-shadow: 0 3px 13px 1px rgb(0 0 0 / 16%);
      padding: 2px;
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
  @media screen and (min-width: 750px) {
    width: 710px;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      padding: 2px;
      box-shadow: 0 3px 13px 1px rgb(0 0 0 / 16%);
    }
  }
  @media screen and (min-width: 1300px) {
    width: 1260px;
    padding: 30px;
    justify-content: space-around;

    div {
      padding: 5px;
    }

    img {
      box-shadow: 0 3px 13px 1px rgb(0 0 0 / 16%);
      width: 350px;
      height: 350px;
      border-radius: 50%;
    }
  }
`;

const HomeDivision2 = styled.div`
  @media screen and (min-width: 390px) {
    grid-area: dos;
    width: 350px;
    margin-bottom: 50px;

    img {
      width: 100%;
    }
  }
  @media screen and (min-width: 750px) {
    width: 710px;
    img {
      width: 100%;
    }
  }
  @media screen and (min-width: 1300px) {
    width: 1260px;

    img {
      width: 100%;
    }
  }
`;

const HomeDivision3 = styled.div`
  @media screen and (min-width: 390px) {
    grid-area: tres;
    margin-top: 20px;
    margin-bottom: 20px;
    height: auto;
    width: 350px;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    div {
      box-shadow: 0 3px 13px 1px rgb(0 0 0 / 16%);
      padding: 10px;
      border-radius: 10px;
      width: 80%;
    }

    img {
      width: 100%;
      border-radius: 50%;
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
      border-radius: 50%;
    }

    div {
      min-height: 420px;
      box-shadow: 0 3px 13px 1px rgb(0 0 0 / 16%);
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 1300px) {
    width: 1260px;
    margin-top: 60px;
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 100%;
      border-radius: 50%;
    }

    div {
      box-shadow: 0 3px 13px 1px rgb(0 0 0 / 16%);
      min-height: 560px;
      padding: 20px;
      border-radius: 10px;
    }
  }
`;
const HomeDivision4 = styled.div`
  grid-area: cuatro;
  @media screen and (min-width: 390px) {
    width: 350px;
    margin-top: 30px;
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
    line-height: 1.5;
    text-align: justify;
    color: darkblue;
    font-family: "Oswald";
    font-weight: 200;
    font-size: 25px;
    padding: 10px;
  }
  @media screen and (min-width: 750px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1300px) {
    font-size: 30px;
  }
`;

export default Home;
