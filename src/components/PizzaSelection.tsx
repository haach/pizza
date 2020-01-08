import React, { useState } from "react";
import { WizardStep, ToppingsList } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import {
  Button,
  SplitView,
  ContentBox,
  Heading2,
  Paragraph,
  Label
} from "./styledComponents";
import styled from "styled-components";
import { toppings, sizes } from "../utils/pizzaData";
import { toppingsImages } from "../assets/toppings";
import { Item } from "../utils/sharedTypes";
import sizeIcon from "../assets/sizeIcon.svg";
import sizeIcon_active from "../assets/sizeIcon_active.svg";

export const PizzaSelection: React.FC<Partial<
  StepWizardChildProps
>> = props => {
  const [selection, setSelection] = useState({ size: sizes[1], toppings: [] });
  const updateSelection = (item: Item, type: "size" | "topping") => {
    let updatedSelection = { ...selection };
    if (type === "size") {
      updatedSelection.size = item;
    }
    console.log("updatedSelection", updatedSelection);
    setSelection(updatedSelection);
  };
  return (
    <WizardStep>
      <SplitView>
        <ContentBox>
          <Heading2>Create your pizza</Heading2>
          <Paragraph>
            Use the customizer to create your favourite pizza.
          </Paragraph>
          <ToppingsList
            selection={selection}
            updateSelection={updateSelection}
          />
          <Button onClick={props.previousStep}>change address</Button>
          <Button onClick={props.nextStep} appearance="primary">
            see cart
          </Button>
        </ContentBox>
        <ContentBox>
          <Preview size={selection.size.name}>
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
          <SizeSelector>
            <Label>Select pizza size</Label>
            {sizes.map((size: Item) => (
              <SizeIcon
                src={
                  selection.size.name === size.name ? sizeIcon_active : sizeIcon
                }
                key={size.name}
                alt={size.name}
                onClick={() => updateSelection(size, "size")}
              />
            ))}
          </SizeSelector>
        </ContentBox>
      </SplitView>
    </WizardStep>
  );
};

const Preview = styled.div`
  margin-top: 20px;
  position: relative;
  max-height: 35vh;
  transform: scale(
    ${({ size }: { size: string }) =>
      size === "small" ? 0.8 : size === "medium" ? 0.9 : 1}
  );
  transition: transform 0.3s ease-in-out;
`;
const Base = styled.img`
  position: relative;
  width: auto;
  max-height: 35vh;
`;
const Topping = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 100%;
  opacity: ${({ isVisible }: { isVisible: boolean }) => (isVisible ? 1 : 0)};
`;
const SizeSelector = styled.div`
  padding-top: 30px;
  text-align: center;
`;
const SizeIcon = styled.img`
  cursor: pointer;
  margin: 0 5px;
  width: 20%;
  display: inline-block;
  &:first-of-type {
    width: 14%;
    margin-bottom: 3%;
  }
  &:nth-of-type(2) {
    width: 17%;
    margin-bottom: 1.5%;
  }
`;
