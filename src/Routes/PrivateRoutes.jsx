import React, { Children, use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = () => {
    const {user} = use(AuthContext);
    if(user){
        return Children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;