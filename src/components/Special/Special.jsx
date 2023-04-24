import React from 'react';
import '../GrandPa/GrandPa.css'
const Special = ({children, money}) => {
    return (
        <div className='grand-pa'>
            <h4>{children}: {money}</h4>
        </div>
    );
};

export default Special;