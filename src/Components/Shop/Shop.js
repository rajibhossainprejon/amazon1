import React, { useEffect, useState } from 'react';

import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import './Shop.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Shop = () => {
  
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);


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
}, []);


const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count ;
    let newCart;
    if (sameProduct) {
       
        count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const others = cart.filter(pd => pd.key !== toBeAddedKey)
        newCart = [...others, sameProduct];



    }
    else {
        product.quantity = 1;
        newCart = [...cart, product];

    }



    setCart(newCart);
    addToDatabaseCart(product.key, count);
}

return (
    <div className="shop-container">
        <div className='product-container'>
            {
                products.map(product => <Product key={product.key} showButtons={true} handleAddProduct={handleAddProduct} product={product} ></Product>)
            }

        </div>
        <div className="cart-container">
            <Cart cart={cart} >
                <Link to="/review" ><Button style={{ width: '100%' }} variant="warning"> <FontAwesomeIcon icon={faCheckCircle} />  Order Review</Button></Link>
            </Cart>
        </div>
    </div>
);
};

export default Shop;