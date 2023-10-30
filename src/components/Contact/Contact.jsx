import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="c-wrapper">
        <div className="c-container paddings innerWidth flexCenter">
          <h2>Contact</h2>
        </div>
      </div>
      {/* Your Home page content */}
      <Footer />
    </div>
  );
}

export default Contact;
