import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from "react-router-dom";


const Update = (props) => {
    const { _id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();
    const [errors, setErrors] = useState({});

    // Retrieves one single item by id
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + _id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.error(err));
    }, [_id]);


    // Updates one single product by id
    const updateProduct = event => {
        event.preventDefault();
        axios.put('http://localhost:8000/api/product/update/' + _id, {
            title,
            price,
            description
        })
        // Displays validiations for edit
        .then(res => {
            console.log(res)
            if(res.data.errors) {
                setErrors(res.data.errors)
            }
            else {
                history.push("/api/products")
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label><br />
                    <input type="text" onChange={(event) => setTitle(event.target.value)} value={title} />
                    <p className='danger'>{errors.title ? errors.title.message : ""}</p>
                </p>
                <p>
                    <label>Price: </label><br />
                    <input type="number" onChange={(event) => setPrice(event.target.value)} value={price} />
                    <p className='danger'>{errors.price ? errors.price.message : ""}</p>
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" onChange={(event) => setDescription(event.target.value)} value={description} />
                    <p className='danger'>{errors.description ? errors.description.message : ""}</p>
                </p>
                <input type="submit" />
            </form>
            <Link to="/api/products/">Home Page</Link>
        </div>
    )
}

export default Update;

