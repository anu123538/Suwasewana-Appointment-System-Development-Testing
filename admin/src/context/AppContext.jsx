import { createContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Create the provider component
export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState({});
  
  const value = {
    appState,
    setAppState,
    // Add other app-wide state/functions here
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Export the context for consumption
export default AppContext;