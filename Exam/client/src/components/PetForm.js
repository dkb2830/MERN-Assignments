import React, { useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const PetForm = () => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState({}); 
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet', {
            name,
            breed,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
            .then(res => console.log(res))
            .catch(err => {
                console.log(err)
                console.log(err.response.data.errors)
                if (err.response.data.errors)
                setErrors(err.response.data.errors);
            })           
    }
    return (
        <>  <div>
            <Link to={"/"}>Back to Home</Link>
            <h1>Pet Shelter</h1>
            <h3>Know a pet needing a home?</h3>
        </div>
            <div className='container'>
                <form onSubmit={onSubmitHandler}>
                    <div className='col-6'>
                        <p>
                            <label htmlFor='name' className='form-label'>Name</label><br />
                            {errors.name ?
                                <p>{errors.name.message}</p>
                                : null
                            }

                            <input type="text" className='form-control' id='name' onChange={(e) => setName(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor='breed' className='form-label'>Breed</label><br />
                            <input type="text" className='form-control' id='breed' onChange={(e) => setBreed(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor='description' className='form-label'>Description</label><br />
                            <input type="text" className='form-control' id='description' onChange={(e) => setDescription(e.target.value)} />
                        </p>
                    </div>
                    <div className='col-6'>
                        <p>
                            <h5>Skills (optional):</h5>
                            <label htmlFor='skillone' className='form-label'>Skill 1:</label><br />
                            <input type="text" className='form-control' id='skillone' onChange={(e) => setSkillOne(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor='skilltwo' className='form-label'>Skill 2:</label><br />
                            <input type="text" className='form-control' id='skilltwo' onChange={(e) => setSkillTwo(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor='skillthree' className='form-label'>Skill 3:</label><br />
                            <input type="text" className='form-control' id='skillthree' onChange={(e) => setSkillThree(e.target.value)} />
                        </p>
                    </div>
                    <input type="submit" value="Add a Pet" className='btn btn-primary' />
                </form>
            </div></>
            

    )
}
export default PetForm;

