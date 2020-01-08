import React from "react";
import { Label, Bold } from "./styledComponents";
import styled from "styled-components";
import { colors } from "../utils/variables";
import { toppings } from "../utils/pizzaData";
import { Item } from "../utils/sharedTypes";

interface ToppingsListProps {
  selection: { size: Item; toppings: Item[] };
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
      {toppings.map((top: Item) => (
        <ListItem key={top.name}>
          <input type="checkbox" />
          <Name>{top.name}</Name>
          <Price>{top.price} €</Price>
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
