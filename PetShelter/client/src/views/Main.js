import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetForm from '../components/PetForm';
import PetList from '../components/PetList';
const Main = () => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            });
    }, [])
    return (
        <div>
            <PetForm />
            <hr />
            {loaded && <PetList pet={pet} />}
        </div>
    )
}
export default Main;

