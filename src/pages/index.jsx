import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StateContext } from "../context/StateContext";

// pages
import LandingPage from "../components/LandingComp";
import NotFound from "../components/404/404";
import DashboardOnlyRoute from "./DashboardOnlyRoute";
import SidebarDashboardOnly from "./SidebarDashboardOnly";

const Pages = () => {
  return (
    <StateContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/*" element={<NotFound />} />
          <Route
            path="/dashboard/*"
            element={
              <DashboardOnlyRoute>
                <SidebarDashboardOnly/>
              </DashboardOnlyRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </StateContext>
  );
};

export default Pages;
