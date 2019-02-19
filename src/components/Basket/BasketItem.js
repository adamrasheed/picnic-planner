import React, { Component } from "react";
import styled from "styled-components";
import { fontSize, P } from "../../styles/typography";
import Person from "../Global/Person";
import ItemMeta from "./ItemMeta";

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
  padding: calc(1rem - 1px) 4px 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const ItemTitle = styled(P)`
  font-size: 20px;
  line-height: 1;
  font-weight: 500;
  grid-column: 1/2;
  grid-row: 1/2;
`;

class BasketItem extends Component {
  state = {};
  render() {
    const { name } = this.props;
    return (
      <ItemContainer>
        <ItemTitle>Potato Salad</ItemTitle>
        <ItemMeta style={{ gridColumn: `2/3`, gridRow: `1/2` }} />
        <Person
          name={name}
          style={{ gridColumn: `1/2`, gridRow: `2/3`, paddingTop: `0.75rem` }}
        />
      </ItemContainer>
    );
  }
}

export default BasketItem;
