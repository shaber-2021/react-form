import React from 'react'
import { useState } from 'react';
import './Style.css'
export default function Event() {
  const [user,setuser]=useState({name:'',email:'',password:''})
  const {name,email,password}=user
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={((e)=>{console.log(user);e.preventDefault()})}>
        <div>
          <label htmlFor="name"> name : </label>
          <input type="text" name='name' id='name' value={name}
           onChange={((e)=>setuser({name:e.target.value,email,password}))} required/>
        </div>
        <div>
          <label htmlFor="email"> email : </label>
          <input type="text" name='email' id='email' value={email} 
          onChange={((e)=>setuser({name,email:e.target.value,password}))}required />
        </div>
        <div>
          <label htmlFor="password"> password : </label>
          <input type="password" name='password' id='password'value={password} 
          onChange={((e)=>setuser({name,email,password:e.target.value}))}/>
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  )
}
