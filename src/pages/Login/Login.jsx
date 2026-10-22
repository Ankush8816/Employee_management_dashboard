import react from 'react'
import Button from '../../components/common/button.jsx'
import './Login.css'



//login component
const Login = () =>{
    return(
       <>
       <div className='login-container'>
         <h2>Login here</h2>
         <form className='login-form'>
           <input type="text" placeholder="Username" />
           <input type="password" placeholder="Password" />
           <Button text="Login" onClickfunc={() => {}} />
         </form>
       </div>
       </> 
    )
}

export default Login