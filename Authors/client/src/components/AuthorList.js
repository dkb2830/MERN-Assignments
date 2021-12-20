import React from 'react'
const AuthorList = (props) => {
    return (
        <div>
            {props.author.map((a, idx) => {
                return <p key={idx}>{a.name}</p>
            })}
        </div>
    )
}
export default AuhorList;

