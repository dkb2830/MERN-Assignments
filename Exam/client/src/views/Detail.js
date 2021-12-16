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

    const { removeFromDom } = props;
    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                removeFromDom(petId)
            })
            .catch(err => console.log(err))
    }
    return (
        <><Link to={"/"}>Back to Home</Link><br/><br/>
            <button onClick={(e) => { deletePet(pet._id); }}>Adopt Pet</button>
            <h1>Pet Shelter</h1>
            <h3>Details About: {pet.name}</h3>
            <div className='detail'>
                <div>
                    <h6>Breed:</h6>
                    <p>{pet.breed}</p>
                </div>
                <div>
                    <h6>Description:</h6> <p>{pet.description}</p>
                </div>
                <div>
                    <h6 className='list'>Skills:</h6>
                        <p>{pet.skillOne}</p><br />
                        <p>{pet.skillTwo}</p><br />
                        <p>{pet.skillThree}</p><br />
                </div>
            </div></>
    )
}
export default Detail;
