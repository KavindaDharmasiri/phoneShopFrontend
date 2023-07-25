import React, { Component } from 'react';
import styled from '@emotion/styled';
import {style} from "./style";


const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;



const ItemCard = styled.div`
  position: relative;
  width: 16.33%;
  margin: 50px;
  height: 250px;
  margin-bottom: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const ItemImage = styled.img`
  height: 35%;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemName = styled.h3`
  margin-top: 10px;
`;

const ItemBrand = styled.h3`
  margin-top: 10px;
`;

const ItemPrice = styled.p`
  margin-top: 5px;
  font-weight: bold;
`;

const Button = styled.button` 
  padding: 10px 20px; 
  background-color: #3498db; 
  color: #fff; 
  border: none; 
  border-radius: 4px; 
  font-size: 16px; 
  cursor: pointer; 
  transition: background-color 0.3s ease; 
  
  &:hover { 
    background-color: #2980b9; 
  } 
  
  &:focus { 
    outline: none; 
  } 
`;


class Phone extends Component {
  buyNow = (id) => {
    localStorage.setItem("buyId",id);
    const newWindow = window.open('http://localhost:3000/buyFinal', '_self', 'noopener,noreferrer')
  }
  render() {
    const { items , onClick} = this.props;

    return (
      <ItemWrapper>
        {items.map((item, index) => (
          <ItemCard key={index}>
            <ItemImage src={require('D:/nnshop/New folder/mobile-phone-shop/src/assets/img/upload/' + item.image1)} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ItemBrand>{item.brand}</ItemBrand>
            <ItemPrice>RS :{item.price}</ItemPrice>
            <Button onClick={() => this.buyNow(item.id)}>Buy Now</Button>

          </ItemCard>
        ))}
      </ItemWrapper>
    );
  }
}

export default Phone;
