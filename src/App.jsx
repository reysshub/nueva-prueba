import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rutas from "./components/Rutas";

const App = () => {
  return (
    <>
      <BaseHeader />
      <Container>
        <Header />
        <Rutas />
        <Footer />
        <WhiteLinea />
      </Container>
    </>
  );
};

const BaseHeader = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  width: 390px;
  height: 170px;
  margin: auto;

  @media screen and (min-width: 750px) {
    width: 750px;
    height: 210px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    height: 240px;
  }
`;
const Container = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  font-family: "Oswald", sans-serif;
  width: 390px;
  height: auto;
  margin: auto;

  @media screen and (min-width: 750px) {
    width: 750px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
  }
`;

export const WhiteLinea = styled.hr`
  color: white;
  height: 3px;
  margin: auto;
  width: 100%;
`;

export default App;
