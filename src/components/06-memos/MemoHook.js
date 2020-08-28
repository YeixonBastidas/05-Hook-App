import React, {useState, useMemo} from 'react';
import useCounter from '../../Hooks/useCounter';
import procesoPesado from '../../helpers/ProcesoPesado';
import '../03-example/Style.css'

const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);
  
    

    const ejecutarProceso = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
           <h1>Use Memo</h1> 
           <hr/>
            <h2>Counter : <small>{counter}</small> </h2>

            <p>
                {ejecutarProceso}
            </p>
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
 
export default MemoHook;