import React from 'react';
import  { Routes, Route }  from 'react-router-dom';
import { NavBarApp } from './components/NavBarApp';
import { ContactoPage } from './pages/ContactoPage';
import { ExperienciaPage } from './pages/ExperienciaPage';
import { FormacionPage } from './pages/FormacionPage';
import { PortafolioPage } from './pages/PortafolioPage';
import { PerfilPage } from './pages/PerfilPage';
import "./App.css" 

export const App = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6">
            <NavBarApp/>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={ <PerfilPage/> }> </Route>
        <Route path='/Formacion' element={ <FormacionPage/> }> </Route>
        <Route path='/Experiencia' element={ <ExperienciaPage/>  }> </Route>
        <Route path='/Contacto' element={ <ContactoPage/> }> </Route>
        <Route path='/Portafolio' element={ <PortafolioPage/> }> </Route>
      </Routes>
    </>
  )
}