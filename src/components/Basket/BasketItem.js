import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { P, fontSize } from "../../styles/typography";
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
  padding: ${props =>
    props.userSubmitted ? `8px` : `calc(1rem - 1px) 4px 1rem`};
  border-bottom: ${props =>
    props.userSubmitted ? `none` : `1px solid rgba(0, 0, 0, 0.15)`};
  margin-bottom: ${props => (props.userSubmitted ? `0.75rem` : `0`)};

  ${StyledPerson} {
    margin: 12px 0 0;
    p {
      font-size: 12px;
      letter-spacing: 0.05em;
    }
  }

  background: ${props => (props.userSubmitted ? `#FFE84A` : "none")};
`;

const ItemTitle = styled(P)`
  font-size: 20px;
  line-height: 1;
  font-weight: 500;
  grid-column: 1/2;
  grid-row: 1/2;
`;

const EditItem = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: end;
  align-self: end;
`;

const DeleteButton = styled.button`
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-size: 8px;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  display: block;
  font-weight: 600;
  letter-spacing: 0.025em;

  &:hover,
  &:focus {
    outline: 0;
    background: rgba(0, 0, 0, 0.06);
  }
`;

class BasketItem extends Component {
  state = {};
  render() {
    const {
      details: { name, type, servings, user },
      id,
      userSubmitted,
      deleteItem
    } = this.props;
    return (
      <ItemContainer userSubmitted={userSubmitted}>
        <ItemTitle>{name}</ItemTitle>
        <ItemMeta
          style={{ gridColumn: `2/3`, gridRow: `1/2` }}
          type={type}
          servings={servings}
        />
        <Person
          small
          id={user.uid}
          name={user.displayName}
          image={user.photoURL}
          userSubmitted={userSubmitted}
        />
        {userSubmitted && (
          <EditItem>
            <DeleteButton onClick={deleteItem.bind(this, id)}>
              Delete
            </DeleteButton>
          </EditItem>
        )}
      </ItemContainer>
    );
  }
}

BasketItem.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    servings: PropTypes.number,
    user: PropTypes.shape({
      uid: PropTypes.string,
      displayName: PropTypes.string,
      photoUrl: PropTypes.string
    })
  })
};

export default BasketItem;
