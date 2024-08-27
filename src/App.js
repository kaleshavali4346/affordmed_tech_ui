// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Menu } from "antd";
import Home from "./page/Home";
import ProductsPage from "./page/ProductPage";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="/products">Products</a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "50px", marginTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>Product App ©2024</Footer>
      </Layout>
    </Router>
  );
}

export default App;
