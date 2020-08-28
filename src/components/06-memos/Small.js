import React, {memo} from 'react';

const Small = ({value}) => {
    console.log('se volvio a llamar :(')

    return ( 
        <small>
            {value}
        </small>
     );
}
 
export default memo(Small);