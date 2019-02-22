import React from "react";
import styled from "styled-components";

import { ReactComponent as IconEntree } from "../../assets/icon-entree.svg";
import { ReactComponent as IconSides } from "../../assets/icon-sides.svg";
import { ReactComponent as IconSnacks } from "../../assets/icon-snacks.svg";
import { ReactComponent as IconUtensils } from "../../assets/icon-utensils.svg";
import { ReactComponent as IconDrinks } from "../../assets/icon-drinks.svg";
import { ReactComponent as IconDessert } from "../../assets/icon-dessert.svg";

const StyledCategory = styled.div`
  font-size: 1rem;
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
      {iconSelect(type)}: {count ? count : `999`}
    </StyledCategory>
  );
};

export default CategoryIcon;
