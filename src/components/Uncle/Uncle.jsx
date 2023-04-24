import React from 'react';
import '../GrandPa/GrandPa.css'
const Uncle = ({children}) => {
    return (
        <div className='grand-pa'>
            {children}
        </div>
    );
};

export default Uncle;