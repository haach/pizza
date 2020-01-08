import React from "react";
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
import {
  required,
  composeValidators,
  mustBeNumber
} from "../services/validationService";

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
  const onSubmit = (values: FormState, form: any) => {
    /* console.log('values', values);
    console.log('form', form); */
  };
  return (
    <WizardStep>
      <ContentBox>
        <Heading2>Delivery address</Heading2>
        {/* <Paragraph>Where should we deliver your pizza?</Paragraph> */}
        <Form
          onSubmit={(values, form) => onSubmit(values, form)}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Label>Name</Label>
              <FormSection>
                <Field
                  name="name"
                  component={Input}
                  placeholder="Name"
                  validate={required}
                />
              </FormSection>
              <Label>Address</Label>
              <FormSection>
                <Field
                  name="streetName"
                  component={Input}
                  placeholder="Street name"
                  validate={required}
                />
                <Field
                  name="houseNumber"
                  component={Input}
                  placeholder="House number"
                  validate={composeValidators(required, mustBeNumber)}
                />
              </FormSection>
              <FormSection>
                <Field
                  name="postalCode"
                  component={Input}
                  placeholder="Postal code"
                  validate={composeValidators(required, mustBeNumber)}
                />
                <Field
                  name="city"
                  component={Input}
                  placeholder="City"
                  validate={required}
                />
              </FormSection>
              <Label>Phone number</Label>
              <FormSection>
                <Field
                  name="phone"
                  component={Input}
                  placeholder="Phone number"
                  validate={composeValidators(required, mustBeNumber)}
                />
              </FormSection>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
              <Button onClick={props.previousStep} type="button">
                back
              </Button>
            </form>
          )}
        />
        <Button onClick={props.nextStep} appearance="primary">
          create pizza
        </Button>
      </ContentBox>
    </WizardStep>
  );
};
