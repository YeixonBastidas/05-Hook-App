import React, { useEffect } from 'react';
import './effects.css';
import { useState } from 'react';
import Message from './Message'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email:''
    });

    const {name, email} = formState;

    useEffect(() => {
        console.log("se ejecuto el useefect")
    }, [])

    const hanldeInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (  
        <>
            <h1>Use-Effect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange= {hanldeInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete='off'
                    value={ email }
                    onChange= {hanldeInputChange}
                />
            </div>

            {(name === '123') && <Message/>}
        </>
    );
}
 
export default SimpleForm;
