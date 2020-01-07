import React from "react";
import styled from "styled-components";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";

export const AddressInput: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <WizardStep>
      <AddressInputText>
        AddressInput
        <button onClick={props.nextStep}>create pizza</button>
      </AddressInputText>
    </WizardStep>
  );
};

const AddressInputText = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;
