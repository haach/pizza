import React from "react";
import styled from "styled-components";
import { fonts, colors } from "../../utils/variables";

export const Input: React.FC<any> = props => (
  <InputContainer>
    <StyledInput {...props} />
  </InputContainer>
);
const InputContainer = styled.div`
  flex: 1;
  flex-grow: 1;
`;
const StyledInput = styled.input`
  ${fonts.Paragraph};
  color: ${colors.default.base};
  padding: 5px 8px;
  border: 1px solid ${colors.default.light};
  border-radius: 5px;
  width: 100%;
  &:hover,
  &:focus {
    outline: none;
    border: 1px solid ${colors.default.dark};
  }
  &::placeholder {
    color: ${colors.default.light};
  }
`;
