import React, {} from 'react';
import { IDetalies } from '../interfaces/interfaces';


const Checker: React.FC <IDetalies> = ({pass, passDetalies}) => {    
    return(
        <>
            <ul className="list-disc">
                <li>Parol uzunligi: {pass.length}</li>
                <li>Raqamlar soni: {passDetalies.nums}</li>
                <li>Katta harflar soni: {passDetalies.uppLetter}</li>
                <li>Kichik harflar soni: {passDetalies.lowerLetter}</li>
                <li>Belgilar soni: {passDetalies.chars}</li>
            </ul>
        </>
    )
}

export default Checker;