import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../fakeData';
import Product from '../Components/Product/Product';
const ProductDetail = () => {

const {key}=useParams();
const [product, setProduct] = useState({});

useEffect(() => {
fetch('http://localhost:5000/product/'+ key)
.then(res => res.json())
.then(data => setProduct(data));
},[key])


//const product = fakeData.find(pd => pd.key === key);
console.log(product);
    return (
        <div>
           {
               <Product showButtons={false} product={product} ></Product>
           }
   </div>
    );
};

export default ProductDetail;