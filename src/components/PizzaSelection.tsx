import React from "react";
import { WizardStep } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import {
  Button,
  SplitView,
  ContentBox,
  Heading2,
  Paragraph
} from "./styledComponents";
import styled from "styled-components";
import { toppings } from "../utils/pizzaData";
import { toppingsImages } from "../assets/toppings";
import { Item } from "../utils/sharedTypes";

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
        <Creator>
          <Preview>
            <Base src={toppingsImages.base} alt="Margarita base" />
            {toppings.map((top: Item) => (
              <Topping
                src={toppingsImages[top.name.toLocaleLowerCase()]}
                key={top.name}
                alt={top.name}
                isVisible={true}
              />
            ))}
          </Preview>
        </Creator>
      </SplitView>
    </WizardStep>
  );
};

const Creator = styled.div``;
const Preview = styled.div`
  position: relative;
`;
const Base = styled.img`
  position: relative;
`;
const Topping = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: ${({ isVisible }: { isVisible: boolean }) => (isVisible ? 1 : 0)};
`;
