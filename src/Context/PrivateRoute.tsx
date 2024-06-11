import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AppContext } from './AppContext';

interface PrivateRouteProps {
    element: React.ReactNode;
    path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
    const { userName } = useContext(AppContext);

    return (
        <Route
            path={path}
            element={userName ? element : <Navigate to="/" replace />}
        />
    );
};

export default PrivateRoute;
