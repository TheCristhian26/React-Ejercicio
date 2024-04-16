import React from 'react'
import Profile from '../data/Profile'

function ProfilePage() {
  const ProfileData = Profile.map(perfil =>{
    <ProfilePage img={perfil.img} nombres={ perfil.nombres } descripcion={perfil.descripcion} />
  })
  
  return (
    <>
    <h1>Mi perfil 
      { ProfileData }
    </h1>
    </>
  )
}

export default ProfilePage