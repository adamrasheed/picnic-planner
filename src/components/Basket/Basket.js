import React, { Component } from "react";
import styled from "styled-components";
import { container } from "../../styles/styles";
import { fontSize, P } from "../../styles/typography";
import BasketItem from "./BasketItem";

const StyledBasket = styled.div`
  max-width: ${container.large};
  margin: 0rem auto 0.875rem;
`;

const BasketLabel = styled(P)`
  font-size: ${fontSize.base};
  line-height: 1;
  font-weight: 500;
  margin: 3rem 0 0.75rem;
`;

const Basket = () => {
  return (
    <StyledBasket>
      <BasketLabel>What's in the Picnic Basket</BasketLabel>
      <BasketItem item="Potato Salad" name="Brojamohan Mikowski" />
    </StyledBasket>
  );
};

export default Basket;
