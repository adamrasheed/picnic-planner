import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import { colors } from "./styles/styles";
import Header from "./components/Header/Header";
import { GlobalProvider, GlobalContext } from "./Context";
import Nav from "./components/Global/Nav";
import Dashboard from "./pages/Dashboard";

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
                  <Route path="/dashboard" component={Dashboard} />
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
