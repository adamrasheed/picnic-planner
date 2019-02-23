import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import { colors } from "./styles/styles";
import Header from "./components/Header/Header";
import { GlobalProvider, GlobalContext } from "./Context";
import Nav from "./components/Global/Nav";
import Dashboard from "./pages/Dashboard";

const PrivateRoute = ({ component: Component, state, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        state.user ? (
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

class App extends Component {
  render() {
    const isHome = window.location.pathname === `/`;

    return (
      <GlobalProvider>
        <GlobalContext.Consumer>
          {context => (
            <div
              className="App"
              style={{ background: colors.background }}
              context={context}
            >
              {!isHome && <Header />}
              <Nav open={context.state.menuOpen} />
              <Router>
                <Switch>
                  <Route
                    exact
                    path="/"
                    authListener={this.authListener}
                    component={Home}
                  />
                  <PrivateRoute
                    state={context.state}
                    path="/dashboard"
                    component={Dashboard}
                  />
                  <Route component={NoMatch} />
                </Switch>
              </Router>
            </div>
          )}
        </GlobalContext.Consumer>
      </GlobalProvider>
    );
  }
}

export default App;
