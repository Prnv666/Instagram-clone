import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    

  return (
    <div className='login'>
      <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="" />
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Your Email' />
      <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder='password'/>
      <button>Login</button>
    </div>
  )
}

export default Login

