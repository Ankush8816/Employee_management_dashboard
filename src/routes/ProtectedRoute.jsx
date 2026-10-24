import React from 'react'
import { Navigate } from 'react-router-dom'


//Approutes.jsx se protectedrouts ke anadr dashboard as children pass ho rha hai
const ProtectedRoute = ({children}) => {

const token = localStorage.getItem('token')

if(!token){
    return <Navigate to="/login" replace />
}

  return children
  
}

export default ProtectedRoute
