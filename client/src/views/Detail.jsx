import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";


const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { _id } = useParams();


    // Retrieves one single item by id
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + _id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [_id]);

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: $ {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to="/api/products/">Home Page</Link><br></br>
            <Link to={"/product/update/" + product._id}>Edit</Link>
        </div>
    )
}

export default Detail;

