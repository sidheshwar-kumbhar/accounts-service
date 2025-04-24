import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, props }) => {
    return (
        (isAuthenticated) ? <Component {...props} /> : <Navigate to="/login" replace={true} />
    );
};

export default PrivateRoute;