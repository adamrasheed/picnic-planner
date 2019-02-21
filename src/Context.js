import React from "react";
import { Component } from "react";
import authentication, { googleProvider } from "./authentication";

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
    authentication.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({ user });
      } else {
      }
    });
  };

  login = () => {
    authentication.signInWithPopup(googleProvider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  };

  handleSubmit = item => {
    console.log("submitedd through context");
    const user = {
      displayName: this.state.user.displayName,
      uid: this.state.user.uid,
      photoURL: this.state.user.photoURL
    };
    item.user = user;
    const basketItems = this.state.basket;
    basketItems[`item${Date.now()}`] = item;
    console.log(this.state);
    console.log(Object.keys(this.state.basket).length);
  };

  componentWillMount() {
    this.authListener();
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
            authentication.signOut().then(() => {
              this.setState({ user: null });
              localStorage.removeItem("user");
            });
          },
          handleSubmit: item => {
            this.handleSubmit(item);
          }
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
