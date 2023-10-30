import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-wrapper">
        <div className="p-container paddings innerWidth flexCenter">
          <h2>Product</h2>
        </div>
      </div>
      {/* Your Home page content */}
      <Footer />
    </div>
  );
}

export default Home;
