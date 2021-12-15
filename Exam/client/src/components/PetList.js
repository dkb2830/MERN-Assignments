import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const PetList = (props) => {
    const { removeFromDom, pet } = props;
    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                removeFromDom(petId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                pet.map((p, index) => {
                    return (
                        <div key={index}>
                            <Link to={"/pet/" + p._id}>
                                {p.name}, {p.breed}, {p.description}, {p.skills}
                            </Link>
                            |
                            <Link to={"/pet/" + p._id + "/edit"}>
                                Edit
                            </Link>
                            |
                            <button onClick={(e) => { deletePet(p._id) }}>
                                Delete
                            </button>
                        </div>
                )
                })} 
        </div>
    )
}
export default PetList;

