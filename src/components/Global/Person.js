import React from "react";
import styled from "styled-components";
import { P } from "../../styles/typography";

export const StyledPerson = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${props => (props.padding ? `1rem` : `0`)};

  ${props =>
    props.small &&
    `
    ${StyledPersonName} {
      font-size: 0.75rem;
    }
  `}
`;

const StyledPersonImg = styled.img`
  display: block;
  border-radius: 50%;
  width: 2rem;
  margin-right: 0.75rem;
`;

const StyledPersonName = styled(P)`
  font-size: ${props => (props.small ? `0.75rem` : `1rem`)};
  line-height: 1;
`;

const Person = ({ name, image, padding }, ...props) => {
  return (
    <StyledPerson padding={padding} {...props}>
      <StyledPersonImg
        src={image ? image : `https://randomuser.me/api/portraits/men/31.jpg`}
        alt={name}
      />
      <StyledPersonName>{name}</StyledPersonName>
    </StyledPerson>
  );
};

export default Person;
