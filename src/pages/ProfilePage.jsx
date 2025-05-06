import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Notifications from "../components/Notifications";
import EditProfile from "../components/EditProfile";
import Matches from "../components/Matches";
import Activity from "../components/Activity";
import Search from "../components/Search";
import Messenger from "../components/Messenger";
import ProfileSidebar from "../components/ProfileSidebar";

const ProfilePage = () => {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [isEditProfile, setIsEditProfile] = useState(false);

  const validTabs = [
    "matches",
    "activity",
    "search",
    "messenger",
    "edit-profile",
  ];
  const defaultTab = "matches";

  useEffect(() => {
    if (!tab || !validTabs.includes(tab)) {
      navigate(`/profile/${defaultTab}`, { replace: true });
    } else if (tab === "edit-profile") {
      setIsEditProfile(true);
    } else {
      setIsEditProfile(false);
    }
  }, [tab, navigate]);

  const handleTabClick = (tabKey) => {
    navigate(`/profile/${tabKey}`);
  };

  const handleEditProfile = () => {
    setIsEditProfile(true);
  };

  const renderTabContent = () => {
    switch (tab) {
      case "matches":
        return <Matches />;
      case "activity":
        return <Activity />;
      case "search":
        return <Search />;
      case "messenger":
        return <Messenger />;
      default:
        return <Matches />;
    }
  };

  return (
    <div className="py-8 px-2 sm:px-4 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-1/4">
          <ProfileSidebar
            onTabClick={handleTabClick}
            onEditProfile={handleEditProfile}
            activeTab={tab}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-xl shadow p-4 sm:p-6 overflow-y-auto max-h-[calc(100vh-4rem)] hide-scrollbar">
          {isEditProfile ? <EditProfile /> : renderTabContent()}
        </div>

        {/* Notifications Panel */}
        <div className="hidden xl:block">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
