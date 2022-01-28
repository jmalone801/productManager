import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'

const ProductList = (props) => {
    const [products, setProducts] = useState([]);


    // Displays all products
    const getList = () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.error(err));
    }

    // Clears product from dom after being deleted
    useEffect(() => {
        getList()
    }, [products]);

    // Deletes one product
    const deleteProduct = (_id) => {
        axios.delete('http://localhost:8000/api/product/delete/' + _id)
            .then(res => {
                getList()
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {products.map((products, i) => {
                return (
                    <div key={i}>
                        <p><Link to={`/api/product/` + products._id} >{products.title}</Link></p>
                        <button onClick={(e) => { deleteProduct(products._id) }}>Delete</button>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default ProductList;