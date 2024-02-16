import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  useGetProductCommentsQuery,
  useCreateProductCommentMutation,
} from '../Services/API';
import CommentCard from '../Components/CommentCard';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
  }
`;

export default function ProductScreen() {
  const { productID } = useParams();
  let { data, isLoading } = useGetProductCommentsQuery(productID);
  let [createProductComment, { isLoading: isCommentSubmitting }] =
    useCreateProductCommentMutation();

  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && comment.trim()) {
      createProductComment({
        id: productID,
        username,
        comment,
      }).then(() => {
        setUsername('');
        setComment('');
      });
    }
  };

  return (
    <PageContainer>
      <StyledLink to="/">Back to products</StyledLink>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          required
        />
        <SubmitButton type="submit" disabled={isCommentSubmitting}>
          Submit Comment
        </SubmitButton>
      </Form>
      {!isLoading ? (
        <GridContainer>
          {data?.map((comment, index) => (
            <CommentCard
              key={index}
              username={comment.username}
              comment={comment.comment}
            />
          ))}
        </GridContainer>
      ) : (
        <span>Loading</span>
      )}
    </PageContainer>
  );
}
