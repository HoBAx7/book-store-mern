import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminRoute = ({children}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const expireTime = localStorage.getItem('expireTime');

  if(!token || Date.now() > expireTime){
    Swal.fire({
      title: "Your session has been expired",
      confirmButtonText: "Re-login"
    }).then(() => navigate('/admin'));
    
  }
  return children? children : <Outlet /> 
}

export default AdminRoute
