import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Careers.css'
import { motion } from "framer-motion";

function Careers() {
  return (
    <div>
      <Navbar />
      <div className="c-wrapper">
      <motion.div
          initial={{ x: "5rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className="c-container paddings innerWidth flexColCenter"
        >
          <div className="c-image-container">
            <img src="./heroImage3.jpg" alt="" />
            <div className="c-text-container">
            <h2 className="c-text">Careers</h2>
            </div>
          </div>

          <div className="primaryText lineHeight">
            <h5>
              Our ambition is to have the most sustainable food supply chains in
              the world
            </h5>
            <div className="text secondaryTexBlue lineHeight">
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
          </div>
        </motion.div>
      </div>
      {/* Your Home page content */}
      <Footer />
    </div>
  );
}

export default Careers;
