import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const ProductList = (props) => {
    const { removeFromDom, product } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                product.map((product, index) => {
                    return (
                        <div key={index}>
                            <Link to={"/product/" + product._id}>
                                {product.title}, {product.price}
                            </Link>
                            |
                            <Link to={"/product/" + product._id + "/edit"}>
                                Edit
                            </Link>
                            |
                            <button onClick={(e) => { deleteProduct(product._id) }}>
                                Delete
                            </button>
                        </div>
                    )
            })} 
        </div>
    )
}
export default ProductList;

