import { createContext, useState } from "react";

// Create the context
export const GlobalContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [orderArray, setOrderArray] = useState([]);
  const [comparisonArray, setComparisonArray] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        orderArray,
        setOrderArray,
        comparisonArray,
        setComparisonArray,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
