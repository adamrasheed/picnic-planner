import React, { Component } from "react";
import styled from "styled-components";
import { itemTypes } from "../../utils";
import CategoryIcon from "./CategoryIcon";

const CategorycounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: row nowrap;
`;

class CategoryCounter extends Component {
  getTypeCount = () => {
    const basket = this.props.basket;
    const categories = [];
    basket &&
      Object.keys(basket).map(key => {
        categories.push(basket[key].type);
      });

    const categoriesTally = categories.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

    return categoriesTally;
  };

  findmatchingCount = category => {
    const typeCount = this.getTypeCount();
    return typeCount[category];
  };

  render() {
    const { basket } = this.props;
    this.findmatchingCount("utensils");

    return (
      <CategorycounterContainer>
        {itemTypes.map((type, i) => {
          const count = type;

          return (
            <CategoryIcon
              type={type}
              key={i}
              count={this.findmatchingCount(type)}
            />
          );
        })}
      </CategorycounterContainer>
    );
  }
}

export default CategoryCounter;
