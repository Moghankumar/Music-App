import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Content from "./Components/Content";
import Morningsong from "./Components/Morningsong";
import Lovesong from "./Components/Lovesong";
import Melodysong from "./Components/Melodysong";
import Workoutsong from "./Components/Workoutsong";
import Dancesong from "./Components/Dancesong";
import Tamiltop from "./Components/Tamiltop";
import Englishtop from "./Components/Englishtop";
import Tops from "./Components/Tops";
import Topmetalsong from "./Components/Topmetalsong";
import Jazzsongs from "./Components/Jazzsongs";
import Explore from "./Components/Explore";
import Explorealbum from "./Components/Explorealbum";
import Library from "./Components/Library";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Content} />
          {/* <Route exact path="/user" component={Content} /> */}
          <Route exact path="/morningsongs" component={Morningsong} />
          <Route exact path="/lovesongs" component={Lovesong} />
          <Route exact path="/melodysongs" component={Melodysong} />
          <Route exact path="/workoutsongs" component={Workoutsong} />
          <Route exact path="/dancesongs" component={Dancesong} />
          <Route exact path="/top/tamil" component={Tamiltop} />
          <Route exact path="/top/english" component={Englishtop} />
          <Route exact path="/top/2020songs" component={Tops} />
          <Route exact path="/top/metalsong" component={Topmetalsong} />
          <Route exact path="/top/jazzsong" component={Jazzsongs} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/explore/album" component={Explorealbum} />
          <Route exact path="/library" component={Library} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
//AIzaSyBqKK85Z0JP-5lme7vWt-mvoWueT8UiuBY{Youtube Data API}
//01e75a6c652a4c7181097c2575221fd3{Spotify Client ID}
export default App;
