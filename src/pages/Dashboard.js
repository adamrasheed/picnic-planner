import React from "react";
import styled from "styled-components";
import Container from "../components/Global/Container";
import Greeting from "../components/Dashboard/Greeting";
import BasketWrapper from "../components/Basket/Basket";
import { mediaSize } from "../styles/styles";
import AddItemForm from "../components/AddItem/AddItemForm";

const DashboardContainer = styled(Container)`
  max-width: unset;

  @media screen and (min-width: ${mediaSize.medium}) {
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  @media screen and (min-width: ${mediaSize.large}) {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
`;

const FirstColumn = styled.div`
  margin-bottom: 2rem;
  @media screen and (min-width: ${mediaSize.medium}) {
    flex: 1 0 50%;
    max-width: calc(50% - 2rem);
    margin-right: 2rem;
    margin-bottom: 0;
  }
  @media screen and (min-width: ${mediaSize.large}) {
    max-width: 25rem;
    flex-basis: 25rem;
    margin-right: 4rem;
  }
`;

class Dashboard extends React.Component {
  state = {};
  render() {
    return (
      <DashboardContainer padding>
        <FirstColumn>
          <Greeting name="Adam" />
          <BasketWrapper />
        </FirstColumn>
        <AddItemForm />
      </DashboardContainer>
    );
  }
}

export default Dashboard;
