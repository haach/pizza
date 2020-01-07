import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import {
  AddressInput,
  Cart,
  Checkout,
  Header,
  PizzaSelection,
  Welcome
} from "./components";
import StepWizard from "react-step-wizard";
import { colors } from "./utils/variables";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>🍕 Pizza Challenge 🍕</title>
        <meta
          name="description"
          content="Let’s build a simple page to order a pizza using React.Helmet application"
        />
      </Helmet>
      <Triangle />
      <Card>
        <Header />
        <StepWizard className="stepWizard" isHashEnabled={true}>
          <Welcome />
          <AddressInput />
          <PizzaSelection />
          <Cart />
          <Checkout />
        </StepWizard>
      </Card>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10vh 10vw;
  position: relative;
`;
const Card = styled.div`
  z-index: 100;
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 10px 25px 55px 0px rgba(0, 0, 0, 0.3);

  /* NOT PRETTY BUT NEEDED TO OVERWRITE PLUGIN STYLES */
  .stepWizard {
    height: calc(100% - 64px);
  }
  .stepWizard > div,
  .stepWizard > div > div {
    height: 100%;
  }
`;
const Triangle = styled.div`
  z-index: -1;
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    ${colors.primary.lightest} 0%,
    #ed5656 100%
  );
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 110vw 110vw;
    border-color: transparent transparent transparent #fff;
  }
`;
