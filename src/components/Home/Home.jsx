import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css"; // Import a CSS file for styling

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-wrapper">
        <div className="innerWidth paddings flexCenter home-container">
          <div className="hero-section">
            <img className="hero-image" src="hero.jpg"   alt="Scenic landscape view of Your Website's homepage"
 />
            <div className="hero-content">
              <h1>Welcome to Your Website</h1>
              <p>Your awesome website description goes here.</p>
            </div>
          </div>
          {/* Your Home page content */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
