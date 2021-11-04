import React, { useState } from 'react';

const Subcontents = (props) => {
    const { firstName, lastName, hairColor } = props;
    const [ age, setAge ] = useState(props.age)
    return (
        <div className='Subcontents'>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={(event) => setAge(age + 1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
};

export default Subcontents;