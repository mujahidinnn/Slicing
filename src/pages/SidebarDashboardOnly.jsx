import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import DashboardExplore from "../components/Explore/DashboardExplore";
import MyProject from "../components/MyProject";
import CreateProject from "../components/CreateProject/createProject";
import ProfileSaya from "../components/Profile/ProfileSaya";
import EditProfile from "../components/Profile/EditProfile";
import Notification from "../components/Notification/Notification";
import NotFound from "../components/404/404";

import Hamburger from "../components/Sidebar/Hamburger";

const SidebarDashboardOnly = () => {
  return (
    <div className={`${window.innerWidth < 768 ? "ml-[0%]" : "pl-[10%] lg:pl-[6%] bg-slate-100"}`}>
      <div className="bg-slate-100">{window.innerWidth < 768 ? <Hamburger /> : <Sidebar />}</div>
      <div>
        <Routes>
          <Route path="explore" element={<DashboardExplore />} />
          <Route path="myproject" element={<MyProject />} />
          <Route path="myprofile" element={<ProfileSaya />} />
          <Route path="notification" element={<Notification />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="createproject" element={<CreateProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default SidebarDashboardOnly;
