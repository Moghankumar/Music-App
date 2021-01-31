export const auth = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:8888/callback/";
const clientId = "01e75a6c652a4c7181097c2575221fd3";
const client_secret = "a7036cddb2414f4eaedb87bcf27e7726";
const scopes = ["user-read-currently-playing"];
export const loginurl = `${auth}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes}&response_type=token&show_dialog=true`;

const token =
  "BQCYb9jyF1CRaB65FVe9tImL0IdnMl_mQ_bQsVxgtpE4uyql1MY77hiVTIXALb1BTiA0OyIATPVdxJjh6mIz7npKwZDMnvoHTPkfHKUMCvz1RO-YJ-nk8IKo3ArqakS86YsBPio-7LeASQXjSKDgcn56bftH2Zyx8ljtfEvxLGpEg7auIA";
