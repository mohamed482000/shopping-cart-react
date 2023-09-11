import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './forms.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEyeSlashFill , BsEyeFill } from "react-icons/bs";

function Register() {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [userName , setUserName] = useState('')
  //form submit handler
  const formSubmitHandler = (e) =>{
     e.preventDefault()
     if (email.trim() == '') return toast.error('Email Is Required')
     if (password.trim() == '') return toast.error('Password Is Required')
     if (userName.trim() == '') return toast.error('userName Is Required')

  }

  return (
    <div className="form-wrapper">
      <ToastContainer theme='colored'/>
      <h1 className="form-title">Create New Acount</h1>
      <form  className="form" onSubmit={formSubmitHandler}>
        <input type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} placeholder='Email'  />
        <input type="text" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} placeholder='userName'  />
        <input 
        type= 'password'
        placeholder='Password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-btn">
          Register
        </button>
        <div className="form-footer">
          already have an acount ?{''}
          <NavLink to='/login' className="form-link">
          login 
          </NavLink>
        </div>

      </form>
    </div>
  )
}

export default Register