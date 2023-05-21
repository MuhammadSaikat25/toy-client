import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import useTitle from '../useTitle';


const Home = () => {
    
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;