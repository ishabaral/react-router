import React from "react";
import { Link, useHistory } from "react-router-dom";
import { sidebarData } from "./NavbarData";
import { NavWrapper } from "./style";

function Navbar(props) {
  console.log(props.setIsLoggedIn);
  // const history = useHistory();
  const logout = () => {
    props.setIsLoggedIn(false);
    // history.push("/login");
  };
  return (
    <NavWrapper>
      <nav className="nav-menu">
        <ul>
          {sidebarData.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
                <div className="nav-icon">{item.icon}</div>
                {item.title == "Logout" ? (
                  <span className={item.cName} onClick={logout}>
                    {item.title}
                  </span>
                ) : (
                  <span className={item.cName}>{item.title}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </NavWrapper>
  );
}

export default Navbar;
