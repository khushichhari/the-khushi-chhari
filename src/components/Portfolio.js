import React, { useEffect, useRef } from "react";
import "./styles/Portfolio.css";
import GIF from "./assets/port.gif";
import NetflixImage from "./assets/Netflix.png";
import ReferralImage from "./assets/Referral.png";
import MainImage from "./assets/Main.png";
import CliniQImage from "./assets/CliniQ.png";
import DairyImage from "./assets/Diary.png";
import GameImage from "./assets/Game.png";

export default function Portfolio() {
  const cardData = [
    {
      image: ReferralImage,
      title: "Harmaig-Referral website (frontend)",
      liveUrl: "https://harmaig-referral-page-frontend-j6kns82xs.vercel.app/",
    },
    {
      image: MainImage,
      title: "Harmaig Main website (frontend)",
      liveUrl:
        "https://harmaig-main-website-frontend-mdn92hbi1-khushi-chharis-projects.vercel.app/",
    },
    {
      image: DairyImage,
      title: "Diary + Todo list",
      liveUrl:
        "https://drive.google.com/file/d/1-XbPp9KKUcNNdQxNbbjiX_m94gT7M1tY/view?usp=drive_link",
    },
    {
      image: CliniQImage,
      title: "Clinic-Queue-Manager",
      liveUrl:
        "https://drive.google.com/file/d/1b7C7lfwxPudmUNpoY6fE144ZK9OjRdFY/view?usp=drive_link",
    },
    {
      image: GameImage,
      title: "Tic-Tac-Toe Game",
      liveUrl:
        "https://tic-tac-toe-game-cfbia24hd-khushi-chharis-projects.vercel.app/",
    },
    {
      image: NetflixImage,
      title: "Netflix Clone",
      liveUrl:
        "https://netflix-clone-website-by-khushi-fgoqfx87i.vercel.app/",
    },
  ];

  const observerRef = useRef();

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.2,
    });

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="port-container">
      <div className="gif fade-in">
        <img src={GIF} alt="Portfolio Animation" />
      </div>

      <div className="port-text fade-in">
        <h1>My Portfolio</h1>
        <p>
          Here are some of the projects I have worked on. Each project
          demonstrates my skills and experience in developing web applications,
          designing user interfaces, and solving real-world problems.
          Feel free to explore my projects and reach out if you'd like to
          collaborate or hire me.
        </p>
      </div>

      <div className="pro-head fade-in">
        <h1>Projects</h1>
      </div>

      <div className="port-cards-container fade-in">
        <div className="port-cards">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card"
              style={{ width: "18rem", margin: "10px" }}
            >
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                {card.liveUrl && (
                  <a
                    href={card.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginRight: "10px" }}
                  >
                    Visit
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="port-btn fade-in">
        <h2>Interested in knowing more about me? Check out my GitHub!</h2>
        <h2>Your Next Hire Is Just One Click Away!</h2>
        <div className="port-buttons">
          <a
            href="https://resume-khushi-chhari.vercel.app/" // Replace with your actual Vercel resume link
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Resume</button>
          </a>
          <a
            href="https://github.com/khushichhari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
}
