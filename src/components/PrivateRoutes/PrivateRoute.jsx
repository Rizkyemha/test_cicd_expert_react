import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function PrivateRoute() {
  const { isLogin } = useSelector((state) => state.auth);
  return isLogin ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
