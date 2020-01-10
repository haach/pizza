import React, { useState } from "react";
import { WizardStep } from "./";
import {
  Button,
  Heading2,
  SplitView,
  ContentBox,
  Paragraph,
  ButtonBar,
  FormSection,
  Label
} from "./styledComponents";
import { StatefulWizardStepProps } from "../utils/sharedTypes";
import { Input } from "./FormComponents";

interface CheckoutFormState {
  cardNumber?: number;
  experationDate?: string;
  securityCode?: number;
}

export const Checkout: React.FC<StatefulWizardStepProps> = props => {
  const [formState, setFormState] = useState({
    cardNumber: undefined,
    experationDate: undefined,
    securityCode: undefined
  } as CheckoutFormState);
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const newState = { ...formState, [target.name]: target.value };
    setFormState(newState);
  };

  const checkout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("order completetd");
    // use hook for show loading state
    // start timeout
    // show success
    // start timeout
    // go back to step 0
  };
  return (
    <form onSubmit={checkout} onChange={handleChange}>
      <WizardStep>
        <SplitView>
          <ContentBox>
            <Heading2>Checkout</Heading2>
            <Paragraph>Please enter your credit card data.</Paragraph>
            <Label>Credit card number</Label>
            <FormSection>
              <Input
                name="cardNumber"
                required={true}
                type="text"
                placeholder="Credit card number"
              />
            </FormSection>
            <Label>Expiration date</Label>
            <FormSection>
              <Input
                placeholder="MM/YY"
                name="experationDate"
                value={formState.experationDate}
                required={true}
              />
            </FormSection>
            <Label>Security Code</Label>
            <FormSection>
              <Input
                placeholder="123"
                name="securityCode"
                value={formState.securityCode}
                required={true}
              />
            </FormSection>
          </ContentBox>
        </SplitView>
        <ButtonBar>
          <Button onClick={props.previousStep} type="button">
            edit order
          </Button>
          <Button appearance="primary" type="submit">
            place order for {props.totalPrice}€
          </Button>
        </ButtonBar>
      </WizardStep>
    </form>
  );
};
