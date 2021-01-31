import axios from "axios";
const KEY = "AIzaSyBqKK85Z0JP-5lme7vWt-mvoWueT8UiuBY";
// const request = axios.create({
//   baseURL: "https://youtube.googleapis.com/youtube/v3/",
//   params: {
//     key: KEY,
//     part: "snippet,contentDetails,statistics",
//     chart: "mostPopular",
//     regioncode: "IN",
//     maxResults: 10,
//     pageToken: "",
//   },
// });
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 4,
    regioncode: "IN",
    chart: "mostPopular",
  },
});
export default request;
