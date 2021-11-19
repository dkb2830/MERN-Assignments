import React, { useState, useEffect } from 'react';
import axios from 'axios';

const bullet = {
    listStyleType: "circle",
    textTransform: "capitalize",
}
const Example = (props) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        console.log("Hello")
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            // .then(response => {
            //     return response.json()
            // })
            .then(response => {
                setState(
                    response.data.results
                )
            })
    }, []);
    return (
        <div>
            {state ? state.map((item, index) => {
                return (<div key={index}><li className={bullet}>{item.name}</li></div>)
            }) : null}
        </div>
    );
}

export default Example;