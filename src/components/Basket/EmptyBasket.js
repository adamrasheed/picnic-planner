import React from "react";
import styled from "styled-components";

const StyledBasket = styled.div`
  padding: 2rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  margin: 1rem 0;
`;

const EmptyBasket = () => {
  return (
    <StyledBasket>
      <div>
        <span role="img" aria-label="sad emoji">
          😢
        </span>
      </div>
      <p>Your basket it empty</p>
    </StyledBasket>
  );
};

export default EmptyBasket;
