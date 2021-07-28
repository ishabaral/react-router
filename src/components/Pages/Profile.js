import React from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import HarryPotter from "./HarryPotter";
import Mark from "./Mark";

function Profile() {
  const { path, url } = useRouteMatch();
  console.log(`path : ${path} url: ${url}`);
  return (
    <div className="profile">
      <h1>Profiles</h1>
      <ul>
        <li>
          <NavLink to={`${url}/harry`} activeStyle={{ color: "green" }}>
            Harry Potter
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/mark`} activeStyle={{ color: "green" }}>
            Mark
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/harry`}>
          <HarryPotter />
        </Route>
        <Route path={`${path}/mark`}>
          <Mark />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;
