import React, { useEffect, useState } from 'react';

const Message = () => {

    const [coors, setCoors] = useState({x : 0, y: 0});

    useEffect(() => {
        console.log('Componente montado');
        const mouseMove = (e) => {
            let coors = {x : e.x, y: e.y};
            setCoors(
                coors
            )
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            console.log('Componente Des montado')
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return ( 
        <>
            <h3>Eres Genial, puto!! x: {coors.x} - y:{coors.y}</h3>
        </>
     );
}
 
export default Message;