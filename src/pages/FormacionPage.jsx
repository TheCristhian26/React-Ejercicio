import React from 'react';
import Profile from '../data/Training.js';

export const FormacionPage = () => {
  const profileData = Profile[0]; 

  return (
    <form>
  <h1>Formación</h1>
  <div className="mb-3">
    <label htmlFor="school" className="form-label">Colegio:</label>
    <input type="text" className="form-control" id="school" defaultValue={profileData.Colegio} readOnly />
  </div>
  <div className="mb-3">
    <label htmlFor="schoolEndDate" className="form-label">Fecha de terminación del colegio:</label>
    <input type="text" className="form-control" id="schoolEndDate" defaultValue={profileData.fecha_de_terminacion} readOnly />
  </div>
  <div className="mb-3">
    <label htmlFor="university" className="form-label">Universidad o instituto:</label>
    <input type="text" className="form-control" id="university" defaultValue={profileData.Universidad_o_instituto} readOnly />
  </div>
  <div className="mb-3">
    <label htmlFor="universityDate" className="form-label">Fecha de graduación de la universidad o instituto:</label>
    <input type="text" className="form-control" id="universityDate" defaultValue={profileData.fecha} readOnly />
  </div>
</form>

  );
}
