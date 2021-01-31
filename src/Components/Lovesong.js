import React, { Component } from "react";
import axios from "axios";
import { Headers } from "./Header";
import { Col, Image, Row } from "antd";
import Title from "antd/lib/typography/Title";

const options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "love" },
  headers: {
    "x-rapidapi-key": "09fcc39e2cmshc4ce1fa9cabc44cp13ed9fjsna200bd9ce289",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

export class Lovesong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: "",
      data: "",
      audio: "",
      select: false,
    };
  }
  componentDidMount() {
    axios
      .request(options)
      .then((res) => {
        console.log("Love Songs:", res.data);
        this.setState({
          res: res.data,
        });
        var datavalue = this.state.res.data.map((data, index) => {
          return (
            <div
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => {
                var audio = this.state.res.data[index];

                var play = (
                  <Row
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "10px",
                    }}
                  >
                    <Col
                      style={{ display: "flex", flexDirection: "row" }}
                      span={5}
                    >
                      <div>
                        <Image
                          src={`https://cdns-images.dzcdn.net/images/artist/${audio.md5_image}/500x500-000000-80-0-0.jpg`}
                          style={{ width: "70px", borderRadius: "5px" }}
                        />
                      </div>
                      <div style={{ padding: "10px" }}>
                        <h3>{audio.title}</h3>
                        <h4>{audio.artist.name}</h4>
                      </div>
                    </Col>
                    <Col span={19}>
                      <audio
                        autoPlay
                        controls
                        src={audio.preview}
                        style={{ width: "100%" }}
                      ></audio>
                    </Col>
                  </Row>
                );
                this.setState({
                  audio: play,
                  select: true,
                });
              }}
            >
              <Row>
                <Col span={8}>
                  <Image
                    src={data.album.cover_xl}
                    preview={false}
                    style={{ width: "70px", borderRadius: "5px" }}
                  ></Image>
                </Col>
                <Col span={8}>
                  <div>
                    <Title level={5}>{data.title}</Title>
                  </div>
                </Col>
                <Col span={8}>
                  <Title level={5}>{data.artist.name}</Title>
                </Col>
              </Row>
            </div>
          );
        });
        this.setState({
          data: datavalue,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  render() {
    return (
      <div>
        <div>
          <Headers />
        </div>
        <div style={{ textAlign: "center" }}>
          <Title level={2}>Love Songs</Title>
        </div>
        <div className="Audiolist">{this.state.data}</div>{" "}
        {this.state.select ? (
          <div className="Sticky">{this.state.audio}</div>
        ) : null}
      </div>
    );
  }
}

export default Lovesong;
