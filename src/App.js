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
        <div className="App" style={{ background: colors.background }}>
          {!isHome && <Header />}
          <GlobalContext.Consumer>
            {context => <Nav open={context.state.menuOpen} />}
          </GlobalContext.Consumer>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </div>
      </GlobalProvider>
    );
  }
}

export default App;
