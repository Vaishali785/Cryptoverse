import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Avatar, Menu, Button } from "antd";
import {
  HomeOutLined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  MenuOutlined
} from "@ant-design/icons";

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label
  };
}

const { Title } = Typography;
const items = [
  {
    label: (
      <Link to="/" className="routes">
        Home
      </Link>
    ),
    key: "home"
  },
  {
    label: (
      <Link to="/exchanges" className="routes">
        Exchange
      </Link>
    ),
    key: "exchange"
  },
  {
    label: (
      <Link to="/cryptocurrencies" className="routes">
        Cryptocurrencies
      </Link>
    ),
    key: "cryptocurrencies"
  },
  {
    label: (
      <Link to="/news" className="routes">
        News
      </Link>
    ),
    key: "News"
  }
];
export default function Navbar() {
  const [screenSize, setScreenSize] = useState(null);
  const [activeMenu, setActiveMenu] = useState(true);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(activeMenu);
  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar
          src="https://t4.ftcdn.net/jpg/04/77/81/47/360_F_477814721_Dgpo4V6G93nCZx3Ppxc9fcJyQXcBlcR9.jpg"
          className="logo-img"
        />
        <Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link>
        </Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && <Menu theme="dark" items={items} />}
      {/* <Link to="/" className="routes">
            Home
          </Link> */}
      {/* <Menu theme="dark" className="menu">
        <li key="home" icon={HomeOutLined}>
        <Link to="/" className="routes">
          Home
        </Link>
        </li> */}
      {/* <Menu.Item key="home" icon={HomeOutLined}>
        </Menu.Item> */}
      {/* <Menu.Item key="crypto" icon={FundOutlined}>
          <Link to="/cryptocurrencies" className="routes">
            Cryptocurrencies
          </Link>
        </Menu.Item> */}
      {/* <Menu.Item key="exchanges" icon={MoneyCollectOutlined}>
          <Link to="/exchanges" className="routes">
            Exchanges
          </Link>
        </Menu.Item> */}
      {/* <Menu.Item key="news" icon={BulbOutlined}>
          <Link to="/news" className="routes">
            News
          </Link>
        </Menu.Item> */}
      {/* </Menu> */}
    </div>
  );
}
