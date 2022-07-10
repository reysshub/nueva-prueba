import styled from "styled-components";
import { ConexionWeb } from "../components/styledcodigo";

const BotonAppointment = () => {
  return (
    <BotonDiv>
      <BotonCita>
        <ConexionWeb href="https://www.valorcounselingllc.com/request/">
          Appointment now
        </ConexionWeb>
      </BotonCita>
    </BotonDiv>
  );
};

export const BotonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BotonCita = styled.div`
  a {
    /* text-decoration: none; */
  }

  :hover {
    background-color: lightblue;
    border: 1px solid gray;
    font-weight: 400;
  }

  @media screen and (min-width: 390px) {
    box-shadow: 0 3px 13px 1px rgb(0 0 0 / 16%);
    background-color: white;
    border: 1px solid lightblue;
    color: darkblue;
    max-width: 200px;
    min-width: 140px;
    padding: 5px;
    border-radius: 10px;
    font-family: "Oswald";
    font-weight: 200;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 750px) {
    max-width: 200px;
    min-width: 170px;
    padding: 5px;
  }
  @media screen and (min-width: 1300px) {
    max-width: 200px;
    min-width: 170px;
    padding: 5px;
  }
`;

export default BotonAppointment;
