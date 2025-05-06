import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    const storedData = localStorage.getItem("authData");
    return storedData ? JSON.parse(storedData) : {};
  });

  const [isEditProfile, setIsEditProfile] = useState(false);

  const updateAuthData = (data) => {
    setAuthData((prev) => {
      const newData = { ...prev, ...data };
      localStorage.setItem("authData", JSON.stringify(newData));
      return newData;
    });
  };

  const logout = () => {
    setAuthData({});
    localStorage.removeItem("authData");
  };

  return (
    <AuthContext.Provider
      value={{
        authData,
        updateAuthData,
        isEditProfile,
        setIsEditProfile,
        logout,
        setAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
