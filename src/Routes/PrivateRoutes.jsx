import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location)

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>

    }

    if(user){
    return children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;