import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {

  return (
    <div className="header">
      <div className="header-logo">
        <h1>Khushi Chhari</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/"><b>Home</b></Link>
          </li>
          <li>
            <Link to="/about"><b>About</b></Link>
          </li>
          <li>
            <Link to="/portfolio"><b>Portfolio</b></Link>
          </li>
          <li>
            <Link to="/blogs"><b>Blogs</b></Link>
          </li>
          <li>
            <Link to="/contact"><b>Contact</b></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;