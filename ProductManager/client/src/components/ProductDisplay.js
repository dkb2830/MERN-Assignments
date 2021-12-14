import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayProduct = (props) => {
    const [prodDetail, setProdDetail] = useState({});
    const { _id } = props;
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then((response) => {
                setProdDetail(response.data);
            })
            .catch((err) => console.log(err));
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            <h2>{prodDetail.title}</h2>
            <p>{prodDetail.price}</p>
            <p>{prodDetail.description}</p>
        </div>
    );
};

export default DisplayProduct;