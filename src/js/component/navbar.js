import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const {store,actions} = useContext(Context); //Se utiliza el hook useContext de React para obtener acceso al almacén de la aplicación y a sus acciones.
	const navigate = useNavigate()
	function handleLogout() {
		actions.logout()//cerrar la sesion
		navigate("/")//usamos navigate para redireccionar

	}
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" style={{width:"90px"}} alt=""/>
			</Link>
			<Link to="/demo">
					</Link>
			<div className="dropdown">
			{/* Cada botón es un enlace que redirige a una vista diferente en la aplicación (Signup y Login.) */}

{/* boton de registrarse */}

{store.auth === false? <Link to={"/form1"} className="btn btn-secondary m-2"
			>
    Signup
		</Link> : null } 



  {/* botón de iniciar sesión */}
			{store.auth === false? <Link to={"/form"} className="btn btn-secondary m-2"
			>
    Login
		</Link> : null } 




  {/* botón de cerrar sesión */}
			{store.auth=== true? <button type="button" className="btn btn-secondary m-2" onClick={handleLogout}>
    Logout
  </button > :null }





  {/* botón de favoritos */}
  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
  {store.favoritos.map((element, index) =><li className="dropdown-item" key={index}><button onClick={()=> actions.eliminarFavoritos(element)}  type="button" key={index}>{element}<i className="fa fa-trash"></i></button></li>
                    )}
					
  </ul>
</div>
		</nav>
	);
};
