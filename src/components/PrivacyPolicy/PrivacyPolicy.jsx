import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="pp-wrapper">
        <div className="pp-container paddings innerWidth flexCenter">
          <h2>PrivacyPolicy</h2>
        </div>
      </div>
      {/* Your Home page content */}
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
