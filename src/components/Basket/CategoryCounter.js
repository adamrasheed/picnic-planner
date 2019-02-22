import React, { Component } from "react";
import styled from "styled-components";
import { itemTypes } from "../../utils";
import CategoryIcon from "./CategoryIcon";

const CategorycounterContainer = styled.div``;

class CategoryCounter extends Component {
  getTypeCount = () => {
    const basket = this.props.basket;

    console.log(
      basket[`item1550799694569`] && basket[`item1550799694569`].type
    );
  };
  render() {
    const { basket } = this.props;
    this.getTypeCount();
    return (
      <CategorycounterContainer>
        {itemTypes.map((type, i) => {
          const count = type;
          return <CategoryIcon type={type} key={i} />;
        })}
      </CategorycounterContainer>
    );
  }
}

export default CategoryCounter;
