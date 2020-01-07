import styled, { css } from "styled-components";
import { colors, fonts } from "../utils/variables";

// =============== UI ELEMENTS ================
export const Button = styled.button`
  ${fonts.Button};
  border-radius: 30px;
  padding: 15px 25px;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid ${colors.default.light};
  background-color: ${colors.default.lightest};
  color: ${colors.default.base};
  opacity: 1;
  transition: all 0.2s ease-in-out;
  margin: 0 25px 15px 0;

  ${({ appearance }: { appearance?: string }) =>
    appearance &&
    appearance === "primary" &&
    css`
      border-color: ${colors.primary.base};
      background-color: ${colors.primary.base};
      color: ${colors.primary.contrast};
    `}

  &:hover,
  &:focus {
    outline: none;
    opacity: 0.9;
  }
`;

// =============== TYPOGRAPHY =================
export const Heading1 = styled.h1`
  ${fonts.Heading1};
  text-transform: uppercase;
  color: ${colors.primary.base};
  margin: 0 0 30px 0;
`;
export const Heading2 = styled.h1`
  ${fonts.Heading2};
  color: ${colors.default.dark};
  margin: 0 0 30px 0;
`;
export const Paragraph = styled.h1`
  ${fonts.Paragraph};
  color: ${colors.default.base};
  margin: 0 0 30px 0;
  max-width: 400px;
`;
export const Lead = styled.p`
  ${fonts.Lead};
  text-transform: uppercase;
  color: ${colors.primary.base};
  margin: 0;
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
