import React from "react";
import styled from "styled-components";
import logo from "./../assets/pizza.svg";
import { Heading3 } from "./styledComponents";
import { colors } from "../utils/variables";

export const Header: React.FC = () => {
  return (
    <HeaderBar>
      <Flex>
        <Dark>Freestyle</Dark>
        <Red>Pizza</Red>
      </Flex>
      <Logo src={logo} alt="logo" />
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  padding: 10px 45px;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
const Red = styled(Heading3)`
  font-size: 26px;
  padding: 8px 8px 8px 0;
`;
const Dark = styled(Red)`
  color: ${colors.default.dark};
`;
