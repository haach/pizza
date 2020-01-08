import React, { useState } from "react";
import { WizardStep, ToppingsList } from "./";
import { StepWizardChildProps } from "react-step-wizard";
import {
  Button,
  SplitView,
  ContentBox,
  Heading2,
  Paragraph,
  Label,
  FakeLink
} from "./styledComponents";
import styled from "styled-components";
import { toppings, sizes } from "../utils/pizzaData";
import { toppingsImages } from "../assets/toppings";
import { Item } from "../utils/sharedTypes";
import sizeIcon from "../assets/sizeIcon.svg";
import sizeIcon_active from "../assets/sizeIcon_active.svg";
import { addItemToStorage } from "../services/storageService";
import shortid from "shortid";

const initialState = {
  size: sizes.medium,
  toppings: {} as { [id: string]: Item },
  totalPrice: sizes.medium.price
};

export const PizzaSelection: React.FC<Partial<
  StepWizardChildProps
>> = props => {
  const [selection, setSelection] = useState(initialState);
  const updateSelection = (item: Item | string) => {
    let updatedSelection = { ...selection };
    if (typeof item !== "string") {
      // size
      updatedSelection.size = item;
    } else {
      // topping
      selection.toppings[item]
        ? delete updatedSelection.toppings[item]
        : (updatedSelection.toppings = {
            ...updatedSelection.toppings,
            [item]: toppings[item]
          });
    }
    updatedSelection.totalPrice =
      updatedSelection.size.price +
      Object.keys(updatedSelection.toppings)
        .map(id => updatedSelection.toppings[id].price)
        .reduce((a, b) => a + b, 0);
    setSelection(updatedSelection);
  };
  const addToCart = () => {
    addItemToStorage(
      {
        id: shortid.generate(),
        selection
      },
      "cart"
    )
      .then(() => setSelection(initialState))
      .catch(err => console.log(err));
  };
  return (
    <WizardStep>
      <SplitView>
        <ContentBox>
          <Heading2>Create your pizza</Heading2>
          <Paragraph>
            Delivery to: ADREES, ADDRESS{" "}
            <FakeLink onClick={props.previousStep}>edit</FakeLink>
            <br />
            Use the customizer to create your favourite pizza.
          </Paragraph>
          <ToppingsList
            selection={selection}
            updateSelection={updateSelection}
          />
          <Button appearance="primary" onClick={() => addToCart()}>
            Add to cart
          </Button>
          <Button onClick={props.nextStep}>see cart</Button>
        </ContentBox>
        <ContentBox>
          <Preview size={selection.size.name}>
            <Base src={toppingsImages.base} alt="Margarita base" />
            {Object.keys(toppings).map((top: string) => (
              <Topping
                src={toppingsImages[top]}
                key={toppings[top].name}
                alt={toppings[top].name}
                isVisible={!!selection.toppings[top]}
              />
            ))}
          </Preview>
          <SizeSelector>
            <Label>Select pizza size</Label>
            {Object.keys(sizes).map((size: string) => (
              <SizeIcon
                src={
                  selection.size.name === sizes[size].name
                    ? sizeIcon_active
                    : sizeIcon
                }
                key={sizes[size].name}
                alt={sizes[size].name}
                onClick={() => updateSelection(sizes[size])}
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
  height: 35vh;
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
