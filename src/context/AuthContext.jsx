import React, { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../services/api.service";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const defaultAuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(defaultAuthState);


 
  const updateAuthData = ( user ) => {
localStorage.setItem("user", JSON.stringify(user));
    setAuthData({
     ...authData,user
    });
  };

  const login= (token)=>{
      if(token){
        localStorage.setItem('token',token)
        setAuthData({
          ...authData,
        isAuthenticated:true,
        token,
        })
      }
  }

  // ❌ Logout/Clear method
  const clearAuthData = () => {
    localStorage.removeItem("token");
    setAuthData(defaultAuthState);
  };

  const getLoggedInUser=async()=>{
    try {
      const res= await getUser()
    setAuthData({
      ...authData,
      isAuthenticated:true,
      user:res.data.user
    })
    } catch (error) {
      if(error.status=400){
clearAuthData()
      }
    }
    
  }

  return (
    <AuthContext.Provider value={{ authData, updateAuthData,login, clearAuthData,getLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};
