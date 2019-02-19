import React, { Component } from "react";
import styled from "styled-components";
import { fontSize } from "../../styles/typography";
import { ReactComponent as IconEntree } from "../../assets/icon-entree.svg";
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
  font-size: ${fontSize.small};
  line-height: 1;
  letter-spacing: 1px;
`;

const ItemMeta = props => {
  return (
    <ItemMetaContainer>
      <IconEntree />
      <IconUser />
      <ItemQty>123</ItemQty>
    </ItemMetaContainer>
  );
};

export default ItemMeta;
