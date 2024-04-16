import React from 'react';
import Profile from '../data/Contact';

export const ContactoPage = () => {
  const profileData = Profile[0]; 

  return (
    <form>
      <h1>Contacto</h1>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo electrónico:</label>
        <input type="email" className="form-control" id="email" defaultValue={profileData.correo} readOnly />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Número de teléfono:</label>
        <input type="text" className="form-control" id="phone" defaultValue={profileData.numero} readOnly />
      </div>
      <div className="mb-3">
        <label htmlFor="facebook" className="form-label">Facebook:</label>
        <input type="text" className="form-control" id="facebook" defaultValue={profileData.Facebook} readOnly />
      </div>
      <div className="mb-3">
        <label htmlFor="github" className="form-label">GitHub:</label>
        <input type="text" className="form-control" id="github" defaultValue={profileData.Github} readOnly />
      </div>
    </form>
    )
}
