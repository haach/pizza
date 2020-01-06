import React from "react";
import styled from "styled-components";
import logo from "./../assets/logo.svg";

export const Header: React.FC = () => {
  return (
    <HeaderBar>
      <Logo src={logo} alt="logo" />
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
