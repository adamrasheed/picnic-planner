import React from "react";
import styled from "styled-components";
import { container } from "../../styles/styles";
import { fontSize, P } from "../../styles/typography";
import BasketItem from "./BasketItem";
import Button from "../Global/Button";
import { GlobalContext } from "../../Context";

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
  const { basket } = props.state;
  console.log("basket:");
  console.log(Object.keys(basket).length);
  return (
    <StyledBasket items={props.state.basket.length}>
      <BasketLabel>What's in the Picnic Basket</BasketLabel>

      {Object.keys(basket).length
        ? Object.keys(basket).map(key => <p>{basket[key].name}</p>)
        : `The basket is empty 😢`}

      {Object.keys(props.state.basket).length ? (
        <TotalFoodAmount>
          There‘s enough food for {`999`} people
        </TotalFoodAmount>
      ) : null}
      <Button center rounded>
        Add to Basket
      </Button>
    </StyledBasket>
  );
};

export default React.forwardRef((props, ref) => (
  <GlobalContext.Consumer>
    {context => <Basket {...props} ref={ref} state={context.state} />}
  </GlobalContext.Consumer>
));
