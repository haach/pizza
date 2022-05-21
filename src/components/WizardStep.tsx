import * as React from 'react';
import { ComponentType } from 'react';
import styled from 'styled-components';
import { Children } from '../types/custom';

export const WizardStep: ComponentType<Children> = ({ children }) => (
  <StepContainer>{children}</StepContainer>
);

const StepContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
