// src/pages/ProductsPage.js
import React, { useState, useEffect } from "react";
import { Table, Spin, Alert, Tag } from "antd";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://192.168.107.153:7878/categories/Laptop/products?n=10&minPrice=1&maxPrice=10000&company=AMZ&page=1&sort_by=price&order=asc"
      )
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (text) => (
        <span style={{ textTransform: "capitalize" }}>{text}</span>
      ),
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      render: (text) => (
        <span style={{ textTransform: "capitalize" }}>{text}</span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => `$${text}`,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (text) => <span>{text.toFixed(2)}</span>, // Keep ratings to 2 decimal places
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
      render: (text) => <Tag color="blue">{`${text}%`}</Tag>,
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (text) => (
        <Tag color={text.toLowerCase() === "yes" ? "green" : "volcano"}>
          {text.toUpperCase()}
        </Tag>
      ),
    },
  ];

  if (loading) {
    return <Spin tip="Loading products..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" />;
  }

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Available Products
      </h2>
      <Table
        dataSource={products}
        columns={columns}
        rowKey="productName"
        pagination={false}
      />
    </div>
  );
};

export default ProductsPage;
