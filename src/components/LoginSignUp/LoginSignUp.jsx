import React, { useState } from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import user_email from '../Assets/email.png'
import user_password from '../Assets/password.png'
const LoginSignUp = () => {

    const [action,setAction] = useState("Login")

  return (
    <div className='container'>
        <div className="header">
         <div className="text">{action}</div>
         <div className="underline"></div>
        </div>
      <div className="inputs">
        {action==="Login"?<div></div>:   <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name'/>


        </div>}

       
     
        <div className="input">
            <img src={user_email} alt="" />
            <input type="email"  placeholder='Email id'/>
            
        </div>
        <div className="input">
            <img src={user_password} alt="" />
            <input type="password" placeholder='Password '/>
            
        </div>
      </div>
      {
            action==="Sign Up"?<div></div>:   <div className="forgot-password">Lost password  ? <span>Click Here !</span></div>
        }
      <div className="submit-container">
        <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
        <div className={action==='Sign Up'?'submit gray':'submit'}  onClick={()=>{setAction('Login')}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignUp
