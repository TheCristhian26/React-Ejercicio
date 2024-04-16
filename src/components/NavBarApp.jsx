
import React from "react";
import { NavLink } from "react-router-dom";
export const NavBarApp = () => {
  return (
    <>
    <div className="bg-turquoise text-white p-3">
      <nav className="navbar navbar-expand-lg bg-cadetblue rounded-5 p-3">
        <div className="container-fluid">
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
                <NavLink to="/Formacion" className="nav-link">
                  Formación Académica
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contacto" className="nav-link">
                  Datos de Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Experiencia" className="nav-link">
                  Experiencia
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Portafolio" className="nav-link">
                  Portafolio
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
    
    </>
    )
}