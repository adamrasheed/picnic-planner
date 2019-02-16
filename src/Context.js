import React from "react";
import { Component } from "react";

export const GlobalContext = React.createContext();

export class GlobalProvider extends Component {
  state = {
    menuOpen: false
  };
  render() {
    return (
      <GlobalContext.Provider
        value={{
          state: this.state,
          toggleMenu: () => this.setState({ menuOpen: !this.state.menuOpen })
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
