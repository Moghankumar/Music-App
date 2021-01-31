import { Button, Col, Image, Row } from "antd";
import React from "react";
import { Headers } from "./Header";
import "./Explore.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Title from "antd/lib/typography/Title";

const options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "2020 top tamil" },
  headers: {
    "x-rapidapi-key": "09fcc39e2cmshc4ce1fa9cabc44cp13ed9fjsna200bd9ce289",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

export class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumid: [],
      albumimg: [],
      data: [],
      value: "",
      video: "",
      searchdata: "",
    };
  }
  componentDidMount() {
    axios
      .request(options)
      .then((response) => {
        console.log("Explore :", response);
        this.setState({
          data: response.data,
        });
        var newrelease = this.state.data.data.map((data, index) => {
          this.setState({
            albumid: [data.album.id],
            albumimg: [data.album.cover_xl],
          });

          return (
            <div key={index} className="Release">
              <div>
                <Image
                  preview={false}
                  src={data.artist.picture_big}
                  width={200}
                  style={{ borderRadius: "10px" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Title level={5} style={{ flexWrap: "wrap" }}>
                    {data.title_short}
                  </Title>
                  <p>{data.artist.name}</p>
                </div>
              </div>
            </div>
          );
        });
        this.setState({
          value: newrelease,
        });
        console.log(
          "Album id & Image:",
          this.state.albumid,
          this.state.albumimg
        );
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://youtube.googleapis.com/youtube/v3/search", {
        params: {
          key: "AIzaSyBqKK85Z0JP-5lme7vWt-mvoWueT8UiuBY",
          type: "video",
          part: "snippet",
          q: "New Hit music songs",
          regioncode: "IN",
          maxResults: 4,
          chart: "mostPopular",
        },
      })
      .then((response) => {
        console.log("New Music songs video:", response);
        this.setState({
          searchdata: response,
        });
        var youtubevideo = this.state.searchdata.data.items.map(
          (data, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col>
                    <iframe
                      src={`https://www.youtube.com/embed/${data.id.videoId}`}
                      height="200"
                      width="350"
                      title="New Music Songs"
                      style={{ border: "none" }}
                    ></iframe>
                  </Col>
                </Row>
              </div>
            );
          }
        );
        this.setState({ video: youtubevideo });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <Headers />
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Row className="explore" style={{ paddingTop: "30px" }}>
            <Col span={8}>
              <Button className="Exploretopbutton" style={{ width: "80%" }}>
                New Releases
              </Button>
            </Col>
            <Col span={8}>
              <Button className="Exploretopbutton" style={{ width: "80%" }}>
                Charts
              </Button>
            </Col>
            <Col span={8}>
              <Button
                className="Exploretopbutton"
                style={{ width: "80%", color: "red" }}
              >
                Moods & genres
              </Button>
            </Col>
          </Row>
          <Row style={{ paddingLeft: "30px", paddingTop: "30px" }}>
            <Title level={2}>New Releases & Singles</Title>
          </Row>
          <Row style={{ paddingLeft: "30px", paddingTop: "30px" }}>
            <Col>
              <Link to="/explore/album">
                <div className="Explorenewrelease">{this.state.value}</div>
              </Link>
            </Col>
          </Row>

          <div>
            <Title
              level={2}
              style={{
                textAlign: "left",
                paddingTop: "30px",
                paddingLeft: "30px",
              }}
            >
              New Music songs
            </Title>
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
        </div>
      </div>
    );
  }
}

export default Explore;
