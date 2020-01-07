import { SplitView } from "./styledUiComponents";
import { WizardStep } from "./";
import React from "react";
import styled from "styled-components";
import { StepWizardChildProps } from "react-step-wizard";

export const Welcome: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <WizardStep>
      <WelcomeText>
        <SplitView>
          MAKE YOUR OWN PIZZA
          <button onClick={props.nextStep}>order now!</button>
        </SplitView>
      </WelcomeText>
    </WizardStep>
  );
};

const WelcomeText = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;
