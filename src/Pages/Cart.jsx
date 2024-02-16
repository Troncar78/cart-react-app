import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../Context/CarContext';
import { Link } from 'react-router-dom';

const CartContainer = styled.div`
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

const CartList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CartItem = styled.li`
  background-color: #ffffff;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemDetails = styled.span`
  font-size: 1em;
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  color: white;
  background-color: #dc3545;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const CartItems = () => {
  const { state, dispatch } = useCartContext();
  const { items } = state;

  const removeItemFromCart = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id },
    });
  };

  return (
    <CartContainer>
      <StyledLink to="/"> Retour aux produits </StyledLink>
      {items.length > 0 ? (
        <CartList>
          {items.map((item) => (
            <CartItem key={item.id}>
              <ItemDetails>
                {item.title} - Prix: {item.price}
              </ItemDetails>
              <RemoveButton onClick={() => removeItemFromCart(item.id)}>
                Supprimer
              </RemoveButton>
            </CartItem>
          ))}
        </CartList>
      ) : (
        <p>Votre panier est vide.</p>
      )}
    </CartContainer>
  );
};

export default CartItems;
