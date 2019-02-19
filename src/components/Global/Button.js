import styled from "styled-components";
import { colors, shadow } from "../../styles/styles";
import { fontSize } from "../../styles/typography";

const Button = styled.button`
  display: block;
  color: ${props => (props.white ? `white` : colors.text.regular)};
  background: ${props => (props.warning ? colors.warning : `white`)};
  font-size: ${fontSize.body};
  letter-spacing: 1px;
  line-height: 1;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  box-shadow: ${shadow.small};
  cursor: pointer;
  padding: 0.75rem 3.5rem;
  width: ${props => (props.full ? `100%` : `auto`)};
  border-radius: ${props => (props.rounded ? `4px` : `unset`)};
  ${props => (props.center ? `margin-right: auto; margin-left: auto;` : null)}
`;

export default Button;
