import React from "react";
import styled from "styled-components";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import { Button, ContentBox, Heading2, Paragraph } from "./styledComponents";

export const AddressInput: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <WizardStep>
      <ContentBox>
        <Heading2>Delivery address</Heading2>
        <Paragraph>Where should we deliver your pizza?</Paragraph>
        <Button onClick={props.previousStep}>back</Button>
        <Button onClick={props.nextStep} appearance="primary">
          create pizza
        </Button>
      </ContentBox>
    </WizardStep>
  );
};
