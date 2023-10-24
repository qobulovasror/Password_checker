import React from 'react';

import { IInputExtendet } from '../interfaces/interfaces';

const Input: React.FC <IInputExtendet> = ({ pass, setPass, calculation }) => {
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setPass(event.target.value);
    }
    return (
        <>
            <input
                type="text"
                id='password'
                placeholder="Enter your password"
                value={pass}
                onChange={inputHandler}
                onKeyUp={calculation}
                className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' />
        </>
    )
}

export default Input