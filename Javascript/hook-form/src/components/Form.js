import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState('');
    const [firstError, setFirstError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastError, setLastError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const submitHandler = (e) => {  
            e.preventDefault();  
            const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmation
        };
        console.log(newUser);
    };
    //     console.log('Welcome', newUser);
    const firstNameError = (e) => {
        if (e.target.value.length < 2) {
            setFirstError("First Name must be at least 2 characters!");
        }
        else {
            setFirstError(" ");
        }
    }

    const lastNameError = (e) => {
        if (e.target.value.length < 2) {
            setLastError("First Name must be at least 2 characters!");
        }
        else {
            setLastError(" ");
        }
    }

    const emailaddError = (e) => {
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        }
        else {
            setEmailError(" ");
        }
    }
    const passwordBadError = (e) => {
        if (e.target.value.length < 8) {
            setPasswordError("Passwprd must be at least 8 characters!");
        }
        else {
            setPasswordError(" ");
        }
    }
    const passwordMatchError = (e) => {
        if (password === confirmation){
            setConfirmError(" ");
        }
        else {
            setConfirmError("Password does not match");
        }
    }




// setLastName(" ");
// setEmail(" ");
// setPassword(" ");
// setConfirmation(" ");
    return (
        <form onSubmit = {(e) => submitHandler(e)}>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                {firstError ?
                    <p>{firstError}</p>:null}
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
                {
                    lastError ?
                    <p>{lastError}</p>:null
                }
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                {
                    emailError ?
                    <p>{emailError}</p>:null
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {
                    passwordError?
                    <p>{passwordError}</p>:null
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" name="confirmation" value={confirmation} onChange={(e) => setConfirmation(e.target.value)}/>
                {
                    confirmError?
                    <p>{confirmError}</p>:null
                }
            </div>
                <input type="submit" value="Create User" />
            
        </form>
    );
}

export default Form;