import React, { Component } from "react";
import "./Header.css";
import { Col, Row, Input, Button, Dropdown, Menu, Image } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  ContactsFilled,
  YoutubeFilled,
  SwitcherFilled,
  LoginOutlined,
  LogoutOutlined,
  CloudUploadOutlined,
  HistoryOutlined,
  SettingOutlined,
  SecurityScanOutlined,
  QuestionCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Typography, Avatar } from "antd";
import { Layout } from "antd";
import firebase from "./Firebase";
// import * as search from "./Search";
import Searchresult from "./Searchresult";
import { Link } from "react-router-dom";
const { Header } = Layout;
const { Title } = Typography;

export class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      login: false,
      name: "",
      search: "",
      email: "",
    };
  }

  onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      login: true,
    });
  };
  signout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User sign out");
      })
      .catch((error) => {
        console.log("No user sign out");
      });
    this.setState({
      login: false,
      email: "",
      name: "",
    });
  };
  componentDidMount = () => {
    let self = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("User Sign in");
        console.log(user.displayName);

        // console.log(Object.keys(user.displayName));

        console.log(user.email);
        self.setState({
          login: true,
          name: user.displayName,
          email: user.email,
        });
      } else {
        console.log("No user Sign in");
      }
    });
  };
  search(event) {
    event.preventDefault();
    var title = document.querySelector("#searchbar").value;

    console.log(title);

    this.setState({
      search: title,
    });
  }
  delete() {
    this.setState({
      search: "",
    });
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          {this.state.name ? <h4>{this.state.name}</h4> : null}
        </Menu.Item>
        <Menu.Item>
          <p>{this.state.email}</p>
        </Menu.Item>
        <Menu.Item>
          <ContactsFilled className="icon" />
          Your channel
        </Menu.Item>
        <Menu.Item>
          <YoutubeFilled className="icon" /> Get Music Premium
        </Menu.Item>
        <Menu.Item>
          <SwitcherFilled className="icon" />
          Switch Account
        </Menu.Item>
        <Menu.Item>
          {this.state.login === false ? (
            <div>
              <LoginOutlined className="iconin" /> &nbsp;&nbsp;
              <Button onClick={this.onSubmit.bind(this)}>SignIn</Button>
            </div>
          ) : (
            <div>
              <LogoutOutlined className="iconout" />
              &nbsp;&nbsp;
              <Button onClick={this.signout.bind(this)}>SignOut</Button>
            </div>
          )}
        </Menu.Item>
        <Menu.Item>
          <CloudUploadOutlined className="icon" />
          Upload Music
        </Menu.Item>
        <Menu.Item>
          <HistoryOutlined className="icon" />
          History
        </Menu.Item>
        <Menu.Item>
          <SettingOutlined className="icon" />
          Setting
        </Menu.Item>
        <Menu.Item>
          <SecurityScanOutlined className="icon" />
          Terms & Privacy Policy
        </Menu.Item>
        <Menu.Item>
          <QuestionCircleOutlined className="icon" />
          Help
        </Menu.Item>
        <Menu.Item>
          <ExclamationCircleOutlined className="icon" />
          Send Feedback
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <div>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Col span={8} style={{ color: "white", textAlign: "left" }}>
              <Row style={{ display: "flex" }}>
                <Image
                  className="logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png"
                  alt="Logo"
                />
                <Title level={4} style={{ marginTop: "10px" }}>
                  Music
                </Title>
              </Row>
            </Col>
            <Col span={8}>
              <Row
                gutter={{ xs: 5, sm: 10, md: 15, lg: 20 }}
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Col>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Title level={3}>Home</Title>
                  </Link>
                </Col>
                <Col>
                  <Link to="/explore" style={{ textDecoration: "none" }}>
                    <Title level={3}>Explore</Title>
                  </Link>
                </Col>
                <Col>
                  <Link to="/library">
                    <Title level={3}>Library</Title>
                  </Link>
                </Col>
                <Col>
                  <form onSubmit={this.search.bind(this)}>
                    <Input
                      id="searchbar"
                      className="searchbar"
                      placeholder="Search"
                      allowClear
                      bordered={false}
                      prefix={<SearchOutlined />}
                      onClick={this.delete.bind(this)}
                    />
                  </form>
                </Col>
              </Row>
            </Col>
            <Col span={8} style={{ textAlign: "right" }}>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <Avatar size="large" icon={<UserOutlined />} />
              </Dropdown>
            </Col>
          </Row>
        </div>
        {this.state.search ? <Searchresult name={this.state.search} /> : null}
      </div>
    );
  }
}

export default Header;
