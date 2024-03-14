import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

export default function LogIn() {
  var [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  var [error, setError] = useState('');
  const navigate = useNavigate();
  const {signIn} = UserAuth()
  const divClasses = "d-flex flex-row justify-content-center align-items-center m-1 p-1"
  async function submitLogInForm(e) {
    setError('')
    e.preventDefault();
    try{
      await signIn(credentials);
      navigate("/account")
    }
    catch(e){
      console.log(e.message)
      setError(e.message)
    }
  }
  return (
    <div>
    <form onSubmit={submitLogInForm}
      className='row d-flex flex-column justify-content-center align-items-center'
    >
      <div className={divClasses}>
        <label htmlFor='email' className='col-3 text-center'>
          Email:
        </label>
        <input type='email' className='col-8 col-sm-5 col-md-3' value={credentials.email}
          onChange={(e) => {
            setCredentials(prev => {
              return {
                ...prev,
                email: e.target.value
              }
            })
          }}
        />
      </div>
      <div className={divClasses}>
        <label className='col-3 text-center'>
          Password:
        </label>
        <input type='password' className='col-8 col-sm-5 col-md-3' value={credentials.password}
          onChange={(e) => {
            setCredentials(prev => {
              return {
                ...prev,
                password: e.target.value
              }
            })
          }}
        />
      </div>
      <input type='submit' className='col-3 col-sm-2 col-md-1 px-md-2' />
    </form>
    <p>
      Don't have an account? <Link to="/sign-up">Sign up</Link>
      </p>
    </div>
  )
}
