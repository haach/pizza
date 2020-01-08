import React from "react";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import {
  Button,
  SplitView,
  ContentBox,
  Heading2,
  Paragraph
} from "./styledComponents";

export const Cart: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <WizardStep>
      <SplitView>
        <ContentBox>
          <Heading2>Your order</Heading2>
          <Paragraph>
            This is your current selection of pizza. <br />
            You can either add more pizza to your cart or go to checkout.
          </Paragraph>
          <Button onClick={props.previousStep}>more pizza</Button>
          <Button onClick={props.nextStep} appearance="primary">
            checkout
          </Button>
        </ContentBox>
        <div>Pizza creator here</div>
      </SplitView>
    </WizardStep>
  );
};
