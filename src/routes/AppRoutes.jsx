import react from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/Login.jsx'
import Dashboard from '../pages/Dashboard/Dashboard.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import EmployeeList from '../pages/EmloyeeList/EmployeeList.jsx'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/employees" element={<ProtectedRoute><EmployeeList /></ProtectedRoute>} />
        </Routes>
    </BrowserRouter>
  )
}




export default AppRoutes