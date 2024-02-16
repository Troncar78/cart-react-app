import React from 'react';
import styled from 'styled-components';
import MyLinkButton from '../Components/MyLinkButton';
import MyButton from './MyButton';
import { useCartContext } from '../Context/CarContext';
import { v4 as uuidv4 } from 'uuid';

// Styles mis à jour de la carte
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin: 8px;
  width: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #848484;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  margin: 0;
  color: #ffffff;
  font-size: 1.2em;
  text-align: center;
`;

const Price = styled.div`
  color: #ffffff;
  font-size: 1em;
  margin-top: 8px;
`;

const Amount = styled.div`
  color: #ffffff;
  font-size: 1em;
  margin-top: 8px;
`;

function Card({ id, title, price, amount, image }) {
  const { dispatch } = useCartContext();

  const addItemToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: uuidv4(),
        title,
        price,
      },
    });
  };

  return (
    <StyledCard>
      <CardImage src={image} alt={title} />
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Amount>Quantity: {amount}</Amount>
      <MyLinkButton id={id} text="See comment" />
      <MyButton text="Add to cart" onClick={addItemToCart} />
    </StyledCard>
  );
}

export default Card;
