import React from 'react'
import loginStyle from '../styles/login.module.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className={`${loginStyle.jobLoginContainer}`}>
        <h2   className={`${loginStyle.jobLoginContent}`}>Login</h2>
        <br />
        <br />
        <input  className={`${loginStyle.jobLoginInput}`} type="email" placeholder='username'/>
        <br />
        <br />
        <input  className={`${loginStyle.jobLoginInput}`} type="password" placeholder='password'/>
        <br />
        <br />
        <Link to='/home'><button  className={`${loginStyle.jobLoginBtn}`}>SUBMIT</button></Link>
    </div>
  )
}

export default Login