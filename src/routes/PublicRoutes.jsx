import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../components/providers/AuthProvider';

const PublicRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (!user) {
        return children;
    }

    return <Navigate to="/" />;
};

PublicRoutes.propTypes = {
    children: PropTypes.node.isRequired
};

export default PublicRoutes;
