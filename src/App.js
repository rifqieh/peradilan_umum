import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/home-screen";
import OrangScreen from "./screens/orang-screen";
import MajelisScreen from "./screens/majelis-screen";
import GugatanScreen from "./screens/gugatan-screen";
import BandingScreen from "./screens/banding-screen";
import KasasiScreen from "./screens/kasasi-screen";
import PeninjauanKembaliScreen from "./screens/peninjauan-kembali-screen";
import EditMajelisScreen from "./screens/edit-majelis-screen";
import EditOrangScreen from "./screens/edit-orang-screen";
import EditGugatanScreen from "./screens/edit-gugatan-screen";
import EditKasasiScreen from "./screens/edit-kasasi-screen";
import EditBandingScreen from "./screens/edit-banding-screen";
import EditPeninjauanKembali from "./screens/edit-peninjauan-kembali-screen";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container" style={{}}>
          <br />
          <ul className="list-group list-group-horizontal">
            <li style={{ listStyleType: "none" }}>
              <img
                height="50px"
                className="image-fluid"
                src="https://assets-a2.kompasiana.com/items/album/2019/09/04/83a759a8-5b6d-4861-9483-1584c5c288e9-5d6f0901097f3660c7307522.jpeg?t=o&v=350"
              />
            </li>
            <li className="list-group-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-group-item">
              <Link to="/orang">Orang</Link>
            </li>
            <li className="list-group-item">
              <Link to="/majelis">Majelis</Link>
            </li>
            <li className="list-group-item">
              <Link to="/gugatan">Gugatan</Link>
            </li>
            <li className="list-group-item">
              <Link to="/banding">Banding</Link>
            </li>
            <li className="list-group-item">
              <Link to="/kasasi">Kasasi</Link>
            </li>
            <li className="list-group-item">
              <Link to="/peninjauan-kembali">Peninjauan Kembali</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/orang">
              <OrangScreen />
            </Route>
            <Route path="/majelis">
              <MajelisScreen />
            </Route>
            <Route path="/gugatan">
              <GugatanScreen />
            </Route>
            <Route path="/banding">
              <BandingScreen />
            </Route>
            <Route path="/kasasi">
              <KasasiScreen />
            </Route>
            <Route path="/peninjauan-kembali">
              <PeninjauanKembaliScreen />
            </Route>
            <Route path="/edit-majelis/:id" component={EditMajelisScreen} />
            <Route path="/edit-orang/:id" component={EditOrangScreen} />
            <Route path="/edit-gugatan/:id" component={EditGugatanScreen} />
            <Route path="/edit-kasasi/:id" component={EditKasasiScreen} />
            <Route path="/edit-banding/:id" component={EditBandingScreen} />
            <Route
              path="/edit-peninjauan-kembali/:id"
              component={EditPeninjauanKembali}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
