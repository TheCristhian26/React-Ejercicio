import React from 'react';
import Profile from '../data/briefcase.js';

export const PortafolioPage = () => {
  const profileData1 = Profile[0]; 
  const ProfileData2 = Profile[1];
  const ProfileData3 = Profile[2];

  return (

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={profileData1.img1} className="card-img-top" alt="Proyecto 1" />
            <div className="card-body">
              <h5 className="card-title">{profileData1.proyecto1}</h5>
              <p className="card-text">{profileData1.descripcion1}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={ProfileData2.img2} className="card-img-top" alt="Proyecto 2" />
            <div className="card-body">
              <h5 className="card-title">{ProfileData2.proyecto2}</h5>
              <p className="card-text">{ProfileData2.descripcion2}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={ProfileData3.img3} className="card-img-top" alt="Proyecto 3" />
            <div className="card-body">
              <h5 className="card-title">{ProfileData3.proyecto3}</h5>
              <p className="card-text">{ProfileData3.descripcion3}</p>
            </div>
          </div>
        </div>
      </div>
    
  )
}

