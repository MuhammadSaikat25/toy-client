import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SubView = () => {
    const data =useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default SubView;