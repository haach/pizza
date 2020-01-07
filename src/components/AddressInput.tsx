import React, { useState } from "react";
import styled from "styled-components";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import {
  Button,
  ContentBox,
  Heading2,
  Paragraph,
  Label,
  FormSection
} from "./styledComponents";
import { Form, Field } from "react-final-form";
import { Input } from "./FormComponents";

interface FormState {
  name?: string | undefined;
  address?: {
    streetName?: string | undefined;
    houseNumber?: string | undefined;
    postalCode?: number | undefined;
    city?: string | undefined;
  };
  phone?: number | undefined;
}

export const AddressInput: React.FC<Partial<StepWizardChildProps>> = props => {
  const [formState, setFormState] = useState({} as FormState);
  const onSubmit = (values: FormState) => {
    console.log("values", values);
    setFormState(values);
  };
  return (
    <WizardStep>
      <ContentBox>
        <Heading2>Delivery address</Heading2>
        <Paragraph>Where should we deliver your pizza?</Paragraph>
        <Form
          onSubmit={values => onSubmit(values)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Label>Name</Label>
              <FormSection>
                <Field name="name" component={Input} placeholder="Name" />
              </FormSection>
              <Label>Address</Label>
              <FormSection>
                <Field
                  name="streetName"
                  component={Input}
                  placeholder="Street name"
                />
                <Field
                  name="houseNumber"
                  component={Input}
                  placeholder="House number"
                />
              </FormSection>
              <FormSection>
                <Field
                  name="postalCode"
                  component={Input}
                  placeholder="Postal code"
                />
                <Field name="city" component={Input} placeholder="City" />
              </FormSection>
              <Label>Phone number</Label>
              <FormSection>
                <Field
                  name="phone"
                  component={Input}
                  placeholder="Phone number"
                />
              </FormSection>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
            </form>
          )}
        />
        <Button onClick={props.previousStep}>back</Button>
        <Button onClick={props.nextStep} appearance="primary">
          create pizza
        </Button>
      </ContentBox>
    </WizardStep>
  );
};
