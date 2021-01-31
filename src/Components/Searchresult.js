import React, { Component } from "react";
import axios from "axios";
import Title from "antd/lib/typography/Title";

export class Searchresult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.name,
      video: "",
      searchdata: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://youtube.googleapis.com/youtube/v3/search", {
        params: {
          key: "AIzaSyBqKK85Z0JP-5lme7vWt-mvoWueT8UiuBY",
          type: "video",
          part: "snippet",
          q: `${this.state.search}`,
          regioncode: "IN",
          maxResults: 4,
          chart: "mostPopular",
        },
      })
      .then((response) => {
        console.log("HEad search:", response);
        this.setState({
          searchdata: response,
        });
        var youtubevideo = this.state.searchdata.data.items.map(
          (data, index) => {
            return (
              <div key={index}>
                <iframe
                  src={`https://www.youtube.com/embed/${data.id.videoId}`}
                  height="250"
                  width="350"
                  title="Iframe Example"
                ></iframe>
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
        <Title level={1} style={{ textAlign: "center" }}>
          {this.state.search}
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
    );
  }
}

export default Searchresult;
