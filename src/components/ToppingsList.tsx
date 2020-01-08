import React from "react";
import { Label, Bold } from "./styledComponents";
import styled from "styled-components";
import { colors } from "../utils/variables";
import { toppings } from "../utils/pizzaData";
import { Item } from "../utils/sharedTypes";

interface ToppingsListProps {
  selection: { size: Item; toppings: { [id: string]: Item } };
  updateSelection: Function;
}

export const ToppingsList: React.FC<ToppingsListProps> = ({
  selection,
  updateSelection
}: ToppingsListProps) => {
  return (
    <React.Fragment>
      <ListItem>
        <Name>Basis Margarita - SIZE</Name>
        <Description>
          Our delicious margarita comes with basil and cherry tomatoes
        </Description>
        <Price>{selection.size.price} €</Price>
      </ListItem>
      {Object.keys(toppings).map((topping: string) => (
        <ListItem key={toppings[topping].name}>
          <input type="checkbox" />
          <Name>{toppings[topping].name}</Name>
          <Price>{toppings[topping].price} €</Price>
        </ListItem>
      ))}
    </React.Fragment>
  );
};

const ListItem = styled.div`
  overflow: auto;
  padding: 5px 0 5px 30px;
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.default.light};
  }
  input[type="checkbox"] {
    position: absolute;
    top: 5px;
    left: 0;
  }
`;
const Name = styled(Bold)``;
const Description = styled(Label)``;
const Price = styled(Bold)`
  position: absolute;
  top: 2px;
  right: 0;
`;
