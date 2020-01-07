import {
  Button,
  SplitView,
  Heading1,
  Lead,
  ContentBox,
  Paragraph
} from "./styledComponents";
import { WizardStep } from "./";
import React from "react";
import styled from "styled-components";
import { StepWizardChildProps } from "react-step-wizard";
import shadow from "./../assets/shadow.svg";
import pizza from "./../assets/pizza.svg";
import { colors } from "../utils/variables";

export const Welcome: React.FC<Partial<StepWizardChildProps>> = props => {
  return (
    <WizardStep>
      <SplitView centered={true}>
        <ContentBox>
          <Lead>Free style</Lead>
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
          <Triangle />
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
`;
const Triangle = styled.div`
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
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50vw 50vw 0 0;
    border-color: #fff transparent transparent transparent;
  }
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
