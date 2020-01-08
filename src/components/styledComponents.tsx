import styled, { css } from "styled-components";
import { colors, fonts } from "../utils/variables";

// =============== UI ELEMENTS ================
export const Button = styled.button`
  ${fonts.Button};
  border-radius: 30px;
  padding: 15px 25px;
  text-transform: uppercase;
  cursor: pointer;
  border: 0 solid;
  background-color: ${colors.default.lightest};
  color: ${colors.default.base};
  opacity: 1;
  transition: all 0.2s ease-in-out;
  margin: 0 25px 15px 0;

  ${({ appearance }: { appearance?: string }) =>
    appearance &&
    appearance === "primary" &&
    css`
      background-color: ${colors.primary.base};
      color: ${colors.primary.contrast};
    `}

  &:hover,
  &:focus {
    outline: none;
    opacity: 0.9;
  }
`;

export const FormSection = styled.div`
  display: flex;
  > * {
    margin-bottom: 20px;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

// =============== TYPOGRAPHY =================
export const Heading1 = styled.h1`
  ${fonts.Heading1};
  text-transform: uppercase;
  color: ${colors.primary.base};
  margin: 0 0 30px 0;
`;
export const Heading2 = styled.h2`
  ${fonts.Heading2};
  color: ${colors.default.dark};
  margin: 0 0 30px 0;
`;
export const Heading3 = styled.h3`
  ${fonts.Heading3};
  text-transform: uppercase;
  color: ${colors.primary.base};
  margin: 0;
`;
export const Paragraph = styled.p`
  ${fonts.Paragraph};
  color: ${colors.default.base};
  margin: 0 0 30px 0;
  max-width: 400px;
`;
export const Bold = styled.span`
  ${fonts.Paragraph};
  color: ${colors.default.dark};
  font-weight: 600;
`;
export const Lead = styled.p`
  ${fonts.Lead};
  color: ${colors.primary.base};
  text-transform: uppercase;
  margin: 0;
`;
export const Label = styled.p`
  ${fonts.Paragraph};
  font-size: 80%;
  color: ${colors.default.base};
  margin: 0 0 4px 0;
`;

export const ErrorHolder = styled.p`
  ${fonts.Helper};
  color: ${colors.error};
  margin: 2px 0 0 0;

  position: absolute;
`;

// ================= LAYOUT ===================
export const SplitView = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: ${({ centered }: { centered?: boolean }) =>
    centered ? "center" : "flex-start"};
  > * {
    width: 50%;
  }
`;
export const ContentBox = styled.div`
  padding: 25px 45px;
`;
