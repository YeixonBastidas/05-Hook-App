import React from 'react';
import './effects.css';
import UseFrom from '../../Hooks/useForm';

const FormWithCustomHook = () => {

    const [formState, setFormState] = UseFrom({
        name: '',
        email:'',
        password : ''
    });

    const {name, email, password} = formState;      
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return (  
        <form onSubmit={handleSubmit}>
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
                    onChange= {setFormState}
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
                    onChange= {setFormState}
                />
            </div>

            <div className="form-group">
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='*****'
                    value={ password }
                    onChange= {setFormState}
                />
            </div>

           <button type="submit" className="btn btn-primary">
               Guardar
           </button>
        </form>
    );
}
 
export default FormWithCustomHook;
