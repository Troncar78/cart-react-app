import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CarContext';

const HeaderContainer = styled.div`
  background-color: #848484;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #dcdcdc;
  }
`;

const CartInfo = styled.div`
  font-weight: bold;
`;

export default function Header() {
  const { state } = useCartContext();
  const { items } = state;

  return (
    <HeaderContainer>
      <StyledLink to="/">Accueil</StyledLink>{' '}
      {/* Lien vers la page d'accueil */}
      <CartInfo>Nombre d'items dans le panier : {items.length}</CartInfo>
      <StyledLink to="/cart">Voir panier</StyledLink>{' '}
      {/* Lien décommenté vers la page du panier */}
    </HeaderContainer>
  );
}
