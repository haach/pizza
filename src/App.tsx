import React from "react";
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

const App: React.FC = () => {
  return (
    <Card>
      <Header />
      <StepWizard isHashEnabled={true}>
        <Welcome />
        <AddressInput />
        <PizzaSelection />
        <Cart />
        <Checkout />
      </StepWizard>
    </Card>
  );
};

export default App;

const Card = styled.div`
  width: 80vw;
  height: 80vh;
  margin: 10vh 10vw;
  border-radius: 5px;
  -webkit-box-shadow: 0px 5px 45px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 5px 45px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 5px 45px 0px rgba(204, 204, 204, 1);
`;
