import React from "react";
import { WizardStep, CartList } from "./";
import {
  Button,
  SplitView,
  ContentBox,
  Heading2,
  Paragraph,
  ButtonBar
} from "./styledComponents";
import { StatefulWizardStepProps } from "../utils/sharedTypes";

export const Cart: React.FC<StatefulWizardStepProps> = props => {
  return (
    <WizardStep>
      <SplitView>
        <ContentBox>
          <Heading2>Your order</Heading2>
          <Paragraph>
            This is your current selection of pizza. <br />
            You can either add more pizza to your cart or go to checkout.
          </Paragraph>
        </ContentBox>
        {props.cartState && (
          <ContentBox scrollable={true}>
            <CartList
              cartState={props.cartState}
              totalPrice={props.totalPrice || 0}
              updateCartState={() =>
                props.updateCartState && props.updateCartState()
              }
            />
          </ContentBox>
        )}
      </SplitView>
      <ButtonBar>
        <Button onClick={props.previousStep}>more pizza</Button>
        {props.cartState && props.cartState.length > 0 && (
          <Button onClick={props.nextStep} appearance="primary">
            go to checkout
          </Button>
        )}
      </ButtonBar>
    </WizardStep>
  );
};
