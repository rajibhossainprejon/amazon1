import React, { useState } from 'react';
import { Card , Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash  } from '@fortawesome/free-solid-svg-icons';





const ReviewItem = ({removeProduct, product}) => {
    const {img, name, price, quantity , key} = product;
    
    
  

    return (
        <div>
            <Card style={{ width: '96%', display: 'grid', gridTemplateColumns: "auto auto" , margin: '10px 10px' }}>
 
 <Card.Img style={{height: "200px", width: "200px", marginLeft:'20px' ,marginRight: '90px'}} variant="top" src={img} />
 
 <Card.Body style={{ width: '500px'}} >
    <Card.Title>Price: ${price}</Card.Title>
    <Card.Text>Quantity: <b>{quantity}</b> </Card.Text>
    <Card.Text>
      {name}
    </Card.Text>
    <Button variant="danger" style={{marginTop: '60px'}} onClick ={() => removeProduct(key)} ><FontAwesomeIcon icon={faTrash} /> Remove</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default ReviewItem;