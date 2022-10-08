import React, { createContext } from "react";
import useFirebase from "../hook/useFirebase";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allContexts = useFirebase();
  return (
    <>
      <authContext.Provider value={allContexts}>
        {children}
      </authContext.Provider>
    </>
  );
};

export default AuthProvider;
