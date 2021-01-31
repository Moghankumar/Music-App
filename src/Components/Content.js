import React, { Component } from "react";
import axios from "axios";
import { Headers } from "./Header";
import { Col, Image, Row } from "antd";
import { Link } from "react-router-dom";
import "./Content.css";
import Topsong from "./Topsong";
import request from "./Youtube";
import Liveperformance from "./Liveperformance";
import Title from "antd/lib/typography/Title";

const options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/album/136510792",

  headers: {
    "x-rapidapi-key": "09fcc39e2cmshc4ce1fa9cabc44cp13ed9fjsna200bd9ce289",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      data: "",
      res: "",
      search: "",
      youtubedata: "",
      video: "",
      audio: "",
      select: false,
    };
  }
  async componentDidMount() {
    axios
      .request(options)
      .then((res) => {
        console.log("Recent Plays :", res.data);
        this.setState({
          res: res.data,
        });

        var datavalue = this.state.res.tracks.data.map((data, index) => {
          return (
            <div
              key={index}
              className="recentplay"
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "15px",
                cursor: "pointer",
                justifyContent: "center",
              }}
              onClick={() => {
                var audio = this.state.res.tracks.data[index];
                console.log("Check:", audio);
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
                        controls
                        autoPlay
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
              <div>
                <Image
                  preview={false}
                  src={`https://cdns-images.dzcdn.net/images/artist/${data.md5_image}/500x500-000000-80-0-0.jpg`}
                  alt="loading"
                  style={{ width: "70px", borderRadius: "5px" }}
                  value={index}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  paddingTop: "0px",
                }}
              >
                <div>
                  <Title level={5}>{data.title}</Title>
                  <Title level={5}>{data.artist.name}</Title>
                </div>
              </div>
            </div>
          );
        });
        this.setState({
          data: datavalue,
        });
        console.log("Content Music:", this.state.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const res = await request.get("/search", {
      params: {
        q: "top 10 songs",
      },
    });
    console.log("Youtube Recommended music:", res);
    this.setState({
      youtubedata: res,
    });

    var youtubevideo = this.state.youtubedata.data.items.map((data, index) => {
      return (
        <div key={index}>
          <iframe
            src={`https://www.youtube.com/embed/${data.id.videoId}`}
            height="200"
            width="350"
            title="Recommendation Music Videos"
            style={{ border: "none" }}
          ></iframe>
        </div>
      );
    });
    this.setState({ video: youtubevideo });
  }

  render() {
    return (
      <div>
        <div>
          <Headers />
        </div>
        <div className="content">{this.state.data}</div>

        <div
          className="fullrecommended"
          style={{
            paddingTop: "30px",
            paddingLeft: "30px",
          }}
        >
          <Title level={3}>Recommended Playlists</Title>
          <div className="recommed">
            <div>
              <Link to="/morningsongs">
                <div className="r1">
                  <div>
                    <Image
                      className="Image"
                      preview={false}
                      src="data:image/jpeg;base64,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"
                      alt="morningsongs"
                    />
                  </div>
                  <div>
                    <Title level={5}>Morning Vibes</Title>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/lovesongs">
                <div className="r1">
                  <div>
                    <Image
                      className="Image"
                      preview={false}
                      src="https://dypdvfcjkqkg2.cloudfront.net/original/59944-743.png"
                      alt="lovesongs"
                    />
                  </div>
                  <div>
                    <Title level={5}>Love Songs</Title>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/melodysongs">
                <div className="r1">
                  <div>
                    <Image
                      className="Image"
                      preview={false}
                      src="https://pbs.twimg.com/media/DV3Zj7mUQAAmnAq.jpg"
                      alt="lovesongs"
                    />
                  </div>
                  <div>
                    <Title level={5}>Melody Songs</Title>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/workoutsongs">
                <div className="r1">
                  <div>
                    <Image
                      className="Image"
                      preview={false}
                      src="https://fitnessbeats.eu/wp-content/uploads/2018/06/website-logo-cover.jpg"
                      alt="workoutsongs"
                    />
                  </div>
                  <div>
                    <Title level={5}>Workout Songs</Title>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/dancesongs">
                <div className="r1">
                  <div>
                    <Image
                      className="Image"
                      preview={false}
                      src="https://media.pitchfork.com/photos/592c536dc0084474cd0c65fd/2:1/w_2560%2Cc_limit/df4f1ba9.jpg"
                      alt="dancesongs"
                    />
                  </div>
                  <div>
                    <Title level={5}>Dance Songs</Title>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "30px", paddingLeft: "30px" }}>
          <Title level={3}>Recommended music videos</Title>
          <div
            className="videocontent"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {this.state.video}
          </div>
        </div>
        <div>
          <Topsong />
        </div>
        <div>
          <Liveperformance />
        </div>
        {this.state.select ? (
          <div className="Sticky">{this.state.audio}</div>
        ) : null}
      </div>
    );
  }
}

export default Content;
