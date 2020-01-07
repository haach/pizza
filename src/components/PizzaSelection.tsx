import React from "react";
import styled from "styled-components";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import { Button } from "./styledComponents";

export const PizzaSelection: React.FC<Partial<
  StepWizardChildProps
>> = props => {
  return (
    <WizardStep>
      <PizzaSelectionText>
        PizzaSelection
        <Button onClick={props.previousStep}>change address</Button>
        <Button onClick={props.nextStep} appearance="primary">
          see cart
        </Button>
      </PizzaSelectionText>
    </WizardStep>
  );
};

const PizzaSelectionText = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;
