import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName ] = useState('');
    const [lastName, setLastName ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmation
        };
        console.log('Welcome', newUser);
        setFirstName(" ");
        setLastName(" ");
        setEmail(" ");
        setPassword(" ");
        setConfirmation(" ");
    };
    return(
        <form onSubmit = {createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" onChange = { (e) => setFirstName(e.target.value)} value={firstName}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange = { (e) => setLastName(e.target.value)} value={lastName}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange = { (e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="text" onChange = { (e) => setPassword(e.target.value)} value={password}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="text" onChange = { (e) => setConfirmation(e.target.value)} value={confirmation}/>
            </div>
            <input type="submit" value="Create User"/>
        </form>
    );
};

export default Form;