import {useState, useEffect, useRef} from 'react';


const UseFect = (url) => {
    const isMounterComponent = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(()=>{
        return () => {
            isMounterComponent.current = false;
        }
    }, [])

    useEffect(() =>{
        setState({data: null, loading: true, error: null});

        fetch(url)
        .then(result => result.json())
        .then(data => {

            if(isMounterComponent.current) {
                setState({
                    loading: false,
                    error: null,
                    data
                })
            } else {
                console.log('No se llamo el setState')
            }         

        });

    }, [url])

    return state;

}
 
export default UseFect;