import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Loader from '../components/reusable-components/Loader';

const PrivateRoute = ({ children }) => {

    const { loading, isAuthenticated } = useContext(AuthContext);

    if (loading) {
        return <Loader />;
    }

    if (!isAuthenticated) {
        // Redirect to home for unauthenticated users
        return <Navigate to="/" />;
    }

    // Allow access if authenticated
    return children;
}

export default PrivateRoute