import React from "react";
import { Component } from "react";
import fyreBase, { googleProvider, fyreBaseDatabase } from "./authentication";

export const GlobalContext = React.createContext();

export class GlobalProvider extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    menuOpen: false,
    user: null,
    basket: {}
  };

  authListener = () => {
    fyreBase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        localStorage.setItem("user", user.uid);
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  login = () => {
    fyreBase.signInWithPopup(googleProvider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  };

  resetSubmit = ref => {
    console.log("resetting submit");
  };

  handleSubmit = item => {
    console.log("submitedd through context");
    const user = {
      displayName: this.state.user.displayName,
      uid: this.state.user.uid,
      photoURL: this.state.user.photoURL
    };
    item.user = user;
    const basket = this.state.basket;
    basket[`item${Date.now()}`] = item;
    this.setState({ basket });
  };

  componentWillMount() {
    this.authListener();
    this.ref = fyreBaseDatabase.syncState(`potluck`, {
      context: this,
      state: `basket`
    });
  }

  componentWillUnmount() {
    fyreBase.removeBinding(this.ref);
  }

  render() {
    console.log(this.state);
    return (
      <GlobalContext.Provider
        value={{
          state: this.state,
          toggleMenu: () => this.setState({ menuOpen: !this.state.menuOpen }),
          login: this.login,
          logout: () => {
            fyreBase.signOut().then(() => {
              this.setState({ user: null });
              localStorage.removeItem("user");
            });
          },
          handleSubmit: item => {
            this.handleSubmit(item);
          },
          resetSubmit: this.resetSubmit
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
