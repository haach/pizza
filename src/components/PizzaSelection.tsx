import React from "react";
import styled from "styled-components";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";

export const PizzaSelection: React.FC<Partial<
  StepWizardChildProps
>> = props => {
  return (
    <WizardStep>
      <PizzaSelectionText>
        PizzaSelection
        <button onClick={props.previousStep}>change address</button>
        <button onClick={props.nextStep}>see cart</button>
      </PizzaSelectionText>
    </WizardStep>
  );
};

const PizzaSelectionText = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;
