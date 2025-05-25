import React, { useEffect } from "react";
import "./styles/About.css";


export default function About() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    // Attach scroll event
    window.addEventListener("scroll", handleScroll);

    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <> 
    
      <div className="abt-container">
        <div className="skills fade-in">
          <h2>Skills</h2>
          <button>HTML</button>
          <button>CSS</button>
          <button>JavaScript</button>
          <button>React.js</button>
          <button>Express.js</button>
          <button>MongoDB</button>
          <button>SQL</button>
          <button>C, C++</button>
          <button>Python</button>
      

          <h2>Tools</h2>
          <button>Canva</button>
          <button>Bootstrap</button>
          <button>Vercel</button>
          <button>Git</button>
          <button>GitHub</button>
          <button>VS Code</button>
        </div>

        <div className="abt-para fade-in">
          <h1>Get to know me!</h1>
          <p>
            Hello, this is Khushi Chhari here! I am a driven and enthusiastic
            individual with a strong passion for learning and personal growth. I
            am eager to contribute my skills and energy to real-world projects
            and make a meaningful impact.
          </p>
          <p>
            I am currently looking for internship and job opportunities where I
            can apply my abilities, learn from industry professionals, and grow
            as a professional. I am adaptable, quick to learn, and excited to
            take on challenges.
          </p>
          <p>
            If you’re looking for a hardworking, creative, and reliable team
            player, feel free to get in touch with me. Let’s create something
            amazing together!
          </p>
        </div>
      </div>
    </>
  );
}
