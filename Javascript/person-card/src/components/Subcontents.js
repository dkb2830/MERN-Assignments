import React from 'react';

const Subcontents = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    return (
            <div className='Subcontents'>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
    );
};

export default Subcontents;