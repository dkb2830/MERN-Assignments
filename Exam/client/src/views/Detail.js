import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Detail = (props) => {
    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res => setPet({
                ...res.data
            }))
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            <Link to={"/"}>Back to Home</Link>
            <h1>Pet Shelter</h1>
            <h2>Details About: {pet.name}</h2>
            <p>Name: {pet.name}</p>
            <p>Breed: {pet.breed}</p>
            <p>Description: {pet.description}</p>
            <p>Skills: {pet.skills}</p>
        </div>
    )
}
export default Detail;

