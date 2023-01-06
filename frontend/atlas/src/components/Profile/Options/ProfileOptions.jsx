import React from 'react'
import './profileOptions.css'
import ProfileOptionSettings from './ProfileOptionSettings'
import ProfileOptionSaved from './ProfileOptionSaved'
import ProfileOptionSubmitted from './ProfileOptionSubmitted'

const ProfileOptions = () => {
  return (
    <div className="profile-options-container">
        <div className="profile-options-wrapper">
            <ProfileOptionSettings/>
            <ProfileOptionSaved/>
            <ProfileOptionSubmitted/>
            <div className="profile-options-after"/>
        </div>
    </div>
  )
}

export default ProfileOptions