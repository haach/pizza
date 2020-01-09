import React from "react";
import { WizardStep } from "./";
import {
  Button,
  Heading2,
  SplitView,
  ContentBox,
  Paragraph
} from "./styledComponents";
import { StatefulWizardStepProps } from "../utils/sharedTypes";

export const Checkout: React.FC<StatefulWizardStepProps> = props => {
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
      <SplitView>
        <ContentBox>
          <Heading2>Checkout</Heading2>
          <Paragraph>
            Please enter your credit card data and <br />
            You can either add more pizza to your cart or go to checkout.
          </Paragraph>
          <Button onClick={props.previousStep}>edit order</Button>
          <Button onClick={() => checkout()} appearance="primary">
            order now
          </Button>
        </ContentBox>
        <div>Pizza creator here</div>
      </SplitView>
    </WizardStep>
  );
};
