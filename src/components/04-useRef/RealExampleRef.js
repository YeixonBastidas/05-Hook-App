import React, {useState} from 'react';
import '../03-example/Style.css'
import MultipleCustomHooks from '../03-example/MultipleCustomHook';

const RealExampleRef = () => {
    const [show, setShow] = useState(false);    

    return ( 
        <div>
            <h1>Ref en uso</h1>
            <hr/>

           {show && <MultipleCustomHooks/>} 

           <button 
                className='btn btn-primary mt-5'
                onClick={()=>{
                     setShow(!show);              
                    
                }}>
               Show/Hide
           </button>
        </div> 
        );
}
 
export default RealExampleRef;