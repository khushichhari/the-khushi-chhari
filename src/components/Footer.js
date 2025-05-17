import React from "react";
import "./styles/Footer.css";
import {
  // Instagram,
  // Twitter,
  // Facebook,
  LinkedIn,
  GitHub,
  Mail,
} from "@mui/icons-material";


export default function Footer() {
  return (
    <>
  
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Khushi Chhari. All rights reserved.</p>
          <div className="social-links">
            {/* <a href="/" target="_blank" rel="noopener noreferrer">
            <Twitter className="icon" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Facebook className="icon" />{" "}
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Instagram className="icon" />
          </a> */}
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
        </div>
      </footer>
    </>
  );
}