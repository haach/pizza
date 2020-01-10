import React, { useState } from "react";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import {
  Button,
  ContentBox,
  Heading2,
  Paragraph,
  Label,
  FormSection,
  SplitView,
  ButtonBar
} from "./styledComponents";
import Lottie from "lottie-react-web";
import poi_jump from "./../assets/lottie/poi_jump.json";
import {
  readUserFromStorage,
  addItemToStorage
} from "../services/storageService";
import { User } from "../utils/sharedTypes";
import { Input } from "./FormComponents";

export const AddressInput: React.FC<Partial<StepWizardChildProps>> = props => {
  const [formState, setFormState] = useState(readUserFromStorage());
  console.log("readUserFromStorage()", readUserFromStorage());
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const newState = { ...formState, [target.name]: target.value };
    setFormState(newState as User);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItemToStorage(formState as User, "user");
    props.nextStep && props.nextStep();
  };
  return (
    <form onSubmit={onSubmit} onChange={handleChange}>
      <WizardStep>
        ^
        <SplitView>
          <ContentBox>
            <Heading2>Delivery address</Heading2>
            <Paragraph>Where should we deliver your pizza?</Paragraph>
            <Label>Name</Label>
            <FormSection>
              <Input
                name="name"
                placeholder="Name"
                required={true}
                value={formState && formState.name}
              />
            </FormSection>
            <Label>Address</Label>
            <FormSection>
              <Input
                name="streetName"
                placeholder="Street name"
                required={true}
                value={formState && formState.streetName}
              />
              <Input
                name="houseNumber"
                placeholder="House number"
                required={true}
                value={formState && formState.houseNumber}
              />
            </FormSection>
            <FormSection>
              <Input
                name="postalCode"
                placeholder="Postal code"
                required={true}
                value={formState && formState.postalCode}
              />
              <Input
                name="city"
                placeholder="City"
                required={true}
                value={formState && formState.city}
              />
            </FormSection>
            <Label>Phone number</Label>
            <FormSection>
              <Input
                name="phone"
                placeholder="Phone number"
                required={true}
                value={formState && formState.phone}
              />
            </FormSection>
          </ContentBox>
          <ContentBox>
            <Lottie
              options={{
                animationData: poi_jump
              }}
              width={300}
            />
          </ContentBox>
        </SplitView>
        <ButtonBar>
          <Button appearance="primary" type="submit">
            create pizza
          </Button>
          <Button onClick={props.previousStep} type="button">
            back
          </Button>
        </ButtonBar>
      </WizardStep>
    </form>
  );
};
