import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { LinkedIn, GitHub, Mail } from "@mui/icons-material";
import "./styles/Main.css";
import Profile from "./assets/Profile.jpg";
import About from "./About.js";
import Portfolio from "./Portfolio.js";
import Blogs from "./Blogs.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

const Main = () => {
  return (
    <>
      {/* Main Content Layer */}
      <div className="main">
        <div className="main-container">
          <div className="main-content">
            <div className="text">
              <p>Hello Everyone !</p>
              <h1>
                I am{" "}
                <span className="typewriter">
                  <Typewriter
                    words={[
                      "Khushi Chhari.",
                      "a Full-Stack Developer.",
                      "a Problem Solver.",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h1>
              <p>Full-Stack Developer...</p>

              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/khushichhari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn className="icon" />
                </a>
                <a
                  href="https://github.com/khushichhari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub className="icon" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="icon" />
                </a>
              </div>

              <div className="buttons">
                <button>
                  <Link to="/about">Know more</Link>
                </button>
                <button>
                  <Link to="/portfolio">Hire Me</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="main-img">
            <img src={Profile} alt="Profile" />
          </div>
        </div>
      </div>

      <br />
      <About />
      <br />
      <Portfolio />
      <br />
      <Blogs />
      <br />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;