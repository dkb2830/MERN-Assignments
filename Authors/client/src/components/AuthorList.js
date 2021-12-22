import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const AuthorList = (props) => {
    const { removeFromDom, author } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                author.map((a, index) => {
                    return (
                        <div key={index}>
                            <Link to={"/author/" + a._id}>
                                {a.name}
                            </Link>
                            |
                            <Link to={"/author/" + a._id + "/edit"}>
                                Edit
                            </Link>>
                            |
                            <button onClick={(e) => { deleteAuthor(a._id) }}>
                                Delete
                            </button>
                        </div>
                })
            }
        </div>
    )
}
export default AuthorList;

