import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

export default function Account() {
  const navigate = useNavigate()
  var {user, logout} = UserAuth();
  async function handleLogOut(){
    try{
      await logout();
      console.log("Logged out")
      navigate("/")
    }
    catch(e){
      console.log(e.message)
    }
  }
  return (
    <div>
      <h1> This is an Account tab.</h1>
      <h3>We store your account here.</h3>
      <h5>Email: {user&&user.email}</h5>
      <button onClick={handleLogOut}>Log out</button>
      <Link to="/sign-up">AAAA</Link>
    </div>
  )
}
