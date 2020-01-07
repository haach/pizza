import React from "react";
import styled from "styled-components";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";

export const Cart: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <WizardStep>
      <CartText>
        Cart
        <button onClick={props.previousStep}>back</button>
        <button onClick={props.nextStep}>go to checkout</button>
      </CartText>
    </WizardStep>
  );
};

const CartText = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;
