import { createContext, useState } from "react";

// Create the context
export const GlobalContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [orderArray, setOrderArray] = useState(["Order Array"]);
  const [comparisonArray, setComparisonArray] = useState(["Comparison Array"]);

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
