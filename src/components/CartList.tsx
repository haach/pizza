import React from "react";
import { Label, Bold } from "./styledComponents";
import styled from "styled-components";
import { colors } from "../utils/variables";
import { CartItem } from "../utils/sharedTypes";
import { generateList } from "../services/helperServices";

interface CartListProps {
  cartState: CartItem[];
  totalPrice: number;
}

export const CartList: React.FC<CartListProps> = ({
  cartState,
  totalPrice
}: CartListProps) => {
  return (
    <Container>
      {cartState.map((cartItem: CartItem) => {
        const toppings = Object.keys(cartItem.selection.toppings).map(
          topping => cartItem.selection.toppings[topping].name
        );
        return (
          <ListItem key={cartItem.id}>
            <Name>Margarita - {cartItem.selection.size.name}</Name>
            {toppings.length > 0 && (
              <Description>With {generateList(toppings)}</Description>
            )}
            <Price>{cartItem.selection.totalPrice} €</Price>
          </ListItem>
        );
      })}
      <ListItem>
        <Name>Total</Name>
        <Price>{totalPrice} €</Price>
      </ListItem>
    </Container>
  );
};

const Container = styled.div`
  max-height: 100%;
  overflow: auto;
`;
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
  .checkBox {
    margin: 0;
    position: absolute;
    top: 8px;
    left: 0;
  }
`;
const Name = styled(Bold)``;
const Description = styled(Label)``;
const Price = styled(Bold)`
  position: absolute;
  top: 5px;
  right: 0;
`;
