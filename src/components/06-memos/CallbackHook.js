import React, {useState, useCallback} from 'react';
import '../03-example/Style.css';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((num)=> {
        setCounter(c => c + num);
    },[setCounter])

    return ( 
        <div>
            <h1> use Callback </h1>
            <hr/>
            <h3>Counter: {counter}</h3>
            <ShowIncrement increment={increment}/>
        </div>
     );
}
 
export default CallbackHook;