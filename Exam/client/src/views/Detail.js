import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail = (props) => {
    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res => setPet({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>Name: {pet.mame}</p>
            <p>Breed: {pet.breed}</p>
            <p>Description: {pet.description}</p>
            <p>Skills: {pet.skills}</p>
        </div>
    )
}
export default Detail;

