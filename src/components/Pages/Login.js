import React, { useState } from "react";
import { useHistory } from "react-router";
import loginData from "../../loginData";
import "./loginStyles.css";

function Login(props) {
  // console.log(props.isLoggedIn);
  const history = useHistory();
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    props.setIsLoggedIn(true);
    history.push("/");
  };

  return (
    <div>
      <div className="login">
        <h1>Logged in status : {props.isLoggedIn} </h1>
        <form className="box" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            //   value={values.email}
            //   onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            //   value={values.password}
            //   onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <input type="submit" name="" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
