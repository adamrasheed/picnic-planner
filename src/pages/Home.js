import React, { Component } from "react";
import styled from "styled-components";
import Container from "../components/Global/Container";
import { P, fontSize } from "../styles/typography";
import { shadow, mediaSize } from "../styles/styles";

import Logo from "../assets/google-logo.svg";

const HomeTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 80px;
  line-height: 1;
  letter-spacing: -1px;
  font-weight: 900;

  @media screen and (min-width: ${mediaSize.large}) {
    font-size: 160px;
  }
`;

const HomeDesc = styled.div`
  margin: 2rem 0 3.5rem;
  max-width: 15rem;

  @media screen and (min-width: ${mediaSize.large}) {
    max-width: 30rem;
    p {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

const PageContainer = styled(Container)`
  height: -webkit-fill-available;
  flex: 1;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const SignInButton = styled.button`
  display: block;
  cursor: pointer;
  font-size: ${fontSize.body};
  line-height: 1;
  box-shadow: ${shadow.small};
  padding: 2px 1.125rem 2px 2px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: auto auto 1rem;

  @media screen and (min-width: ${mediaSize.medium}) {
    margin: 2rem 0;
    padding: 4px 1.5rem 4px 4px;
  }
`;

class Home extends Component {
  state = {};
  render() {
    console.log(this.props.match);
    return (
      <>
        <PageContainer>
          <HomeTitle>Potluck Planner</HomeTitle>
          <HomeDesc>
            <P>Don’t want 20 people bringing potato salad?</P>
            <P style={{ marginTop: `1rem` }}>Use this app.</P>
          </HomeDesc>
          <SignInButton>
            <img
              style={{ display: `block`, marginRight: `4px` }}
              src={Logo}
              alt=""
            />
            Sign in with Google
          </SignInButton>
        </PageContainer>
      </>
    );
  }
}

export default Home;
