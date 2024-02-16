import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin: 8px;
  width: 200px;
  height: 150px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #848484;
  color: #ffffff;
  overflow: hidden;
`;

const Username = styled.h3`
  margin: 0 0 8px 0;
  color: #ffffff;
  font-size: 1.2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CommentText = styled.div`
  color: #ffff;
  font-size: 1em;
  overflow-y: auto;
  margin-top: 8px;
  text-align: justify;
`;

function CommentCard({ id, username, comment }) {
  return (
    <StyledCard>
      <Username>{username}</Username>
      <CommentText>{comment}</CommentText>
    </StyledCard>
  );
}

export default CommentCard;
