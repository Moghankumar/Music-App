import React, { Component } from "react";
import axios from "axios";

export class Liveperformance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchdata: [],
      video: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://youtube.googleapis.com/youtube/v3/search", {
        params: {
          key: "AIzaSyBqKK85Z0JP-5lme7vWt-mvoWueT8UiuBY",
          type: "video",
          part: "snippet",
          q: "top tamil live performance",
          regioncode: "IN",
          maxResults: 4,
          chart: "mostPopular",
        },
      })
      .then((response) => {
        console.log("Live Performance :", response);
        this.setState({
          searchdata: response,
        });
        var youtubevideo = this.state.searchdata.data.items.map(
          (data, index) => {
            return (
              <div key={index}>
                <iframe
                  src={`https://www.youtube.com/embed/${data.id.videoId}`}
                  height="200"
                  width="350"
                  title="Live Performance"
                  style={{ border: "none" }}
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
      <div style={{ paddingTop: "30px", paddingLeft: "30px" }}>
        <h2>Live Performance</h2>
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

export default Liveperformance;
