import React, { use } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const {docId}=useParams()
  const {doctors,currencySymbol}=useContext(AppContext)
  const [docInfo,setDocInfo]=useState(null)
  const [docSlots,setDocSlots]=useState([])
  const[slotIndex,setSlotIndex]=useState(0)  
  const [slotTime,setSlotTime]=useState('')
  const fetchDocInfo=async ()=>{
    const docInfo=doctors.find(doc=>doc._id===docId)
    setDocInfo(docInfo)
    
  }
  const getAvabileSlots=async()=>{
    setDocSlots([])
    //getting current data
    let today=new Date()

    for(let i=0;i<7;i++){
      //getting date with index
      letcurrentDate=new Date(today)
      currentDate.setDate(today.getDate()+i)
      //setting end times of data with index
      let endTime=new Date(currentDate)
      endTime.setDate(today.getDate()+1)
      endTime.setHours(21,0,0,0)
      //second hours
if(today.getHours()===currentDate.getDate){
currentDate.setHours(today.getHours()>10? currentDate.getHours()+1:10)
  }
}
}



  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])
  useEffect(()=>{
    getAvabileSlots()
  },[docInfo])



  return docInfo && (
    <div>
      {/*----------------------Doctor Info----------------------*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0-mt-[-80px] sm:mt-0'>
          {/*--------------Doc Info:name,degree,experience---------*/}
          <p className='flex items-center gap-2 text-2xl font-medium text bg-gray-900'>{docInfo.name}<img className='w-5' src={assets.verified_icon}/></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree}-{docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text -xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/*--------------Doctor About------------------------------*/}
<div>
  <p className='flex-items-center gap-1 text-sm front-medium text-gry-900 mt-3'>About <img src={assets.info_icon} alt=""/></p>
  <p className='text-sm text-gray-500-max-w-{700}mt-1'>
    {docInfo.about} 
  </p>
</div>
<p className='text-gray-500 font-medium mt-4'>
  Appointment fee:<span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
</p>
        </div>
      </div>
    </div>
  )
}

export default Appointment
