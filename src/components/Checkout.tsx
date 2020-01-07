import React from "react";
import styled from "styled-components";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import { Button } from "./styledComponents";

export const Checkout: React.FC<Partial<StepWizardChildProps>> = props => {
  const checkout = () => {
    console.log("order completetd");
    // use hook for show loading state
    // start timeout
    // show success
    // start timeout
    // go back to step 0
  };
  return (
    <WizardStep>
      <CheckoutText>
        Checkout
        <Button onClick={props.previousStep}>change selection</Button>
        <Button onClick={() => checkout()} appearance="primary">
          order now
        </Button>
      </CheckoutText>
    </WizardStep>
  );
};

const CheckoutText = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #efefef;
`;
