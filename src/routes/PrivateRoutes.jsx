import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


const PrivateRoutes = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const location = useLocation();
    if(loading)
    {
        return <div><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        </div>
        
    }
    if(user){
        return children;
    }

    
    return <Navigate state={location.pathname} to="/login"></Navigate>;

};

export default PrivateRoutes;

PrivateRoutes.propTypes ={
    children: PropTypes.node
}
