import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import "./BusinessPractices.css";

function BusinessPractices() {
  return (
    <div>
      <Navbar />
      <div className="bp-wrapper">
        <motion.div
          initial={{ x: "5rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className="bp-container paddings innerWidth flexColCenter"
        >
          <div className="bp-image-container">
            <img src="./heroImage2.jpg" alt="" />
            <h2 className="bp-text">Sustainability</h2>
          </div>

          <div className="primaryText lineHeight">
            <h5>
              Our ambition is to have the most sustainable food supply chains in
              the world
            </h5>
            <div className="text secondaryTexBlue ">
              <br />

              <p>
                From small family farms to global shipping lanes, Cargill works
                every day to implement new sustainable practices to reduce our
                impact on the planet and protect people.
              </p>
              <br />
              <p>
                Through our long history, we have seen agriculture be part of
                the solution to the world’s most urgent challenges. We know that
                we must address climate change and conserve water and forests,
                while meeting the rising demand for food. These are complex
                challenges, but we have overcome many obstacles to keep our food
                system resilient and we will continue. We feel a deep
                responsibility to protect the planet and its people, to ensure a
                cleaner, safer future for generations to come.
              </p>
            </div>
            <p className="bp-line"></p>
          </div>
          <div className="primaryText paddings">
            <h5>Our Priorities</h5>
            <div className="text secondaryTexBlue ">
              <br />

              <p>
                We’ve set priorities that account for the diverse environmental,
                social and economic impacts of our business. Still, we realize
                that no company can take on these challenges on its own. Through
                connection and collaboration with farmers, our customers, and
                global and local communities, we believe our food system will
                remain resilient.
              </p>
              <br />
              <div className="flexCenter galleryImg">
                <img className="border-radius gallerDiv" src="heroImage1.jpg" alt="" />
     
                <img className="border-radius gallerDiv" src="heroImage2.jpg" alt="" />
          
                <img className="border-radius gallerDiv" src="heroImage3.jpg" alt="" />
              
            </div>
          </div>
          </div>
        </motion.div>
      </div>
      {/* Your Home page content */}
      <Footer />
    </div>
  );
}

export default BusinessPractices;
