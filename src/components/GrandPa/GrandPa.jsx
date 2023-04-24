import React, { useState } from 'react';
import './GrandPa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
const GrandPa = () => {
    const [money, setMoney] = useState(0);
    const sendToSpecial = ()=>{
            setMoney(money + 1000)
    }
    return (
        <>
        <h1 className='text-align'>GrandPa</h1>
        <div className='text-align'>
        <button className='btn' onClick={sendToSpecial}>Transfer Money</button>
        </div>
        <div className='grand-pa'>
            <Father money={money}>Father</Father>
            <Uncle>Uncle</Uncle>
            <Aunty>Aunty</Aunty>
        </div>
        </>
    );
};

export default GrandPa;