import React, { Component } from "react";
import styled from "styled-components";
import MenuToggle from "./MenuToggle";
import { colors, container } from "../../styles/styles";
import { A } from "../../styles/typography";

const StyledHeader = styled.div`
  background: ${colors.background};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${container.extraLarge};
  margin: 0 auto;
  flex: 0;
  width: 100%;
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
