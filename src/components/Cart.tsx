import React from "react";
import styled from "styled-components";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import { Button } from "./styledComponents";

export const Cart: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <WizardStep>
      <CartText>
        Cart
        <Button onClick={props.previousStep}>back</Button>
        <Button onClick={props.nextStep} appearance="primary">
          go to checkout
        </Button>
      </CartText>
    </WizardStep>
  );
};

const CartText = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;
