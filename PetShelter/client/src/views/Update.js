import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Update = (props) => {
    const { id } = props;
    const [name, setName] = useState();
    const [breed, setBreed] = useState();
    const [description, setDescription] = useState();
    const [skills, setSkills] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setName(res.data.name);
                setBreed(res.data.breed);
                setDescription(res.data.description);
                setSkills(res.data.skills);
            })
            .catch(err => console.log(err))
    }, [])
    const updatePet = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, {
            name,
            breed,
            description,
            skills
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Pet</h1>
            <form onSubmit={updatePet}>
                <p>
                    <label>Name</label><br />
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Breed</label><br />
                    <input type="text"
                        name="breed"
                        value={breed}
                        onChange={(e) => { setBreed(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;

