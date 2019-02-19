import React, { Component } from "react";
import styled from "styled-components";
import { container } from "../../styles/styles";
import { fontSize, P } from "../../styles/typography";
import BasketItem from "./BasketItem";
import Button from "../Global/Button";

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

const TotalFoodAmount = styled(P)`
  text-align: center;
  margin: 1rem 0 2rem;
`;

const Basket = props => {
  return (
    <StyledBasket>
      <BasketLabel>What's in the Picnic Basket</BasketLabel>
      <BasketItem item="Potato Salad" type="side" name="Brojamohan Mikowski" />
      <BasketItem item="Cheese Board" type="snack" name="Slabromir Pelikan" />
      <BasketItem
        item="Walnut Cranberry Salad"
        type="side"
        name="Erika Matebro"
      />
      <TotalFoodAmount>There‘s enough food for {`999`} people</TotalFoodAmount>
      <Button center rounded>
        Add to Basket
      </Button>
    </StyledBasket>
  );
};

export default Basket;
