import React, {useState} from 'react';
import useCounter from '../../Hooks/useCounter';
import '../03-example/Style.css'
import Small from './Small';

const Momorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);
  

    return (
        <div>
           <h1>Momorize</h1> 
           <hr/>
            <h2>Counter : <Small value={counter}/> </h2>
            <button className='btn btn-primary' 
                    onClick={ increment }                    
                    >
                +1
            </button>

            <button className='btn btn-outline-primary ml-3'
                    onClick={ () => {
                        setShow(!show)
                    } }
                    >
                Show/Hide { JSON.stringify(show) } 
            </button>
        </div>
      );
}
 
export default Momorize;