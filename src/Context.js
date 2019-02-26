import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
        localStorage.setItem("user", user.uid);
        this.setState({ user });
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
    const scrollLock = document.body.classList.contains('scroll-lock');
    document.body.classList.toggle('scroll-lock');
  };

  login = () => {
    fyreBase
      .auth()
      .signInWithPopup(googleProvider)
      .then(result => {
        const user = result.user;
        this.setState({
          menuOpen: false,
          user
        });
        console.log(this);
      });
  };

  logout = () => {
    fyreBase
      .auth()
      .signOut()
      .then(result => {
        this.setState({ menuOpen: !this.state.menuOpen });
        localStorage.removeItem("user");
      })
      .then(() => {
        this.setState({ user: null });
        this.history.push("/dashboard");
      });
  };

  resetSubmit = ref => {
    console.log("resetting submit");
  };

  handleSubmit = item => {
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

  deleteItem = itemKey => {
    const basket = { ...this.state.basket };
    basket[itemKey] = null;
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
    fyreBaseDatabase.removeBinding(this.ref);
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          state: this.state,
          toggleMenu: this.toggleMenu,
          login: this.login,
          logout: this.logout,
          handleSubmit: item => {
            this.handleSubmit(item);
          },
          resetSubmit: this.resetSubmit,
          deleteItem: itemKey => {
            this.deleteItem(itemKey);
          }
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalProvider;
