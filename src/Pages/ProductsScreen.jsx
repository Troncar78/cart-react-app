import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Card from "../Components/Card";
import { useGetProductsQuery } from '../Services/API';

const Container = styled.div`
    background-color: #f8f9fa;
    color: #343a40;
    min-height: 100vh;
    padding: 20px;
`

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
`

export default function ProductsScreen() {
    let { data, isLoading } = useGetProductsQuery();
    return (
        <Container>
            <Header />
            <ProductsContainer>
                {!isLoading ? (
                    data.map((article) => (
                        <Card 
                            key = { article.id }
                            id = { article.id } 
                            title = { article.title } 
                            price = { article.price } 
                            amount = { article.quantity } 
                            image = { article.image }
                            ar = { article }
                        />
                    ))
                ) : (
                <span>Loading...</span>
                )}
            </ProductsContainer>
        </Container>
    );
}

