import React from 'react'
import './CSS/Loginsignup.css'
export default function Loginsignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
                    
        <div className="loginsignup-fields">
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsgnup-login'>Already have an account <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing,i agree to the terms of use and privacy policy </p>
        </div>
      </div>
      
    </div>
  )
}