import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/styles";
import { GlobalContext } from "../../Context";

const ToggleContainer = styled.button`
  width: 2.5rem;
  padding: 0.5rem;
  cursor: pointer;
`;

const StyledMenuToggle = styled.div`
  height: 2px;
  width: 100%;
  background: ${colors.text.regular};
  margin-bottom: 5px;
`;

const TopMenu = styled(StyledMenuToggle)``;

const MidlleMenu = styled(StyledMenuToggle)``;

const BottomMenu = styled(StyledMenuToggle)`
  margin-bottom: 2px;
`;

class MenuToggle extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {context => (
          <ToggleContainer onClick={context.toggleMenu}>
            <TopMenu />
            <MidlleMenu />
            <BottomMenu />
          </ToggleContainer>
        )}
      </GlobalContext.Consumer>
    );
  }
}

export default MenuToggle;
