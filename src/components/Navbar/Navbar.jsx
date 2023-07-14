"use client";

import React from "react";
import { Layout, Menu, Button, Affix } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import "./style.scss";
import { Col, Row } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const { Header } = Layout;
const MenuList = [
  {
    key: "1",
    title: "Trang chủ",
    href: "/",
  },
  {
    key: "2",
    title: "Home",
    href: "/",
  },
  {
    key: "3",
    title: "Home",
    href: "/",
  },
  {
    key: "4",
    title: "Home",
    href: "/",
  },
];

const itemsList = [
  {
    label: "Trang chủ",
    key: "1",
  },
  {
    label: "Home",
    key: "2",
  },
  {
    label: "Sản Phẩm",
    key: "3",
  },
  {
    label: "Trang chủ",
    key: "4",
  },
];

const Navbar = () => {
  return (
    <Affix>
      <Header>
        <Row>
          <Col span={4}></Col>
          <Col className="navbar" span={16}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              className="menu__container"
              items={itemsList}
            >
              {/* {MenuList.map((menu) => {
                return (
                  <Menu.Item key={menu.key}>
                    <Link href={menu.href}>{menu.title}</Link>
                  </Menu.Item>
                );
              })} */}
            </Menu>
          </Col>
          <Col span={4} className="login-button">
            <div>
              <Button type="primary" icon={<LoginOutlined />}>
                <Link href="/auth"> Login</Link>
              </Button>
            </div>
          </Col>

          {/* <div className="login-button">
        <Button type="primary" icon={<LoginOutlined />}>
          Login
        </Button>
      </div> */}
        </Row>
      </Header>
    </Affix>
  );
};

export default Navbar;
