import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Update = (props) => {
    const { id } = props;
    const [name, setName] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.log(err))
    }, [])
    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {
            name
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;
