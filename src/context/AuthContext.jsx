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
     ...authData,user
    });
  };

  const login= (token,user)=>{
      if(user&&token){
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('token',token)
        setAuthData({
        isAuthenticated:true,
        token,
        user
        })
      }
  }

  // ❌ Logout/Clear method
  const clearAuthData = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthData(defaultAuthState);
  };

  const getLoggedInUser=()=>{
     if(authData.user){
       
     }
  }

  return (
    <AuthContext.Provider value={{ authData, updateAuthData,login, clearAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
