import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  width: ${props => (props.userSubmitted ? `1rem` : `1.5rem`)};
  margin-right: 0.375rem;
`;

const StyledPersonName = styled(P)`
  font-size: ${props => (props.small ? `0.75rem` : `1rem`)};
  line-height: 1;
`;

const UserAvatar = styled(FontAwesomeIcon)`
  font-size: 1rem;
  opacity: 0.75;
  margin-right: 0.25rem;
`;

const Person = ({ name, image, id, padding, userSubmitted }, ...props) => {
  return (
    <StyledPerson id={id} padding={padding} {...props}>
      {image ? (
        <StyledPersonImg userSubmitted={userSubmitted} src={image} alt={name} />
      ) : (
        <UserAvatar icon="user-circle" />
      )}

      <StyledPersonName>
        {name ? (userSubmitted ? `you` : name) : `Joe Schmoe`}
      </StyledPersonName>
    </StyledPerson>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string
};

export default Person;
