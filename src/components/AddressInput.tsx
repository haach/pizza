import React, { useState, useCallback } from "react";
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

  const handleChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement;
      const newState = { ...formState, [target.name]: target.value };
      setFormState(newState as User);
    },
    [formState]
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      addItemToStorage(formState as User, "user");
      props.nextStep && props.nextStep();
    },
    [formState, props]
  );

  return (
    <form onSubmit={onSubmit}>
      <WizardStep>
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
                onChange={handleChange}
              />
            </FormSection>
            <Label>Address</Label>
            <FormSection>
              <Input
                name="streetName"
                placeholder="Street name"
                required={true}
                value={formState && formState.streetName}
                onChange={handleChange}
              />
              <Input
                name="houseNumber"
                placeholder="House number"
                required={true}
                value={formState && formState.houseNumber}
                onChange={handleChange}
              />
            </FormSection>
            <FormSection>
              <Input
                name="postalCode"
                placeholder="Postal code"
                required={true}
                value={formState && formState.postalCode}
                onChange={handleChange}
              />
              <Input
                name="city"
                placeholder="City"
                required={true}
                value={formState && formState.city}
                onChange={handleChange}
              />
            </FormSection>
            <Label>Phone number</Label>
            <FormSection>
              <Input
                name="phone"
                placeholder="Phone number"
                required={true}
                value={formState && formState.phone}
                onChange={handleChange}
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
        </ButtonBar>
      </WizardStep>
    </form>
  );
};
