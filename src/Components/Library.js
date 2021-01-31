import { Menu, Row } from "antd";
import Layout, { Header } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import React, { Component } from "react";
import { Headers } from "./Header";

export class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      current: 0,
    };
  }
  playlist() {
    this.setState({
      current: 0,
    });
  }
  album() {
    this.setState({
      current: 1,
    });
  }
  songs() {
    this.setState({
      current: 2,
    });
  }
  artists() {
    this.setState({
      current: 3,
    });
  }
  subs() {
    this.setState({
      current: 4,
    });
  }
  render() {
    return (
      <div>
        <div>
          <Headers />
        </div>

        <div>
          <Row>
            <Layout>
              <Header>
                <Menu
                  mode="horizontal"
                  style={{
                    borderColor: "black",
                  }}
                  defaultSelectedKeys={["1"]}
                >
                  <Menu.Item key="1" onClick={this.playlist.bind(this)}>
                    PLAYLISTS
                  </Menu.Item>
                  <Menu.Item key="2" onClick={this.album.bind(this)}>
                    ALBUMS
                  </Menu.Item>
                  <Menu.Item key="3" onClick={this.songs.bind(this)}>
                    SONGS
                  </Menu.Item>
                  <Menu.Item key="4" onClick={this.artists.bind(this)}>
                    ARTISTS
                  </Menu.Item>
                  <Menu.Item key="5" onClick={this.subs.bind(this)}>
                    SUBSCRIPTIONS
                  </Menu.Item>
                </Menu>
              </Header>
            </Layout>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            {this.state.current === 0 ? (
              <div>
                <Title level={2}>No Playlists</Title>
              </div>
            ) : this.state.current === 1 ? (
              <div>
                <Title level={2}>No Albums</Title>
              </div>
            ) : this.state.current === 2 ? (
              <div>
                <Title level={2}>No songs</Title>
              </div>
            ) : this.state.current === 3 ? (
              <div>
                <Title level={2}>No Artists</Title>
              </div>
            ) : this.state.current === 4 ? (
              <div>
                <Title level={2}>No Subscribed</Title>
              </div>
            ) : null}
          </Row>
        </div>
      </div>
    );
  }
}

export default Library;
