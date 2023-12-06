import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const { Sider } = Layout;

const LayoutIndex = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="demo-logo-vertical" />
        <Menu
          onSelect={({ key }) => navigate(key)}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          selectedKeys={location.pathname.includes("admin") ? "/admin" : "/"}
          items={[
            {
              key: "/",
              icon: React.createElement(UserOutlined),
              label: "User",
            },
            {
              key: "/admin",
              icon: React.createElement(UserOutlined),
              label: "Admin",
            },
          ]}
        />
      </Sider>
      <Outlet />
    </Layout>
  );
};

export default LayoutIndex;
