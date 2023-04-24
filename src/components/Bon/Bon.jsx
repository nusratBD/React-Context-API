import React from 'react';
import '../GrandPa/GrandPa.css'
const Bon = ({children}) => {
    return (
        <div className='grand-pa'>
            {children}
        </div>
    );
};

export default Bon;