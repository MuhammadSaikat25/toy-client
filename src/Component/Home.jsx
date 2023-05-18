import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;