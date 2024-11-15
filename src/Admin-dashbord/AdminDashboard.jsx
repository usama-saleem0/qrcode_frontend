import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import AdminDashboardRoutes from "./AdminDashboardRoutes";
import AdminSidebar from "./AdminSidebar";
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header1 = styled.header`
  color: #fff;

  text-align: center;
`;

const Footer1 = styled.footer`
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 25px 100px 50px 48px;
  background-color: #f0f0f0;
`;

const AdminDashboard = () => {

  return (
    <Layout>
      <ContentWrapper>
        {/* <DashboardHeader/> */}

  
        <AdminSidebar />
        {/* <MainContent> */}

        <div className="iUNkpW">
          <AdminDashboardRoutes />
        </div>

        {/* </MainContent> */}
      </ContentWrapper>
      {/* <Footer1>
      <Footer/>
      </Footer1> */}
    </Layout>
  );
};

export default AdminDashboard;
