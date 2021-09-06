import React, { useEffect, useState } from 'react';

import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './ReviewOrder.css';
import {  Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight  } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';


const ReviewOrder = () => {

    const [cart, setCart] = useState([]);
const history = useHistory();


    const handleProceedCheckout = () => {
       history.push('/shipment');
    }

    const removeProduct = (productKey) =>{
        
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        fetch('http://localhost:5000/productByKeys', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(productKeys)
})
.then(res => res.json())
.then(data => setCart(data))
},[]);




    return (
        <div className="shop-container">
          <div className="remove-container" >  
          {
               cart.map(product => <ReviewItem key={product.key} removeProduct={removeProduct} product={product} ></ReviewItem>  )
           }
          </div>
          <div className="cart-container" >
              <Cart cart={cart}>

            <Button onClick={handleProceedCheckout} style={{width: '100%', backgroundColor: 'salmon' , border: 'none'  }} >  Procced Checkout <FontAwesomeIcon icon={faLongArrowAltRight} /> </Button>

              </Cart>
              
          </div>
         
        </div>
    );
};

export default ReviewOrder;