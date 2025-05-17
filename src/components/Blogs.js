import React, { useEffect } from "react";
import "./styles/Blogs.css";


const Blogs = () => {
  const blogPosts = [
    {
      title: "Introduction to Web Development",
      description: "Learn the basics of web development, including HTML, CSS, and JavaScript. Understand how to create and structure websites for the modern web.",
      link: "#"
    },
    {
      title: "Mastering the MERN Stack",
      description: "Explore the MERN stack (MongoDB, Express.js, React, and Node.js) to build powerful full-stack web applications.",
      link: "#"
    },
    {
      title: "Programming in C and C++",
      description: "Dive deep into C and C++ programming concepts, including memory management, object-oriented programming, and advanced algorithms.",
      link: "#"
    },
    {
      title: "The Essentials of UI/UX Design",
      description: "Discover the principles of UI/UX design and how to create user-friendly and visually appealing interfaces.",
      link: "#"
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".blog-card");

    const handleScroll = () => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100 && rect.bottom >= 100;

        if (isVisible) {
          card.classList.add("visible");
        } else {
          card.classList.remove("visible");
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
  
    <div className="blogs-container">
      <h1 className="blogs-heading">Blogs</h1>
      <div className="blogs-list">
        {blogPosts.map((blog, index) => (
          <div className="blog-card" key={index}>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-description">{blog.description}</p>
            <a href={blog.link} className="blog-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blogs;