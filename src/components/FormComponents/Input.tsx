import React from "react";
import styled from "styled-components";
import { fonts, colors } from "../../utils/variables";
import { ErrorHolder } from "../styledComponents";

export const Input: React.FC<any> = props => {
  const hasError = props.meta.error && props.meta.touched;
  return (
    <div>
      <StyledInput {...props} />
      {hasError && <ErrorHolder>{props.meta.error}</ErrorHolder>}
    </div>
  );
};

const StyledInput = styled.input`
  ${fonts.Paragraph};
  color: ${colors.default.base};
  padding: 5px 8px;
  border: 1px solid ${colors.default.light};
  border-radius: 5px;
  flex-grow: 1;
  &:hover,
  &:focus {
    outline: none;
    border: 1px solid ${colors.primary.light};
  }
  &::placeholder {
    color: ${colors.default.light};
  }
`;
