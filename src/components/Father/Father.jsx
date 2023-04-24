import React from 'react';
import '../GrandPa/GrandPa.css'
import Ami from '../Ami/Ami';
import Vai from '../Vai/Vai';
import Bon from '../Bon/Bon';

const Father = ({children, money}) => {
    return (
        <div className='grand-pa'>
            {children}
            <Ami money={money}>Ami</Ami>
            <Vai>Vai</Vai>
            <Bon>Bon</Bon>
        </div>
    );
};

export default Father;