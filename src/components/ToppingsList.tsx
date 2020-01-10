import React from "react";
import { Label, Bold } from "./styledComponents";
import styled from "styled-components";
import { colors } from "../utils/variables";
import { toppings } from "../utils/pizzaData";
import { Item } from "../utils/sharedTypes";
import { Checkbox } from "./FormComponents";

interface ToppingsListProps {
  selection: {
    size: Item;
    toppings: { [id: string]: Item };
    totalPrice: number;
  };
  updateSelection: Function;
}

export const ToppingsList: React.FC<ToppingsListProps> = ({
  selection,
  updateSelection
}: ToppingsListProps) => {
  return (
    <div>
      <ListItem>
        <Name>Basis Margarita - {selection.size.name}</Name>
        <Description>
          Our delicious margarita comes with basil and cherry tomatoes
        </Description>
        <Price>{selection.size.price} €</Price>
      </ListItem>
      {Object.keys(toppings).map((topping: string) => (
        <ListItem
          key={toppings[topping].name}
          onClick={() => updateSelection(topping)}
        >
          <CheckBoxContainer>
            <Checkbox checked={!!selection.toppings[topping]} name={topping} />
          </CheckBoxContainer>
          <Name>{toppings[topping].name}</Name>
          <Price>{toppings[topping].price} €</Price>
        </ListItem>
      ))}
      <ListItem>
        <Name>Total</Name>
        <Price>{selection.totalPrice} €</Price>
      </ListItem>
    </div>
  );
};

const ListItem = styled.div`
  cursor: pointer;
  overflow: auto;
  padding: 5px 0 5px 30px;
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.default.light};
  }
  &:last-child {
    margin-top: 2px;
    border-top: 1px solid ${colors.default.light};
  }
`;

const CheckBoxContainer = styled.div`
  margin: 0;
  position: absolute;
  top: 8px;
  left: 0;
`;
const Name = styled(Bold)``;
const Description = styled(Label)``;
const Price = styled(Bold)`
  position: absolute;
  top: 5px;
  right: 0;
`;
