import React from "react";
import { Layout, Menu, theme } from "antd";
import { ShopTwoTone } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
const { Header } = Layout;
const CashierLayout = () => {
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
          defaultSelectedKeys={["/"]}
          style={{ display: "flex", justifyContent: "center" }}
          items={[
            {
              key: "/",
              icon: React.createElement(ShopTwoTone),
              label: "Önümler",
            },
          ]}
        />
      </Header>
      <Outlet />
    </Layout>
  );
};

export default CashierLayout;
