import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import { ShopTwoTone, TagTwoTone } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
const { Header } = Layout;
const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("diploma");
  }, []);
  return (
    <Layout>
      <Header
        style={{
          padding: 0,
          position: "fixed",
          width: "90%",
          zIndex: 90000,
        }}
      >
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["diploma"]}
          onSelect={({ key }) => navigate(key)}
          style={{ display: "flex", justifyContent: "center" }}
          items={[
            {
              key: "diploma",
              icon: React.createElement(ShopTwoTone),
              label: "Diploma",
            },
            {
              key: "students",
              icon: React.createElement(TagTwoTone),
              label: "Students",
            },
          ]}
        />
      </Header>
      <div style={{ marginTop: "70px", padding: 10 }}>
        <Outlet />
      </div>
    </Layout>
  );
};

export default AdminLayout;
