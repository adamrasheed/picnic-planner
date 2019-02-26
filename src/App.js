import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import { colors } from "./styles/styles";
import Header from "./components/Header/Header";
import { GlobalProvider, GlobalContext } from "./Context";
import Nav from "./components/Global/Nav";
import Dashboard from "./pages/Dashboard";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const PrivateRoute = ({ component: Component, state, ...rest }) => {
  const loggedIn = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

library.add(faUserCircle);

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <GlobalContext.Consumer>
          {context => {
            const { menuOpen } = context.state;
            return (
              <div
                className={`App${menuOpen ? ` menu-open` : ``}`}
                style={{ background: colors.background }}
                context={context}
              >
                <Header />
                <Nav open={context.state.menuOpen} />
                <Router>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <PrivateRoute
                      state={context.state}
                      path="/dashboard"
                      component={Dashboard}
                    />
                    <Route component={NoMatch} />
                  </Switch>
                </Router>
              </div>
            );
          }}
        </GlobalContext.Consumer>
      </GlobalProvider>
    );
  }
}

export default App;
