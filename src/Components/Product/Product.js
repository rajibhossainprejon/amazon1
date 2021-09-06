import React from 'react';
import { Card , Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus,  faInfoCircle, faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Product = ({ showButtons , handleAddProduct , product}) => {
    const {img, name, price, seller, stock, key} = product;

    return (
        <div>
            <Card border="primary" style={{border: "primary" ,   width: '98%' , margin: "20px auto" }}>
  <div style={{textAlign: "center"}}>
  <Card.Img variant="top" src={img} style={{height: "200px", width: "200px"}} />
  </div>
  <Card.Body>
    <Card.Title>Price:  ${price}</Card.Title>
    
    <small>By: {seller}</small>
    <br/>
    <small>Stock Limited: {stock} Items Remains</small>
    <Card.Text style={{ height: '60px' ,boxSizing: 'border-box' , overflow: 'hidden' }}>
        {name}
    </Card.Text>
{
     showButtons &&           <div style={{ display: "grid", gridTemplateColumns: '50% 50%', margin: '0px', padding: '0px' }}>
                <div>
                <Link to={"/product/"+key} > <Button variant="danger"  > <FontAwesomeIcon icon={faInfoCircle} /> <small>Show Details</small> </Button> </Link>
                </div>
                <div>
                <Button variant="dark"   onClick = {() => handleAddProduct(product)} > <FontAwesomeIcon icon={faCartPlus} /> <small>Add To Cart</small> </Button>
                </div>
    
                </div>
}
{
    showButtons == false && 
    <Link to={"/shop"} > <Button variant="warning" style={{ width: '20%' }} > <FontAwesomeIcon icon={faArrowLeft} /> <small>Go Back</small> </Button> </Link>
}
     </Card.Body>
</Card>
        </div>
    );
};

export default Product;