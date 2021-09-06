import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faListAlt  } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cart , children }) => {
  const product = cart;
  const total = product.reduce((total, prd) => total + (prd.price* prd.quantity || 1) ,0) ;
  
  const shipping = 16*product.length;
  const vat = total/10;
  const grandTotal = total+shipping+vat;
  const formatNumber = num =>{
    const precision = num.toFixed(2);
    return Number(precision);
  }

  
  return (
    <div>
      <Card style={{ width: '20rem' }}>
        <div style={{ textAlign: 'center' }}>
          <Card.Header><FontAwesomeIcon icon={faListAlt} /> Order Summary</Card.Header>
        </div>
        <ListGroup variant="flush" >
          <ListGroup.Item ><h6 className='cardList' > Product Ordered </h6>  {product.length} </ListGroup.Item>
          <ListGroup.Item ><h6 className='cardList' > Price</h6> {formatNumber(total)} </ListGroup.Item>
          <ListGroup.Item > <h6 className='cardList' > Shipping</h6> {formatNumber(shipping)}</ListGroup.Item>
          <ListGroup.Item > <h6 className='cardList' > Vat</h6> {formatNumber(vat)}</ListGroup.Item>
          

        </ListGroup>
        <Card.Header><h6 className='cardList' >Total Price</h6> {formatNumber(grandTotal)}</Card.Header>
      {
children
      }
      </Card>
    </div>
  );
};

export default Cart;