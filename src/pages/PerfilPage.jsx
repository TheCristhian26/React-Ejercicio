import React from 'react';
import Profile from '../data/Profile.js';

export const PerfilPage = () =>{
  const profileData = Profile[0]; 

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Perfil</h5>
        <img className="card-img-left" src={profileData.img} alt="" width={'300'} height={'300'} />
        <h6 className="card-subtitle mb-2 text-muted">{`${profileData.nombres} ${profileData.apellidos}`}</h6>
        <p className="card-text">{profileData.descripcion}</p>
      </div>
    </div>
    
    )
}

