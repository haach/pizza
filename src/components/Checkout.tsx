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
import { Field, Form } from "react-final-form";
import { Input } from "./FormComponents";
import { render } from "@testing-library/react";

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
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setFormState({ ...formState, [target.name]: target.value });
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
    <Form
      onSubmit={checkout}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          {console.log("formState", formState)}
          <WizardStep>
            <SplitView>
              <ContentBox>
                <Heading2>Checkout</Heading2>
                <Paragraph>Please enter your credit card data.</Paragraph>
                <Label>Credit card number</Label>
                <FormSection>
                  <Field
                    name="cardNumber"
                    required={true}
                    type="text"
                    placeholder="Credit card number"
                    component={Input}
                    onChange={handleChange}
                  />
                </FormSection>
                <Label>Expiration date</Label>
                <FormSection>
                  <Field
                    placeholder="MM/YY"
                    onChange={handleChange}
                    name="experationDate"
                    value={formState.experationDate}
                    required={true}
                    component={Input}
                  />
                </FormSection>
                <Label>Security Code</Label>
                <FormSection>
                  <Field
                    placeholder="123"
                    onChange={handleChange}
                    name="securityCode"
                    value={formState.securityCode}
                    required={true}
                    component={Input}
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
      )}
    />
  );
};
