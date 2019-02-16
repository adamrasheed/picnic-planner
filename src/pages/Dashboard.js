import React from "react";
import styled from "styled-components";
import Container from "../components/Global/Container";
import Greeting from "../components/Dashboard/Greeting";

class Dashboard extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <Greeting name="Adam" />

        {/* TODO
				
				- Picnic Items View
				- Add Picnic Item View*/}
        <p>What's in the Picninc Basket</p>
      </Container>
    );
  }
}

export default Dashboard;
