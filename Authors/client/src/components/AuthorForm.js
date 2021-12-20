import React, { useState } from 'react'
import axios from 'axios';
const AuthorForm = () => {
    const [name, setName] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author/new', {
            name
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name:</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}
export default AuthorForm;

