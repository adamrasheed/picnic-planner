import React from "react";
import styled from "styled-components";

import { ReactComponent as IconEntree } from "../../assets/icon-entree.svg";
import { ReactComponent as IconSides } from "../../assets/icon-sides.svg";
import { ReactComponent as IconSnacks } from "../../assets/icon-snacks.svg";
import { ReactComponent as IconUtensils } from "../../assets/icon-utensils.svg";
import { ReactComponent as IconDrinks } from "../../assets/icon-drinks.svg";
import { ReactComponent as IconDessert } from "../../assets/icon-dessert.svg";
import { mediaSize } from "../../styles/styles";

const StyledCategory = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.625rem;
  line-height: 1;
  margin: 0.75rem 0;
  text-align: center;

  svg {
    max-width: 1rem;
    max-height: 1rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: ${mediaSize.large}) {
    margin: 1rem;
  }
`;

const iconSelect = itemType => {
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
};

const CategoryIcon = ({ type, count }) => {
  return (
    <StyledCategory>
      {iconSelect(type)}
      {count ? count : `0`}
    </StyledCategory>
  );
};

export default CategoryIcon;
