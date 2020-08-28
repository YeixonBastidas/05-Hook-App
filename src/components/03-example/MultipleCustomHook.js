import React, { useEffect } from 'react';
import './Style.css';
import '..//../Hooks/useFetch'
import UseFect from '../../Hooks/useFetch';
import useCounter from '../../Hooks/useCounter';

const MultipleCustomHooks = () => {   

    const {counter, increment} = useCounter(1);
    const {loading, data} = UseFect(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

    return ( 
        <>
            <h1>Breaking Bad</h1>
            <hr/>
            {
                loading ?
                 <div className='alert alert-info text-center'>
                    Loading...
                 </div>  
                :
                <blockquote className='blockquote text-right'>
                    <p className='mb-0'>{ quote }</p>
                    <footer className='blockquote-footer'>{ author }</footer>
                </blockquote>              
            }
            
            <button className='btn btn-primary' onClick={ increment }>
                Siguiente Frase
            </button>
            
        </>
     );
}
 
export default MultipleCustomHooks;