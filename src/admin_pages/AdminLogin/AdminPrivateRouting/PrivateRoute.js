// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ path, ...props }) => {
  const { isAdminLoggedIn } = useAuth();

  return isAdminLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
