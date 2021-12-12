import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayProduct = (props) => {
    const { _id } = props;
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/${_id}')
            .then((response) => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default DisplayProduct;