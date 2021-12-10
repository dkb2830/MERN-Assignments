import React, { useState } from 'react';

const Form = (props) => {

    const [box, setBox] = useState([]);
    const [color, setColor] = useState('');

    const createBox = (e) => {
        e.preventDefault(e);

        setBox([...box,
        {
            color: color
        }
        ])
    };

    const styleBox = {
        height: "50px",
        width: "50px",
        border: "5px solid black",
        backgroundColor: color,
    }



    return (
        <div>
            <form onSubmit={createBox}>
                <div>
                    <label>Color:</label>
                    <input type="text" value="color" onChange={(e) => setColor(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
            {
                setBox.map((index) => (
                        <div style={styleBox} key={index}>

                        </div>

                    ))
            }
        </div>
    )
}

export default Form;


