import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"




export const Form1 = () => {
   const[name,setName]=useState("")
   const[surname,setSurname]=useState("")
   const[email,setEmail]=useState("")
   const[password,setPassword]=useState("")
   const {store, actions}=useContext(Context)

  function enviarDatos(e) {
    e.preventDefault()
    actions.signup(name,surname,email,password)
    setName("")
    setSurname("")
    setEmail("")
    setPassword("")
    console.log (name,surname,email,password)
    }
    return (
        <>
        {store.auth === true ? <Navigate to="/demo"/>:
        <form className="w-50 mx-auto" onSubmit={enviarDatos}>
          <div>
          <label htmlFor="exampleInputName" className="form-label">
          Name 
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div>
          <label htmlFor="exampleInputSurname" className="form-label">
          Surname 
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputSurname"
              aria-describedby="surnameHelp"
              value={surname}
              onChange={(e)=>setSurname(e.target.value)}
            />
          </div>
          <div className="mb-3 container">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type="signup" className="btn btn-primary">
            Signup
          </button>
        </form>}
        </>
        
      );
    };
    