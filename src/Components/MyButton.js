import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px 10px;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

function MyButton({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default MyButton;
