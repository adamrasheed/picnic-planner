import React from "react";
import styled from "styled-components";
import Container from "../components/Global/Container";
import Greeting from "../components/Dashboard/Greeting";
import Basket from "../components/Basket/Basket";
import { mediaSize } from "../styles/styles";
import AddItemForm from "../components/AddItem/AddItemForm";

const DashboardContainer = styled(Container)`
  @media screen and (min-width: ${mediaSize.medium}) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  @media screen and (min-width: ${mediaSize.large}) {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
`;

class Dashboard extends React.Component {
  state = {};
  render() {
    return (
      <DashboardContainer padding>
        <Greeting name="Adam" />

        {/*
				TODO
				- Add Picnic Item View
				*/}
        <Basket />
        <AddItemForm />
      </DashboardContainer>
    );
  }
}

export default Dashboard;
