import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-wrapper">
        <div className="h-container paddings innerWidth flexCenter">
          <h2>Home</h2>
        </div>
      </div>
      {/* Your Home page content */}
      <Footer />
    </div>
  );
}

export default Home;
