import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const ProductList = (props) => {
    const { removeFromDom, product } = props;
    console.log(product)
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>All Products</h1>
            {
                product.map((p, index) => {
                    return (
                        <div key={index}>
                            <Link to={"/product/" + p._id}>
                                {p.title}, {p.price}, {p.description}
                            </Link>
                            |
                            <Link to={"/product/" + p._id + "/edit"}>
                                Edit
                            </Link>
                            |
                            <button onClick={(e) => { deleteProduct(p._id) }}>
                                Delete
                            </button>
                        </div>
                    )
            })} 
        </div>
    )
}
export default ProductList;

