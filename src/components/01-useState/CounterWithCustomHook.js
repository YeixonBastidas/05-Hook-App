import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './Counter.css'

const CounterWithCustomsHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return ( 
        <div>
            <h1>Counter With Hook: {state}</h1>
            <hr/>
            <button className="btn btn-primary" onClick={ () => increment(5)}>
                +1
            </button>
            
            <button className="btn btn-primary" onClick={() => decrement(3)}>
                -1
            </button>

            <button className="btn btn-primary" onClick={reset}>
                Reset
            </button>
        </div>
     );
}
 
export default CounterWithCustomsHook;