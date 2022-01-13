import {
  Button,
  SplitView,
  Heading1,
  Heading3,
  ContentBox,
  Paragraph
} from './styledComponents';
import { WizardStep } from './';
import React from 'react';
import styled from 'styled-components';
import { StepWizardChildProps } from 'react-step-wizard';
import shadow from './../assets/shadow.svg';
import pizza from './../assets/pizza.svg';

export const Welcome: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <WizardStep>
      <SplitView centered={true}>
        <ContentBox>
          <Heading3>Freestyle</Heading3>
          <Heading1>pizza</Heading1>
          <Paragraph>
            Hey! Looks like you ❤ pizza?
            <br />
            But are you tired of the same old combinations? Then you've come to
            the right place! Go ahead and create your own super combo with our
            free style pizza maker.
          </Paragraph>
          <Button onClick={props.nextStep} appearance="primary">
            order now!
          </Button>
        </ContentBox>
        <AnimationConatiner>
          <AnimatedShadow src={shadow} alt="spooking around" />
          <AnimatedPizza src={pizza} alt="pizza is fly" />
        </AnimationConatiner>
      </SplitView>
    </WizardStep>
  );
};

const AnimationConatiner = styled.div`
  position: relative;
  height: 100%;
  overflow: visible;
`;

const AnimatedShadow = styled.img`
  position: absolute;
  opacity: 0.5;
  top: 50%;
  left: 0;
  right: 0;
  transform: translate(0, -45%);
  animation: flyFlat 5s linear infinite alternate-reverse;
`;

const AnimatedPizza = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translate(0, -50%);
  animation: fly 5s linear infinite alternate-reverse;
`;
