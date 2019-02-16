import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/styles";
import { P } from "../../styles/typography";

const Headline = styled.h1`
  color: ${colors.text.regular};
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Greeting = ({ name }) => {
  return (
    <>
      <Headline>Hiya, {name ? name : `Anonymous User!`}</Headline>
      <P semibold>
        Check out what your coworkers are having, or add something you want to
        bring!
      </P>
    </>
  );
};

export default Greeting;
