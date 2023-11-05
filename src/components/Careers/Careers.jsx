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
             ************************
            </h5>
            <div className="text secondaryTexBlue lineHeight">
              <br />

              <p>
              At Agora International Incorporated, we are dedicated to creating an environment where you can thrive professionally, find fulfillment in your work, and be a part of a company that values both its employees and its mission. Your success is our success, and we are committed to supporting your journey within our organization.
              </p>
              <br />
              <p>
              Working at Agora International Incorporated offers a myriad of advantages. We provide competitive compensation, opportunities for professional development, and a nurturing work atmosphere. Our diverse and inclusive team encourages innovation and creativity, fostering an environment where every employee's contributions are recognized. We prioritize the well-being of our employees with comprehensive health and wellness benefits, while also promoting a healthy work-life balance. 
              </p>
              <br />
              <p>Joining Agora International connects you with a company deeply committed to social responsibility and core values like integrity and excellence. You'll have the chance to network with global partners, engage in challenging work, and benefit from a system that recognizes and rewards outstanding performance. Employee feedback is valued, and your voice matters in shaping our future. Additionally, our community engagement programs allow you to make a positive impact on society. At Agora International, we are not just an employer; we are a supportive, innovative, and values-driven community dedicated to your professional growth and success.</p>
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
