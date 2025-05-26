import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const defaultAuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(defaultAuthState);

  // 🔄 Sync with localStorage on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token  && user) {
     console.log(token)
     
      setAuthData({
        isAuthenticated: true,
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  // ✅ Login/Update method
  const updateAuthData = ( user ) => {

    localStorage.setItem("user", JSON.stringify(user));

    setAuthData({
      isAuthenticated: true,
      token:'',
      user,
    });
  };

  // ❌ Logout/Clear method
  const clearAuthData = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthData(defaultAuthState);
  };

  return (
    <AuthContext.Provider value={{ authData, updateAuthData, clearAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
