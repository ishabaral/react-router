import React, { useState } from "react";
import { useHistory } from "react-router";

function loginData(MyComponent) {
  function LoginData() {
    const history = useHistory();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = () => {
      setIsLoggedIn(true);
      history.push("/");
    };
    return (
      <div>
        <MyComponent handleSubmit={handleSubmit} isLoggedIn={isLoggedIn} />
      </div>
    );
  }
  return LoginData;
}

export default loginData;
