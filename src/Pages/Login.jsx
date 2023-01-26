import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate()
  return (
    <div className="login">
        <h1 className='header'>Login</h1>
    <form action="submit" className='login-form'>
        <input type="email" placeholder='e-mail' className='input-fields'/>
        <input type="password" placeholder='password' className='input-fields'/>
        <button>Login</button>
    </form>
        <p onClick={()=>{navigate('/register')}}>Sign In?</p>
    </div>
  )
}

export default Login