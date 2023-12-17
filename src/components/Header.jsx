import React from "react";
import "styles/app.css";
import Web_logo from "assets/images/Web_logo.png";
import { useNavigate } from 'react-router-dom';

const Header = ({ pageTitle }) => {
  /* Navigate to home page when button is clicked */
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <React.Fragment>
      <div className="headerTitle">
        <h2> {pageTitle}</h2>
      </div>

      <div className="header">
        <button className="logoButton" onClick={routeChange}>
          <img
            src={Web_logo}
            alt="Website Logo"
            className="logoImage"
          />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Header;

