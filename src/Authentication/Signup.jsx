import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("") 

  return (
    <div className='signup'>
      <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="" />
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Your Email' />
      <input value={name}  onChange={(e)=>setName(e.target.value)} type="text" placeholder='User Name' />
      <input value={pass}  onChange={(e)=>setPass(e.target.value)} type="password" placeholder='password'/>
      <button>Sign Up</button>
    </div>
  )
}

export default Signup
