import { useState } from "react";

const UseFrom = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const hanldeInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, hanldeInputChange];
}
 
export default UseFrom;

