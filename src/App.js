import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import routes from "./Constants/routes";
import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/LandingPage/LandingPage";
import AvailableTeams from "./Components/AvailableTeams/AvailableTeams";
import Profile from "./Components/Profile/Profile";

class App extends Component {
  state = {
    user: {
      username: "TuscanSota",
      team: "Washington State",
      teamAbbr: "",
      roleID: 0
    }
  };
  // Global Variables
  render() {
    return (
      <Router>
        <div className="App hero is-fullheight">
          <NavBar user={this.state.user} />
          <Route exact path={routes.LANDING} component={LandingPage} />
          <Route
            exact
            path={routes.USER}
            render={() => <Profile data={this.state.user} />}
          />
          <Route exact path={routes.TEAM} component={LandingPage} />
          <Route
            exact
            path={routes.AVAILABLE_TEAMS}
            component={AvailableTeams}
          />
          <Route exact path={routes.RECRUITING} component={LandingPage} />
        </div>
      </Router>
    );
  }
}

export default App;
