import React from "react";
import styled from "styled-components";
import { shadow, transition } from "../../styles/styles";
import Person from "./Person";
import Button from "./Button";
import { GlobalContext } from "../../Context";

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
      <GlobalContext.Consumer>
        {context => (
          <NavContainer {...this.props}>
            <Person
              name={context.state.user && context.state.user.displayName}
              image={context.state.user && context.state.user.photoURL}
            />
            <Button
              style={{ marginTop: `auto` }}
              full
              warning
              white
              onClick={context.state.user ? context.logout : context.login}
            >
              {context.state.user ? `Sign Out` : `Sign In`}
            </Button>
          </NavContainer>
        )}
      </GlobalContext.Consumer>
    );
  }
}

export default Nav;
