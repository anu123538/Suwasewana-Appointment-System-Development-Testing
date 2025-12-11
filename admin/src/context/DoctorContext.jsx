import { createContext, useState } from "react";

// Create the context
const DoctorContext = createContext();

// Create the provider component
export const DoctorContextProvider = ({ children }) => {
  const [doctorData, setDoctorData] = useState(null);
  
  const value = {
    doctorData,
    setDoctorData,
    // Add other doctor-related state/functions here
  };

  return (
    <DoctorContext.Provider value={value}>
      {children}
    </DoctorContext.Provider>
  );
};

// Export the context for consumption
export default DoctorContext;