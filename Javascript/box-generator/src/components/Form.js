import React, {useState} from 'react';

const Form = (props) => {
    const [color, setColor] = useState('');

    const createBox = (e) => {
        e.preventDefault();

        const newBox = {
            color: color
        };
    };

    const box = {
        height: "50px",
        width: "50px",
        border: "5px solid black",
        backgroundColor: "color",
    }



    return (
        <>
        <form onSubmit = {createBox}>
            <div>
                <label>Color:</label>
                <input type="text"  onChange= {(e) => setColor(e.target.value) }/>
            </div>
            <div>
                <input type="submit" value="Add"/>
            </div>
        </form>
        <div style= {box}>

        </div>
        </>
    );
};

export default Form;


