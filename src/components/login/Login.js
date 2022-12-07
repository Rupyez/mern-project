import React, { useState } from 'react';
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

//function for sign in button
const signIn =(e)=>{
e.preventDefault()
}


//function for register button

const register =(e)=>{
    e.preventDefault();
}

  return (
 

<div className='login'>
<Link to ='/'>
<img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
</Link>

<div className='login_container'>
    <h1 className='login_heading'>Sign-In</h1>

    <fom>
        <h5>Email</h5>
        <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

        <h5>Password</h5>
        <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>


        <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
        <p>By signing-in you agree to conditions of Use and Sale.</p>
       <button onClick={register} className='login_registerButton'>Create Your Account</button>

    </fom>
</div>

    
    </div>
  )
}

export default Login