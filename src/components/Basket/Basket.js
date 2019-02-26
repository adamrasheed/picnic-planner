import React from "react";
import styled from "styled-components";
import { container } from "../../styles/styles";
import { fontSize, P } from "../../styles/typography";
import BasketItem from "./BasketItem";
import Button from "../Global/Button";
import { GlobalContext } from "../../Context";
import EmptyBasket from "./EmptyBasket";
import CategoryCounter from "./CategoryCounter";

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
  font-size: ${fontSize.small};
  line-height: 1;
  margin: 1rem 0 2rem;
`;

class Basket extends React.Component {
  isUserSubmitted = (loggedInUserId, itemUserId) => {
    return loggedInUserId === itemUserId;
  };

  render() {
    const { state, deleteItem } = this.props.context;
    const basketItems = Object.keys(state.basket).length;
    const uid = state.user && state.user.uid;
    return (
      <StyledBasket>
        <BasketLabel>
          What's in the Picnic Basket{basketItems > 0 && ` (${basketItems})`}
        </BasketLabel>

        {/* For User Submitted items */}
        {basketItems &&
          Object.keys(state.basket)
            .map(key => (
              <BasketItem
                userSubmitted={true}
                id={key}
                key={key}
                details={state.basket[key]}
                deleteItem={deleteItem}
              />
            ))
            .filter(item => {
              const itemUserId = item.props.details.user.uid;
              const loggedinUserId = state.user.uid;
              return itemUserId === loggedinUserId;
            })}

        {basketItems ? (
          Object.keys(state.basket)
            .map(key => <BasketItem key={key} details={state.basket[key]} />)
            .filter(item => {
              const itemUserId = item.props.details.user.uid;
              const loggedinUserId = state.user.uid;
              return itemUserId !== loggedinUserId;
            })
        ) : (
          <EmptyBasket />
        )}
        <CategoryCounter basket={state.basket} />
      </StyledBasket>
    );
  }
}

const BasketWrapper = () => {
  return (
    <GlobalContext.Consumer>
      {context => <Basket context={context} />}
    </GlobalContext.Consumer>
  );
};

export default BasketWrapper;
