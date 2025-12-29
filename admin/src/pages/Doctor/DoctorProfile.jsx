import React from 'react'

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
      
    </div>
  )
}

export default DoctorProfile
