import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {
  const {docId}=useParams()
  const {doctors}=useContext(AppContext)
  return (
    <div>
      
    </div>
  )
}

export default Appointment
