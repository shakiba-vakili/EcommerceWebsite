import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function BusinessPractices() {
  return (
    <div>
      <Navbar />
      <div className="a-wrapper">
        <div className="a-container paddings innerWidth flexCenter">
          <h2>Business Practices</h2>
        </div>
      </div>
      {/* Your Home page content */}
      <Footer />
    </div>
  );
}

export default BusinessPractices;