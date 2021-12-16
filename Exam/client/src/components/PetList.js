import React from 'react';
// import axios from 'axios';
import { Link } from '@reach/router';
const PetList = (props) => {
    const { pet } = props;
    // const deletePet = (petId) => {
    //     axios.delete('http://localhost:8000/api/pet/' + petId)
    //         .then(res => {
    //             removeFromDom(petId)
    //         })
    //         .catch(err => console.log(err))
    // }
    return (
        <div>
            {
                pet.map((p, index) => {
                    return (
                        <div key={index}>
                            <table>
                                <thead>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Actions</th>
                                </thead>
                                <tbody>
                                    <td>{p.name}</td>
                                    <td>{p.breed}</td>
                                    <td><Link to={"/pet/" + p._id}>Details</Link>|<Link to={"/pet/" + p._id + "/edit"}>Edit</Link></td>
                                </tbody>
                            {/* <Link to={"/pet/" + p._id}>
                                {p.name}, {p.breed}, {p.description}, {p.skills}
                            </Link>
                            |
                            <Link to={"/pet/" + p._id + "/edit"}>
                                Edit
                            </Link>
                            |
                            <button onClick={(e) => { deletePet(p._id) }}>
                                Delete
                            </button> */}
                            </table>
                        </div>
                    )
                })}
        </div>
    )
}
export default PetList;

