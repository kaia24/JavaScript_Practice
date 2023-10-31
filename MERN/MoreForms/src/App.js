import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';

function App() {

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    return (
        <div className='App'>
            <Form inputs={state} setInputs={setState}></Form>
        </div>
    );
}

export default App;
