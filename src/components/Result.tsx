import React, {useEffect, useState} from 'react';
import { IDetalies } from '../interfaces/interfaces';
import renderTimes from '../services/renderTime';

const Result: React.FC <IDetalies> = ({pass, passDetalies}) => {
    const [time, setTime] = useState("")
    useEffect(()=>{
        setTime(renderTimes(pass, passDetalies))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pass])
    return(
        <>
            {
                (!time)?
                <h1>Bir zumda</h1>:
                <h1>{time} vaqtda!</h1>
            }
        </>
    )
}

export default Result;


/*

number 2 25 240 2460 21600 

*/