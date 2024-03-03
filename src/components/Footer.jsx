import React from "react";
import "styles/app.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";


const Footer = ({ pageTitle }) => {
  
  return (
    <React.Fragment>
      
      <div className="footer">
        <Link to="https://linkedin.com/in/jacob-rogers-531aa3175" target="_blank" rel="noopener noreferrer">
          <CiLinkedin style={{ width: "30px", height: "35px", margin: "10px", color: "gold" }}></CiLinkedin>
        </Link>


        <Link to="https://github.com/Humanfntorch" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ width: "30px", height: "35px", margin: "10px", color: "gold" }}></FaGithub>
        </Link>

        <Link to="https://instagram.com/humanfntorch?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ width: "30px", height: "35px", margin: "10px", color: "gold" }}></FaInstagram>
        </Link>

        <a href="/Jacob_Rogers_Resume.pdf" download>
          <FiDownload style={{ width: "30px", height: "35px", margin: "10px", color: "gold" }}></FiDownload>
        </a>

      </div>
    </React.Fragment>
  );
};

export default Footer;

