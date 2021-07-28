import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Pages from "./Pages";
import LoginError from "./components/Pages/LoginError";
import LoginData from "./loginData";
import loginData from "./loginData";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          exact
          // render={(handleSubmit) => <Login handleSubmit={handleSubmit} />}
        >
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          {/* <LoginData>
            {(handleSubmit) => {
              return <Login handleSubmit={handleSubmit} />;
            }}
          </LoginData> */}
        </Route>
        <Route path="/" exact>
          {/* <LoginData>
            {(isLoggedIn) => {
              return <Pages />;
            }}
          </LoginData> */}
          <Pages isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        {/* <Route component={LoginError} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
