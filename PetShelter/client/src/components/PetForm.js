import React, { useState } from 'react'
import axios from 'axios';
const PetForm = () => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet', {
            name,   
            breed,
            description,
            skills      
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
                <label>Breed</label><br />
                <input type="text" onChange={(e) => setBreed(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e) => setDescription(e.target.value)}/>
            </p>
            <p>
                <label>Skills</label><br/>
                <input type="text" onChange={(e) => setSkills(e.target.value)}/>
            </p>
            <input type="submit" />
        </form>
    )
}
export default PetForm;

