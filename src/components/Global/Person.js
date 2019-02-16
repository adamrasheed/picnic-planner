import React from "react";
import styled from "styled-components";
import { P } from "../../styles/typography";

const StyledPerson = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${props => (props.padding ? `1rem` : `0`)};
`;

const StyledPersonImg = styled.img`
  display: block;
  border-radius: 50%;
  width: 2rem;
  margin-right: 0.75rem;
`;

const StyledPersonName = styled(P)`
  font-size: 1rem;
  line-height: 1;
`;

const Person = ({ name, image, padding }) => {
  return (
    <StyledPerson padding={padding}>
      <StyledPersonImg
        src="https://randomuser.me/api/portraits/men/31.jpg"
        alt={name}
      />
      <p>{name}</p>
    </StyledPerson>
  );
};

export default Person;
