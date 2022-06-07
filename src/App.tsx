import React, { useState, useCallback, FC } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import {
  AddressInput,
  Cart,
  Checkout,
  Header,
  PizzaSelection,
  Welcome,
} from './components';
import StepWizard from 'react-step-wizard';
import { colors } from './utils/variables';
import { readCartFromStorage } from './services/storageService';
import { calculateTotalPrice } from './services/helperServices';
import { CartItem } from './utils/sharedTypes';

const App: FC = () => {
  const hash = window.location.hash.split('#step')[1];
  const [step, setStep] = useState<number>(hash ? parseFloat(hash) : 1);
  const [cartState, setCartState] = useState<CartItem[]>(readCartFromStorage());
  const [totalPrice, setTotalPrice] = useState<number>(
    calculateTotalPrice(cartState)
  );
  const updateCartState = useCallback(() => {
    // write local storage to state and notify all components
    const newState = readCartFromStorage();
    setCartState(newState);
    setTotalPrice(calculateTotalPrice(newState));
  }, []);
  return (
    <AppContainer>
      {/* @ts-ignore */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pizza Challenge</title>
        <meta
          name="description"
          content="Let’s build a simple page to order a pizza using React.Helmet application"
        />
      </Helmet>
      <Triangle />
      <Card noBG={step === 1}>
        <>
          <Header />
          <StepWizard
            className="stepWizard"
            isHashEnabled={true}
            onStepChange={({ activeStep }: { activeStep: number }) =>
              setStep(activeStep)
            }
          >
            <Welcome />
            <AddressInput />
            <PizzaSelection
              cartState={cartState}
              totalPrice={totalPrice}
              updateCartState={() => updateCartState()}
            />
            <Cart
              cartState={cartState}
              totalPrice={totalPrice}
              updateCartState={() => updateCartState()}
            />
            <Checkout
              totalPrice={totalPrice}
              cartState={cartState}
              updateCartState={() => updateCartState()}
            />
          </StepWizard>
        </>
      </Card>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  background-color: ${({ noBG = false }: { noBG?: boolean }) =>
    noBG ? 'transparent' : 'white'};
  width: clamp(320px, 100%, 1240px);
  height: clamp(320px, 100%, 780px);
  border-radius: 5px;
  box-shadow: 10px 25px 55px 0px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;

  /* NOT PRETTY BUT NEEDED TO OVERWRITE PLUGIN STYLES */
  .stepWizard {
    height: calc(100% - 62px);
  }
  .stepWizard > div,
  .stepWizard > div > div {
    height: 100%;
    overflow: auto;
  }
`;
const Triangle = styled.div`
  z-index: -1;
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    ${colors.primary.lightest} 0%,
    #ed5656 100%
  );
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 109vw 109vw;
    border-color: transparent transparent transparent #fff;
  }
`;
