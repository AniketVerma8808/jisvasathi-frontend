import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProfilePage from "./pages/ProfilePage";
import Matches from "./components/Matches";
import ActivityContent from "./components/ActivityContent";
import SearchContent from "./components/SearchContent";
import EditProfile from "./components/EditProfile";
import VerifyEmail from "./pages/auth/Verify_Email";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import MessengerContent from "./components/MessengerContent";
import { useAuth } from "./context/AuthContext";
import Packages from "./pages/Packages";
import MyProfile from "./components/MyProfile";
import ProfileDetails from "./components/ViewProfile";


const ScrollToTop = () => {
  const { pathname } = useLocation();

console.log(pathname)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => {
  const {authData}=useAuth();
  const token= authData.token


  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="antialiased">
        <Routes>
          <Route path="/"   element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="/login" element={ token ? <Navigate to={'/profile'}/> : <Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/packages" element={<Packages/>}/>
          <Route path="/profileDetails" element={<ProfileDetails/>}/>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
             </ProtectedRoute>
            }
          >
            <Route index  element={<Matches />} />
            <Route path="activity" element={<ActivityContent />} />
            <Route path="search" element={<SearchContent />} />
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="chats" element={<MessengerContent/>}/>
            <Route path="myProfile" element={<MyProfile/>}/>
          </Route>

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
