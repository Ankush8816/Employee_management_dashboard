import react from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/button.jsx'
import './Login.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

//Schema for login form can be added here using yup
const loginSchema =yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
})

//login component
const Login = () =>{

const navigate = useNavigate();
    

//react-hook-form connection can be added here

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginSchema)
    })



//Authentication logic can be added here
const onSubmit = (data) => {
    console.log(data);
    

if(
    data.email === 'Ankushar143@gmail.com' && data.password === 'admin123'
)
    {   localStorage.setItem('token', 'dummy_token');
        alert('Login successful');
        navigate('/dashboard');
    }
    else
    {
        alert('Invalid credentials');
    }
}


    return(
       <>
       <div className='login-container'>
         <h2>Login here</h2>
         <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
           <label htmlFor="email">Email</label>
           <input id="email" type="email" placeholder="Email" {...register('email')} />
              <span className='error-message'>{errors.email?.message}</span>
           
           <label htmlFor="password">Password</label>
           <input id="password" type="password" placeholder="Password" {...register('password')} />
                <span className='error-message'>{errors.password?.message}</span>
           
           <Button text="Login" onClickfunc={() => {}} />
         </form>
       </div>
       </> 
    )
}

export default Login