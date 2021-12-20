import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail = (props) => {
    const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + props.id)
            .then(res => setAuthor({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>Name: {author.name}</p>
        </div>
    )
}
export default Detail;

