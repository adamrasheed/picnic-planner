import styled from "styled-components";
import { container, mediaSize } from "../../styles/styles";

const Container = styled.div`
  max-width: ${container.small};
  padding: 0 1rem;
  flex: 1;

  ${({ center }) =>
    center &&
    `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}

  @media screen and (min-width: ${mediaSize.medium}) {
    max-width: ${container.medium};
  }
  @media screen and (min-width: ${mediaSize.large}) {
    max-width: ${container.large};
  }
  @media screen and (min-width: ${mediaSize.extraLarge}) {
    max-width: ${container.extraLarge};
  }
`;
export default Container;
