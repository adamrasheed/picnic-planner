import React, { Component } from "react";
import styled from "styled-components";
import { P } from "../../styles/typography";
import Person, { StyledPerson } from "../Global/Person";
import ItemMeta from "./ItemMeta";

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
  padding: calc(1rem - 1px) 4px 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  ${StyledPerson} {
    margin: 12px 0 0;
    p {
      font-size: 12px;
      letter-spacing: 0.05em;
    }
  }
`;

const ItemTitle = styled(P)`
  font-size: 20px;
  line-height: 1;
  font-weight: 500;
  grid-column: 1/2;
  grid-row: 1/2;
`;

const ItemPerson = styled(Person)`
  background: red;
`;

class BasketItem extends Component {
  state = {};
  render() {
    const {
      item: { name, type, servings, user }
    } = this.props;
    return (
      <ItemContainer>
        <ItemTitle>{name}</ItemTitle>
        <ItemMeta
          style={{ gridColumn: `2/3`, gridRow: `1/2` }}
          type={type}
          servings={servings}
        />
        <ItemPerson small name={user.displayName} image={user.photoUrl} />
      </ItemContainer>
    );
  }
}

export default BasketItem;
