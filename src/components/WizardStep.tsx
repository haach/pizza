import React, { ReactNode } from "react";
import styled from "styled-components";

interface WizardStepProps {
  children?: ReactNode;
}
export const WizardStep: React.FC = ({ children }: WizardStepProps) =>
  children ? <StepContainer>{children}</StepContainer> : <div />;

const StepContainer = styled.div`
  width: 100%;
  height: 100%;
`;
