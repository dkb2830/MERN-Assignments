import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetForm from '../components/PetForm';
import PetList from '../components/PetList';
import { Link } from '@reach/router';

const Main = () => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    }, [])

    const removeFromDom = petId => {
        setPet(pet.filter(p => p._id !== petId));
    }

    return (
        <div>
            <div>
            <h1>Pet Shelter</h1>
            <h2>These pets are looking for a good home</h2>
            </div>
            <div>
                <Link to={"/pets/new"}>
                    add a pet to the shelter
                </Link>
            </div>
            {/* <PetForm />
            <hr /> */}
            {loaded && <PetList pet={pet} removeFromDom={removeFromDom} />}
        </div>
    )
}
export default Main;


