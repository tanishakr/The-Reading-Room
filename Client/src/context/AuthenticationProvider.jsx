import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const initialUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialUser ? JSON.parse(initialUser) : undefined
  );
  return (
    <AuthenticationContext.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthentication = () => useContext(AuthenticationContext);
