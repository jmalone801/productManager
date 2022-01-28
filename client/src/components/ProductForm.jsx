import axios from 'axios';
import React, { useState } from 'react'

const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    //handler when the form is submitted
    const onSubmitHandler = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/new/product', {
            title,
            price,
            description
        })
            // Displays validiations
            .then(res => {
                console.log(res)
                if(res.data.errors) {
                    setErrors(res.data.errors)
                }
                // Clears input fields
                else {
                    setTitle("")
                    setPrice("")
                    setDescription("")}
                })
            .catch(err => console.log(err))
            
    }

    //onChange to update title, price, description
    return (
        <form onSubmit={onSubmitHandler} className='mx-auto'>
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
    )
}

export default ProductForm;

