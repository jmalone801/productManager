import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);


    // Displays all products
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    // Deletes product from DOM
    const removeFromDom = _id => {
        setProducts(products.filter(products => products._id !== _id));
    }

    return (
        <div>
            <ProductForm />
            <hr />
            <ProductList products={products} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main;

