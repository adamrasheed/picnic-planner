import React, { Component } from "react";
import styled from "styled-components";
import { fontSize } from "../../styles/typography";
import { ReactComponent as IconEntree } from "../../assets/icon-entree.svg";
import { ReactComponent as IconSides } from "../../assets/icon-sides.svg";
import { ReactComponent as IconSnacks } from "../../assets/icon-snacks.svg";
import { ReactComponent as IconUtensils } from "../../assets/icon-utensils.svg";
import { ReactComponent as IconDrinks } from "../../assets/icon-drinks.svg";
import { ReactComponent as IconDessert } from "../../assets/icon-dessert.svg";
import { ReactComponent as IconUser } from "../../assets/icon-user.svg";

const ItemMetaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;

  svg {
    max-width: 1rem;
    max-height: 1rem;
    margin-left: 1.5rem;
  }
`;

const ItemQty = styled.p`
  margin: 0 0 0 0.5rem;
  font-size: ${fontSize.extraSmall};
  line-height: 1;
  letter-spacing: 1px;
`;

class ItemMeta extends Component {
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

      default:
        return <IconEntree />;
    }
  }
  render() {
    const { type, servings } = this.props;
    return (
      <ItemMetaContainer>
        {this.getTypeIcon(type)}
        <IconUser />
        <ItemQty>{servings ? servings : `999`}</ItemQty>
      </ItemMetaContainer>
    );
  }
}

export default ItemMeta;
