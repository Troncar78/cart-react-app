import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px 10px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function MyButton({ id, text }) {
  return (
    <StyledLink to={`/products/${id}`}>
      <StyledButton>{text}</StyledButton>
    </StyledLink>
  );
}

export default MyButton;
