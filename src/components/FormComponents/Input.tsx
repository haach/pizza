import React from "react";
import styled from "styled-components";
import { fonts, colors } from "../../utils/variables";

export const Input: React.FC<any> = props => <StyledInput {...props} />;

const StyledInput = styled.input`
  ${fonts.Paragraph};
  color: ${colors.default.base};
  padding: 5px 8px;
  border: 1px solid ${colors.default.light};
  border-radius: 5px;

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid ${colors.primary.light};
  }
  &::placeholder {
    color: ${colors.default.light};
  }
`;
