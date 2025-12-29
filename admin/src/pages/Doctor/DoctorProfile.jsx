import React from 'react'
import { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext.jsx'
import { AppContext } from '../../context/AppContext.jsx'


const DoctorProfile = () => {

  const { dToken, profileData, setProfileData, getProfileData } = useContext(DoctorContext)
  const { currency, backendUrl } = useContext(AppContext)
  
  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])

  return (
    <div>
      doctor profile
    </div>
  )
}

export default DoctorProfile
