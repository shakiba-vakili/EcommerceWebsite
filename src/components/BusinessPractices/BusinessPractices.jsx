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
            <img src="./sustainability.jpg" alt="" />
            <div className="bp-text-container">
              <h2 className="bp-text">Sustainability</h2>
            </div>
          </div>
          <div className="bp-all-text">
            <div className="primaryText lineHeight">
              <h5>Sustainable Practices: Our Pledge to a Greener Future </h5>
              <div className="text secondaryTexBlue lineHeight">
                <br />

                <p>
                  At Agora International Incorporated, we are deeply committed
                  to sustainability and environmental responsibility. We believe
                  that as a global company, it's our duty to contribute to a
                  better world by reducing our ecological footprint and
                  promoting sustainable business practices. Our sustainability
                  commitment is ingrained in everything we do, from the products
                  we offer to the way we conduct our operations.
                </p>
                <br />
                <p>
                  We actively engage with the communities in which we operate.
                  Our team believes that by participating in local initiatives
                  and giving back to society, we can make a positive impact. We
                  also support educational programs, charitable organizations,
                  and other community initiatives that align with our values.
                </p>
              </div>
            </div>
            <div className="primaryText lineHeight">
              <div className="flexCenter galleryImg">
                <img
                  className="border-radius gallerDiv"
                  src="test36.jpg"
                  alt=""
                />

                <img
                  className="border-radius gallerDiv"
                  src="test34.jpg"
                  alt=""
                />

                <img
                  className="border-radius gallerDiv"
                  src="test37.jpg"
                  alt=""
                />
              </div>
              <br />
              <br />

              <div className="text secondaryTexBlue lineHeight">
                <span className="lineHeight">Environmental Practices:</span>
                <p className="lineHeight">
                  We are dedicated to reducing our impact on the environment.
                  This includes:
                  <li>
                    Sourcing Sustainable Products: We prioritize products and
                    materials with eco-friendly certifications, ensuring that
                    they meet the highest environmental standards.
                  </li>
                  <li>
                    Energy Efficiency: Our facilities are designed to minimize
                    energy consumption and reduce greenhouse gas emissions.
                  </li>
                  <li>
                    Waste Reduction: We actively work to minimize waste
                    generation and promote recycling and responsible disposal.
                  </li>
                </p>
                <br />
                <span className="lineHeight">Product Responsibility:</span>
                <p className="lineHeight">
                  We are mindful of the environmental impact of the products we
                  offer. Our commitment to product responsibility includes:
                  <li>
                    {" "}
                    Offering Sustainable Choices: We strive to provide
                    eco-friendly product options, helping our customers make
                    environmentally responsible choices.{" "}
                  </li>
                  <li>
                    Transparency: We share information about the environmental
                    impact of our products and work with suppliers who
                    prioritize sustainability.
                  </li>
                </p>
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
