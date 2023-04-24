import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <div className='layout'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;