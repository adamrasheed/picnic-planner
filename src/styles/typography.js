import styled from "styled-components";
import { colors } from "./styles";

export const fontSize = {
  base: "16px",
  body: "14px",
  small: "0.875rem",
  extraSmall: `0.75rem`,
  mediumLarge: `1.125rem`,
  large: "1.25rem"
};

export const lineHeight = {
  paragraph: "24px",
  body: "1.4",
  heading: "1.2"
};

export const P = styled.p`
  font-size: 1rem;
  margin: 0;
  ${props => props.semibold && `font-weight: 500`}
`;

export const A = styled.a`
  color: ${colors.text.regular};
  text-decoration: none;
`;
