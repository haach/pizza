import React from 'react';
import { Label, Bold, Paragraph } from './styledComponents';
import styled, { css } from 'styled-components';
import { colors } from '../utils/variables';
import { CartItem } from '../utils/sharedTypes';
import { generateList } from '../services/helperServices';
import { deleteItemFromStorage } from '../services/storageService';

interface CartListProps {
  cartState: CartItem[];
  totalPrice: number;
  // updateCartState is undefined in Checkout view
  updateCartState?: () => void;
}

export const CartList: React.FC<CartListProps> = ({
  cartState,
  updateCartState,
  totalPrice
}: CartListProps) => {
  return (
    <div>
      {cartState.length > 0 ? (
        <React.Fragment>
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
                {updateCartState && (
                  <Description
                    color={colors.error}
                    onClick={() =>
                      deleteItemFromStorage(cartItem.id)
                        .then(() => updateCartState())
                        .catch(err => console.log('err', err))
                    }
                  >
                    Delete
                  </Description>
                )}
                <Price>{cartItem.selection.totalPrice} €</Price>
              </ListItem>
            );
          })}
          <ListItem>
            <Name>Total</Name>
            <Price>{totalPrice} €</Price>
          </ListItem>
        </React.Fragment>
      ) : (
        <Paragraph>No items in cart</Paragraph>
      )}
    </div>
  );
};

const ListItem = styled.div`
  cursor: pointer;
  overflow: auto;
  padding: 5px 0 5px 0;
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
const Description = styled(Label)`
  margin-bottom: 0;
  ${({ color }: { color?: string }) =>
    color &&
    css`
      color: ${color};
    `};
`;
const Price = styled(Bold)`
  position: absolute;
  top: 5px;
  right: 0;
`;
