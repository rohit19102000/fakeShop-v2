import React, { createContext, useState } from 'react';

export const DetailsContext = createContext();

export function DetailsProvider({ children }) {
  const [details, setDetails] = useState({});

  function getDetails(newDetails) {
    setDetails(newDetails);
  }

  return (
    <DetailsContext.Provider value={{ details, getDetails }}>
      {children}
    </DetailsContext.Provider>
  );
}