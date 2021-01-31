import axios from "axios";
// const APIKEY = "09fcc39e2cmshc4ce1fa9cabc44cp13ed9fjsna200bd9ce289";

const options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "eminem" },
  headers: {
    "x-rapidapi-key": "09fcc39e2cmshc4ce1fa9cabc44cp13ed9fjsna200bd9ce289",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
export function getAlbums(search = "eminem") {
  axios
    .request(options)
    .then(function (response) {
      console.log("Searched :", response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return <div>hello</div>;
}
