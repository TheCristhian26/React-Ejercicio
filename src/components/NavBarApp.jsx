
import { NavLink } from "react-router-dom";
export const NavBarApp=()=>{
    return(
    <>
    
  <div style={{ backgroundColor: 'turquoise', color: 'white', padding: '5px' }}></div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundImage: 'url("background_image_url")' }}>
            <div className="container-fluid" style={{backgroundColor:'cadetblue'}}>
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Perfil
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacto" className="nav-link">
                                Datos Contacto
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/formacion" className="nav-link">
                                Formacion Academica
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/experiencia" className="nav-link">
                                Experiencia
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portafolio" className="nav-link">
                                Portafolio
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
        <div style={{ backgroundColor: 'turquoise', color: 'white', padding: '5px' }}></div>
</>
    );
};