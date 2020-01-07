import React from "react";
import styled from "styled-components";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import { Button } from "./styledComponents";

export const AddressInput: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <WizardStep>
      <AddressInputText>
        AddressInput
        <Button onClick={props.previousStep}>back</Button>
        <Button onClick={props.nextStep} appearance="primary">
          create pizza
        </Button>
      </AddressInputText>
    </WizardStep>
  );
};

const AddressInputText = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;
