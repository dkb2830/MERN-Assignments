import React from 'react'
const PetList = (props) => {
    return (
        <div>
            {props.pet.map((pet, idx) => {
                return <p key={idx}>{pet.name}, {pet.breed}, {pet.description}, {pet.skills}</p>
            })}
        </div>
    )
}
export default PetList;

