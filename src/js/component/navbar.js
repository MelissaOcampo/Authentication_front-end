import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store,actions} = useContext(Context); //Se utiliza el hook useContext de React para obtener acceso al almacén de la aplicación y a sus acciones.
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" style={{width:"90px"}} alt=""/>
			</Link>
			<Link to="/demo">
					</Link>
			<div className="dropdown">
			{/* Cada botón es un enlace que redirige a una vista diferente en la aplicación (Signup y Login.) */}
			<Link to="/registrar">
			<button type="button" className="btn btn-secondary m-2">
    Signup
  </button>
  </Link>
			<Link to="/vista">
			<button type="button" className="btn btn-secondary m-2">
    Login
  </button>
  </Link>
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
