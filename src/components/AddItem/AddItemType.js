import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ReactComponent as IconEntree } from "../../assets/icon-entree.svg";
import { ReactComponent as IconSides } from "../../assets/icon-sides.svg";
import { ReactComponent as IconSnacks } from "../../assets/icon-snacks.svg";
import { ReactComponent as IconUtensils } from "../../assets/icon-utensils.svg";
import { ReactComponent as IconDrinks } from "../../assets/icon-drinks.svg";
import { ReactComponent as IconDessert } from "../../assets/icon-dessert.svg";
import { fontSize } from "../../styles/typography";
import { colors, mediaSize } from "../../styles/styles";

const StyledItemType = styled.label`
  font-size: ${fontSize.extraSmall};
  line-height: 1;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 2.25rem;
  margin-bottom: 1.5rem;
  text-align: center;
  cursor: pointer;

  input[type="radio"] {
    display: none;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

const Icon = styled.div`
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  box-shadow: inset 0 0 0 1px ${colors.text.regular};
  margin-bottom: 0.5rem;
  ${props =>
    props.selected &&
    `
    box-shadow: inset 0 0 0 2px ${colors.text.light};
    background: #FACA39;
  `}

@media screen and (min-width: ${mediaSize.medium}) {
    width: 4rem;
    height: 4rem;
  }

  @media screen and (min-width: ${mediaSize.large}) {
    width: 5rem;
    height: 5rem;
  }
`;

class AddItemType extends Component {
  state = {};
  getTypeIcon(itemType) {
    switch (itemType) {
      case "sides":
      case "side":
        return <IconSides />;

      case "snacks":
      case "snack":
        return <IconSnacks />;

      case "utensils":
        return <IconUtensils />;

      case "drinks":
        return <IconDrinks />;

      case "dessert":
        return <IconDessert />;

      case "entree":
      default:
        return <IconEntree />;
    }
  }
  render() {
    const { type, handleItemSelect, selected } = this.props;
    return (
      <StyledItemType>
        <input
          type="radio"
          name={`itemType${type}`}
          value={type}
          id=""
          onClick={handleItemSelect}
        />
        <Icon selected={selected}>{this.getTypeIcon(type)}</Icon>
        {type}
      </StyledItemType>
    );
  }
}

AddItemType.propTypes = {
  type: PropTypes.string
};

export default AddItemType;
