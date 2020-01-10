import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/variables";
import checkmark from "../../assets/check.svg";

interface CheckboxProps {
  checked: boolean;
  name: string;
}

export const Checkbox: React.FC<any> = ({ checked, name }: CheckboxProps) => {
  return (
    <StyledCheckbox name={name} checked={checked}>
      {checked && <img src={checkmark} alt="checked" />}
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border: ${({ checked }: { checked: boolean; name: string }) =>
    checked
      ? `1px solid ${colors.primary.base}`
      : `1px solid ${colors.default.light}`};
  border-radius: 2px;
  display: inline-block;
  position: relative;
  background-color: ${({ checked }: { checked: boolean; name: string }) =>
    checked ? colors.primary.base : "transparent"};
  img {
    width: 10px;
    position: absolute;
    top: 4px;
    left: 2px;
  }
`;
