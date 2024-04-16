import React from 'react';
import Profile from '../data/Experience.js';

export const ExperienciaPage = () => {
  const profileData = Profile[0]; 

  return (
    <div className="curriculum">
      <h1 className="curriculum-title">Experiencia</h1>
      <div className="experience">
        <h2 className="experience-title">{profileData.Experiencia}</h2>
        <div className="experience-details">
          <p className="entity">{profileData.Entidad}</p>
          <p className="company">{profileData.empresa}</p>
          <p className="years-worked">{profileData.Anos_trabajados} años trabajados</p>
        </div>
      </div>
    </div>
  )
}

