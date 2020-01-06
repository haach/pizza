import React from "react";
import styled from "styled-components";
import { Header } from "./components";

const App: React.FC = () => {
  return (
    <Card>
      <Header />
    </Card>
  );
};

export default App;

const Card = styled.div`
  width: 70vw;
  height: 80vh;
  margin: 10vh 15vw;
  border-radius: 5px;
  -webkit-box-shadow: 0px 5px 45px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 5px 45px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 5px 45px 0px rgba(204, 204, 204, 1);
`;
