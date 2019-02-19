import React from "react";
import Container from "../components/Global/Container";
import Greeting from "../components/Dashboard/Greeting";
import Basket from "../components/Basket/Basket";

class Dashboard extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <Greeting name="Adam" />

        {/*
				TODO
				
				- Picnic Items View
				- Add Picnic Item View
				*/}
        <Basket />
      </Container>
    );
  }
}

export default Dashboard;
