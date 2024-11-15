import React from "react";
import { Routes, Route } from "react-router-dom";
import ADashboard1 from "./Admin-dashbord-componets/ADashboard1";
import ADashboard2 from "./Admin-dashbord-componets/ADashboard2";
import ADashboard3 from "./Admin-dashbord-componets/ADashboaed3";




const AdminDashboardRoutes = () => {
  return (
    // ts
    <Routes>
         <Route path="/" element={<ADashboard1 />} />
         <Route path="Adminlist" element={<ADashboard2 />} />
         <Route path="Adminlistpaid" element={<ADashboard3 />} />
    </Routes>
  );
};

export default AdminDashboardRoutes;
