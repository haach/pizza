import React, { useState } from "react";
import { WizardStep, CartList } from "./";
import {
  Button,
  Heading2,
  SplitView,
  ContentBox,
  Paragraph,
  ButtonBar,
  FormSection,
  Label
} from "./styledComponents";
import { StatefulWizardStepProps } from "../utils/sharedTypes";
import { Input } from "./FormComponents";
import { deleteCartFromStorage } from "../services/storageService";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";
import Lottie from "lottie-react-web";
import deliver from "../assets/lottie/delivery.json";

interface CheckoutFormState {
  cardNumber?: number;
  experationDate?: string;
  securityCode?: number;
}

export const Checkout: React.FC<StatefulWizardStepProps> = props => {
  const [checkOutState, setCheckoutState] = useState("initial");
  const [formState, setFormState] = useState({
    cardNumber: undefined,
    experationDate: undefined,
    securityCode: undefined
  } as CheckoutFormState);
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const newState = { ...formState, [target.name]: target.value };
    setFormState(newState);
  };

  const checkout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("order completetd");
    setCheckoutState("loading");
    setTimeout(() => setCheckoutState("success"), 1500);
    setTimeout(() => {
      deleteCartFromStorage();
      props.goToStep && props.goToStep(1);
      setCheckoutState("initial");
      props.updateCartState();
    }, 8000);
  };
  return (
    <form onSubmit={checkout} onChange={handleChange}>
      <WizardStep>
        <SplitView>
          {checkOutState !== "success" && (
            <ContentBox>
              <Heading2>Checkout</Heading2>
              <Paragraph>Please enter your credit card data.</Paragraph>
              <Label>Credit card number</Label>
              <FormSection>
                <Input
                  name="cardNumber"
                  required={true}
                  type="text"
                  placeholder="Credit card number"
                />
              </FormSection>
              <Label>Expiration date</Label>
              <FormSection>
                <Input
                  placeholder="MM/YY"
                  name="experationDate"
                  value={formState.experationDate}
                  required={true}
                />
              </FormSection>
              <Label>Security Code</Label>
              <FormSection>
                <Input
                  placeholder="123"
                  name="securityCode"
                  value={formState.securityCode}
                  required={true}
                />
              </FormSection>
            </ContentBox>
          )}

          {checkOutState === "success" && (
            <React.Fragment>
              <ContentBox scrollable={true}>
                <Heading2>Your pizza is on its way!</Heading2>
                <Paragraph>Your order:</Paragraph>
                <CartList
                  cartState={props.cartState}
                  totalPrice={props.totalPrice}
                />
              </ContentBox>
              <ContentBox>
                <Lottie
                  options={{
                    animationData: deliver
                  }}
                  width={500}
                />
              </ContentBox>
            </React.Fragment>
          )}
        </SplitView>
        {checkOutState !== "success" && (
          <ButtonBar>
            <Button onClick={props.previousStep} type="button">
              edit order
            </Button>
            <Button appearance="primary" type="submit">
              <ButtonText isVisible={checkOutState === "initial"}>
                place order for {props.totalPrice}€
              </ButtonText>
              <Loading>
                <BeatLoader
                  loading={checkOutState === "loading"}
                  size={14}
                  color={"#FFF"}
                />
              </Loading>
            </Button>
          </ButtonBar>
        )}
      </WizardStep>
    </form>
  );
};
const ButtonText = styled.span`
  opacity: ${({ isVisible }: { isVisible: boolean }) => (isVisible ? 1 : 0)};
`;
const Loading = styled.div`
  max-height: 100%;
  position: absolute;
  top: 15px;
  left: calc(50% - 25px);
`;
