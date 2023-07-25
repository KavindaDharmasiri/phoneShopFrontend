import React, { Component } from 'react';
import styled from '@emotion/styled';
import { style } from "./style";

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ItemCard = styled.div`
  position: relative;
  width: 20%;
  height: 300px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  /* Add Bootstrap card styles */
  background-color: #fff;
`;

const ItemImage = styled.img`
  height: 100%;
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

const OrderType = styled.p`
  margin-top: 5px;
  font-weight: bold;
`;

class Phone extends Component {
  buyNow = (id) => {
    console.log(id);
  }

  render() {
    const { items, onClick } = this.props;

    return (
        <ItemWrapper>
          {items.map((item, index) => (
              <ItemCard key={index} className="card">
                {/*<ItemImage src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/phoneshop_war/' + item.image1)} alt={item.name} />*/}
                <ItemImage src={require('D:/nnshop/New folder/mobile-phone-shop/src/assets/img/upload/' + item.image1)} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <ItemName className="card-title">{item.name}</ItemName>
                  <ItemBrand className="card-text">{item.brand}</ItemBrand>
                  <ItemPrice className="card-text">RS: {item.price}</ItemPrice>
                  <OrderType className={`card-text text-${item.type === 'pending' ? 'primary' : item.type === 'reject' ? 'danger' : 'success'}`}>
                    {item.type}
                  </OrderType>
                </div>
              </ItemCard>
          ))}
        </ItemWrapper>
    );
  }
}

export default Phone;
