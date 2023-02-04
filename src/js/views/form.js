// Importación, useState para mantener el estado del componente, useContext para acceder al contexto de la aplicación y Navigate de react-router-dom para redirigir a otras páginas.

import React, {useState, useContext} from "react"; 
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"



export const Form = () => {
//useState para definir dos variables de estado: email y password.
   const[email,setEmail]=useState("") 
   const[password,setPassword]=useState("")
//useContext para acceder al contexto de la aplicación, que incluye un almacén (store) y acciones.
   const {store, actions}=useContext(Context)
//Se define una función llamada enviarDatos que se activa cuando se envía el formulario. Esta función evita que la página se recargue, llama a la acción "login" en el contexto de la aplicación y establece las variables de estado de email y password en ""
   function enviarDatos(e) {
    e.preventDefault()
    actions.login(email,password)
    setEmail("")
    setPassword("")
    console.log (email,password)
    }

    
    // Se devuelve un componente formulario que permite al usuario ingresar su correo electrónico y contraseña. Si el valor de "store.auth" es verdadero, el componente redirigirá a la página "/demo". Si no, se mostrará el formulario para que el usuario pueda ingresar su información de inicio de sesión.
    return (
        <>
        {store.auth === true ? <Navigate to="/"/>:
        <form className="w-50 mx-auto" onSubmit={enviarDatos}>
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
            Login
          </button>
        </form>}
        </>
        
      );
    };
    