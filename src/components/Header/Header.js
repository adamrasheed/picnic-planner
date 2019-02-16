import React, { Component } from "react";
import styled from "styled-components";
import MenuToggle from "./MenuToggle";
import { Link } from "react-router-dom";
import { colors } from "../../styles/styles";
import { GlobalContext } from "../../Context";
import { A } from "../../styles/typography";

const StyledHeader = styled.div`
  background: ${colors.background};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 1.25rem;
  line-height: 1;
  width: auto;
  flex: 1;
`;

class Header extends Component {
  state = {};
  render() {
    return (
      <StyledHeader>
        <HeaderTitle>
          <A href="/">Potluck Planner</A>
        </HeaderTitle>
        <MenuToggle />
      </StyledHeader>
    );
  }
}

export default Header;
