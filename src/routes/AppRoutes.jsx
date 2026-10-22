import react from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/Login.jsx'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}




export default AppRoutes