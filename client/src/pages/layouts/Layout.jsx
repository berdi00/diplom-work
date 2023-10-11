import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
const { Sider } = Layout;

const LayoutIndex = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="demo-logo-vertical" />
        <Menu
          onSelect={({ key }) => navigate(key)}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={[
            {
              key: "/",
              icon: React.createElement(UserOutlined),
              label: "Kassyr",
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
