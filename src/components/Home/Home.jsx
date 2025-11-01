import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Home = () => {
    const authInfo = use(AuthContext);
    console.log(authInfo)
    return (
        <div className='text-center mt-50'>
            <h1 className='text-3xl text-yellow-100'>Welcome Bro!</h1>
            <h2 className='mt-5'>I hope you bought me a pizza..😃</h2>
        </div>
    );
};

export default Home;