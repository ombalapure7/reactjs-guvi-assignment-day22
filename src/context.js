import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [addToCartClicked, setAddToCartClicked] = useState(false);

  return (
    <AppContext.Provider
      value={{addToCartClicked, setAddToCartClicked}}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
