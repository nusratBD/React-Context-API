import React from 'react';
import '../GrandPa/GrandPa.css'
import Special from '../Special/Special';
const Ami = ({children, money}) => {
    console.log(money);
    return (
        <div className='grand-pa'>
            {children}
            <Special money={money}>Special</Special>
        </div>
    );
};

export default Ami;