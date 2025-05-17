import React from 'react';
import './styles/Contact.css';
import GirlCharacter from './assets/girl-character.png'; // Import the image


export default function Contact() {
  const handleResponse = (e) => {
    e.preventDefault(); // Prevent default form submission
    window.open('https://forms.gle/smbYHyzmmpPqKnLa8', '_blank'); // Redirect to Google Form
  };

  return (
    <>
   
      <div className="contact-container">
        <div className="contact-look">
          <div className="girl-container">
            <img src={GirlCharacter} alt="Girl Character" className="girl-character" />
          </div>
          <div className="contact-form">
            <h1 className="contact-title">Collaborate with Me!</h1>
            <div className="form">
              <form onSubmit={handleResponse}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" required /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" required /><br />
                <label htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" required></textarea><br />
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}