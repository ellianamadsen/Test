import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <nav class="container">
        <h1>PDF GENERATE</h1>
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      </nav>
      )}

      {isAuthenticated && (
        <span>
          <nav class="container">
            <h1>PDF GENERATE</h1>
          <button onClick={() => logout({})}>Log Out</button>
          </nav>
        </span>
      )}
    </div>
  );
};

export default NavBar;