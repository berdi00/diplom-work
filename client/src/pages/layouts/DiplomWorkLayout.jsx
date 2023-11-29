import React from "react";
import { Layout, Menu } from "antd";
import { ShopTwoTone } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
const { Header } = Layout;
const DiplomWorkLayout = () => {
  return (
    <Layout>
      <Header
        style={{
          padding: 0,
        }}
      >
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["/"]}
          style={{ display: "flex", justifyContent: "center" }}
          items={[
            {
              key: "/",
              icon: React.createElement(ShopTwoTone),
              label: "Diploma",
            },
            {
              key: "/students",
              icon: React.createElement(ShopTwoTone),
              label: "Student",
            },
          ]}
        />
      </Header>
      <div style={{ marginTop: "100px" }}>
        <Outlet />
      </div>
    </Layout>
  );
};

export default DiplomWorkLayout;
