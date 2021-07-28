import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import Error from "./components/Pages/Error";
import Navbar from "./components/NavBar/Navbar";
import Settings from "./components/Pages/Settings";
import CreateUser from "./components/Pages/CreateUser";
import Users from "./components/Pages/Users";
import Places from "./components/Pages/Places";
import DisplayPlacesDetails from "./components/Pages/DisplayPlacesDetails";
import loginData from "./loginData";

function Pages(props) {
  console.log(props);
  if (!props.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <BrowserRouter>
      <Navbar setIsLoggedIn={props.setIsLoggedIn} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" exact component={Profile} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/createUser" exact component={CreateUser} />
        <Route path="/user" exact component={Users} />
        <Route path="/places" exact component={Places} exact />
        <Route path="/places/:name">
          <DisplayPlacesDetails />
        </Route>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default Pages;
