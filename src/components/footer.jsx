import React from "react";
import { Link } from "react-router-dom";
import { Typography, Avatar, Space } from "antd";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          CryptoVerse <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </>
  );
}
