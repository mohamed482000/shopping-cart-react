import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './forms.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEyeSlashFill , BsEyeFill } from "react-icons/bs";
function LogIn() {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [showPassword , setShowPassword] = useState(false)
  //form submit handler
  const formSubmitHandler = (e) =>{
     e.preventDefault()
     if (email.trim() == '') return toast.error('Email Is Required')
     if (password.trim() == '') return toast.error('Password Is Required')

  }
  //show password handler
  const ShowPasswordHandler = () =>{
    setShowPassword(!showPassword)
  }

  return (
    <div className="form-wrapper">
      <ToastContainer theme='colored'/>
      <h1 className="form-title">Login To Your Acount</h1>
      <form  className="form" onSubmit={formSubmitHandler}>
        <input type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} placeholder='Email'  />
        <input 
        type={showPassword ? 'text ' : 'password'} 
        placeholder='Password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        />
        {showPassword ?  <BsEyeSlashFill onClick={ShowPasswordHandler} className='show-password-icon'/> : <BsEyeFill onClick={ShowPasswordHandler} className='show-password-icon'/>}
        
        
        <button className="form-btn">
          Login
        </button>
        <div className="form-footer">
          Don't have an acount ?{''}
          <NavLink to='/register' className="form-link">
          Register 
          </NavLink>
        </div>

      </form>
    </div>
  )
}

export default LogIn