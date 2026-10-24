import react from "react";
import {useNavigate} from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
      }
  return (
    <><div>
      <h1>Welcome to our dashboard</h1>
      <button onClick={handleLogout}> Logout</button>
    </div></>
  )
}

export default Dashboard
