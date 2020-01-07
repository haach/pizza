import React from "react";
import styled from "styled-components";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import {
  Button,
  SplitView,
  ContentBox,
  Heading2,
  Paragraph
} from "./styledComponents";

export const PizzaSelection: React.FC<Partial<
  StepWizardChildProps
>> = props => {
  return (
    <WizardStep>
      <SplitView>
        <ContentBox>
          <Heading2>Create your pizza</Heading2>
          <Paragraph>
            Use the customizer to create your favourite pizza.
          </Paragraph>
          <Button onClick={props.previousStep}>change address</Button>
          <Button onClick={props.nextStep} appearance="primary">
            see cart
          </Button>
        </ContentBox>
        <div>Pizza creator here</div>
      </SplitView>
    </WizardStep>
  );
};
