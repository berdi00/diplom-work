import React from "react";
import { Layout, Menu, theme } from "antd";
import { ShopTwoTone, TagTwoTone } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
const { Header } = Layout;
const AdminLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["products"]}
          style={{ display: "flex", justifyContent: "center" }}
          items={[
            {
              key: "products",
              icon: React.createElement(ShopTwoTone),
              label: "Önümler",
            },
            {
              key: "categories",
              icon: React.createElement(TagTwoTone),
              label: "Kategoriyalar",
            },
          ]}
        />
      </Header>
      <Outlet />
    </Layout>
  );
};

export default AdminLayout;
