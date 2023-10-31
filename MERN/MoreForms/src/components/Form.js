import React, { useState } from 'react'

const Form = (props) => {
    const {inputs, setInputs} = props;
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleErrors = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});

        if(e.target.name == 'firstName' || e.target.name == 'lastName'){
            if(e.target.value.length < 2 && e.target.value.length != 0){
                setErrors({...errors, [e.target.name]: "Name must be 2 characters or longer "});
            }
            else{
                setErrors({...errors, [e.target.name]: ""});
            }            
        }
        if(e.target.name == 'email'){
            if(e.target.value.length < 5 && e.target.value.length != 0){
                setErrors({...errors, [e.target.name]: "Email must be 2 characters or longer "});
            }
            else{
                setErrors({...errors, [e.target.name]: ""});
            }
        }
        if(e.target.name == 'password' || e.target.name == 'confirmPassword'){
            
            
            if((e.target.value.length < 8 && e.target.value.length != 0) ){
                
                setErrors({...errors, [e.target.name]: "Passward must be 8 characters or longer"});
            }
            else{
                setErrors({...errors, [e.target.name]: ""});
            }
        }
    };
    return (
        
        <div>
            <h2>More Form</h2>
            <div>
                <label htmlFor="firstName">First Name: </label> 
                <input type="text" onChange={ handleErrors } name="firstName" />
                {
                    errors.firstName ?
                    <p > { errors.firstName }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label> 
                <input type="text" onChange={ handleErrors } name="lastName"/>
                {
                    errors.lastName ?
                    <p > { errors.lastName }</p> :
                    ''
                }
            </div>
            <div >
                <label htmlFor="email">Email: </label> 
                <input type="email" onChange={ handleErrors } name="email"/>
                {
                    errors.email ?
                    <p > { errors.email }</p> :
                    ''
                }
            </div>
            <div >
                <label htmlFor="password">Password: </label> 
                <input type="password" onChange={ handleErrors } name="password"/>
                {
                    errors.password ?
                    <p > { errors.password }</p> :
                    ''
                }
            </div>
            <div >
                <label htmlFor="confirmPassword">Confirm Password: </label> 
                <input type="password"  onChange={ handleErrors } name="confirmPassword"/>
                {
                    errors.confirmPassword ?
                    <p > { errors.confirmPassword }</p> :
                    ''
                }
            </div>
            <div>
                {
                    (inputs.password != inputs.confirmPassword) ?
                    <p > Password and Confirm Password must be the same</p> :
                    ''
                }
            </div>
        </div>
    )
}

export default Form