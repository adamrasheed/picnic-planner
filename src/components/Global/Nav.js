import React from "react";
import styled from "styled-components";
import { shadow, transition } from "../../styles/styles";
import Person from "./Person";
import Button from "./Button";

const NavContainer = styled.div`
  background: white;
  box-shadow: ${shadow.medium};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 16rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  transition: all ${transition.short};
  transform: translateX(${props => (props.open ? `0` : `-110%`)});
`;

class Nav extends React.Component {
  state = {};
  render() {
    return (
      <NavContainer {...this.props}>
        <Person name="Joseph McBrostein" />
        <Button style={{ marginTop: `auto` }} full warning white>
          Sign Out
        </Button>
      </NavContainer>
    );
  }
}

export default Nav;
