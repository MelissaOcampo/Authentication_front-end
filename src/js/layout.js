import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
//Importación de componentes y vistas que se usarán en la aplicación.
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Detalles } from "./views/detalles";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer"; 
import { Form } from "./views/form";
import { Form1 } from "./views/form1";


const Layout = () => { 
	const basename = process.env.BASENAME || "";

	return (
		<div> 
			 {/* Dentro de la función, se crea un objeto de navegación de "BrowserRouter" y se establece su atributo "basename". */}
			<BrowserRouter basename={basename}> 
			{/* Dentro del objeto de navegación, se envuelve todo en un componente "ScrollToTop". se usa para hacer que la página se desplace hacia la parte superior cuando el usuario navega a una nueva ruta. */}
				<ScrollToTop>
				{/* Se renderiza un componente "Navbar" y se definen las diferentes rutas de la aplicación utilizando el componente "Routes" y los componentes "Route". Cada ruta establece un camino y el componente asociado que se renderizará cuando el usuario acceda a ese camino. */} 
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/form" element={<Form />} />
						<Route path="/form1" element={<Form1 />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/detalles" element={<Detalles />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					{/* Tambien se renderiza un componente en este caso el "Footer". */}
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		
		</div>
	);
};

export default injectContext(Layout);
