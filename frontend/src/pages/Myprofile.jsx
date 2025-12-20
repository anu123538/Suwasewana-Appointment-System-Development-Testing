import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from "../assets/assets";
import axios from 'axios';
import { toast } from 'react-toastify';



const Myprofile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)
  
  const updateUserProfilData = async () => {
    try {
      const formData = new FormData()
      formData.append("name", userData.name)
      formData.append("phone", userData.phone)
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender)
      formData.append("dob", userData.dob)
     
      image && formData.append("image", image)

      const { data } = await axios.post(backendUrl + '/api/user/update-profile',formData, {headers: { token }})
        
      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


 

 return (
  userData && (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">👤</span>
            <h1 className='text-4xl md:text-5xl font-bold text-[#27AE60]'>
              My Profile
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Manage your personal information and preferences</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Profile Header Section */}
          <div className="bg-gradient-to-r from-[#27AE60] to-[#229954] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Profile Picture */}
              <div className="relative">
                {isEdit ? (
                  <label htmlFor="image" className="cursor-pointer group">
                    <div className="relative">
                      <img
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl group-hover:opacity-75 transition-opacity duration-300"
                        src={image ? URL.createObjectURL(image) : userData.image}
                        alt=""
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📸</div>
                          <p className="text-sm font-semibold">Change Photo</p>
                        </div>
                      </div>
                      {!image && (
                        <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg">
                          <img className="w-6 h-6" src={assets.upload_icon} alt="" />
                        </div>
                      )}
                    </div>
                    <input
                      onChange={(e) => setImage(e.target.files[0])}
                      type="file"
                      id="image"
                      hidden
                    />
                  </label>
                ) : (
                  <img 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl" 
                    src={userData.image} 
                    alt="" 
                  />
                )}
              </div>

              {/* Name Section */}
              <div className="flex-1 text-center md:text-left">
                {isEdit ? (
                  <input
                    className="bg-white/20 backdrop-blur-sm text-3xl md:text-4xl font-bold text-white placeholder-white/70 px-4 py-2 rounded-xl border-2 border-white/30 focus:border-white focus:outline-none w-full max-w-md transition-all duration-300"
                    type="text"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                ) : (
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    {userData.name}
                  </h2>
                )}
                <p className="text-white/90 text-lg flex items-center justify-center md:justify-start gap-2 mt-2">
                  <span>✉️</span> {userData.email}
                </p>
              </div>
            </div>
          </div>

          {/* Information Sections */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Contact Information */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-[#27AE60] rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <span>📞</span> CONTACT INFORMATION
                </h3>
              </div>
              
              <div className="grid gap-6">
                {/* Email */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-[#27AE60]">
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <p className="font-semibold text-gray-700 min-w-32">Email Id:</p>
                    <p className="text-[#27AE60] font-medium">{userData.email}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-[#27AE60]">
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <p className="font-semibold text-gray-700 min-w-32">Phone:</p>
                    {isEdit ? (
                      <input
                        className="flex-1 px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-[#27AE60] focus:outline-none transition-colors duration-300"
                        type="text"
                        value={userData.phone}
                        onChange={(e) =>
                          setUserData((prev) => ({ ...prev, phone: e.target.value }))
                        }
                      />
                    ) : (
                      <p className="text-gray-600">{userData.phone}</p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-[#27AE60]">
                  <p className="font-semibold text-gray-700 mb-3">Address:</p>
                  {isEdit ? (
                    <div className="space-y-3">
                      <input
                        className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-[#27AE60] focus:outline-none transition-colors duration-300"
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            address: { ...prev.address, line1: e.target.value },
                          }))
                        }
                        value={userData.address.line1}
                        type="text"
                      />
                      <input
                        className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-[#27AE60] focus:outline-none transition-colors duration-300"
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            address: { ...prev.address, line2: e.target.value },
                          }))
                        }
                        value={userData.address.line2}
                        type="text"
                      />
                    </div>
                  ) : (
                    <p className="text-gray-600 leading-relaxed">
                      {userData.address.line1}
                      <br />
                      {userData.address.line2}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-[#27AE60] rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <span>ℹ️</span> BASIC INFORMATION
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Gender */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-[#27AE60]">
                  <p className="font-semibold text-gray-700 mb-3">Gender:</p>
                  {isEdit ? (
                    <select
                      className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-[#27AE60] focus:outline-none transition-colors duration-300 bg-white"
                      onChange={(e) =>
                        setUserData((prev) => ({ ...prev, gender: e.target.value }))
                      }
                      value={userData.gender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : (
                    <p className="text-gray-600">{userData.gender}</p>
                  )}
                </div>

                {/* Birthday */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-[#27AE60]">
                  <p className="font-semibold text-gray-700 mb-3">Birthday:</p>
                  {isEdit ? (
                    <input
                      className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-[#27AE60] focus:outline-none transition-colors duration-300"
                      type="date"
                      onChange={(e) =>
                        setUserData((prev) => ({ ...prev, dob: e.target.value }))
                      }
                      value={userData.dob}
                    />
                  ) : (
                    <p className="text-gray-600">{userData.dob}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {isEdit ? (
                <>
                  <button
                    className="flex-1 bg-[#27AE60] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#229954] hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={updateUserProfilData}
                  >
                    <span>💾</span> Save information
                  </button>
                  <button
                    className="flex-1 bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={() => {
                      setIsEdit(false)
                      setImage(false)
                    }}
                  >
                    <span>❌</span> Cancel
                  </button>
                </>
              ) : (
                <button
                  className="w-full bg-[#27AE60] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#229954] hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => setIsEdit(true)}
                >
                  <span>✏️</span> Edit
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6 flex items-start gap-4">
          <span className="text-2xl">🔒</span>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Privacy & Security</h4>
            <p className="text-gray-600 text-sm">Your personal information is encrypted and secure. We never share your data with third parties.</p>
          </div>
        </div>
      </div>
    </div>
  )
  );
}

export default Myprofile
