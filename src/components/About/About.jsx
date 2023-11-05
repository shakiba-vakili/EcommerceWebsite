import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./About.css";
import Slider from "./Slider";
import { motion } from "framer-motion";

function About() {
  return (
    <div>
      <Navbar />
      <div className="a-wrapper">
        <div className="a-container paddings innerWidth flexCenter">
          <h5 className="primaryTextOrange h5Headers flexCenter textWrap">
            AGORA International Incorporated
          </h5>

          <motion.div
            initial={{ x: "5rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="flexCenter paddings innerWidth first"
          >
            <div className="flexColCenter a-left innerWidth">
              <span className="orangeText ">Why trust us?</span>
            </div>
            <div className="flexColEnd a-right innerWidth">
              <div className="textWrap flexEnd secondaryTextWhite"> Why should you trust Agora International Incorporated?</div>
              <p className="textWrap flexColEnd secondaryText lineHeight">
                Trust is
                the cornerstone of our business, built on years of reliability
                and integrity. Our commitment to delivering high-quality
                products and services is unwavering. We stand by our word and
                ensure every transaction is transparent, fair, and conducted
                with the utmost professionalism. Our track record of successful
                partnerships and satisfied customers speaks volumes about the
                trustworthiness of our brand. Choose Agora International
                Incorporated, and you choose a trusted partner dedicated to your
                success.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "5rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="flexCenter paddings innerWidth second"
          >
            <div className=" flexColCenter a-left innerWidth displayNone">
              <span className="orangeText flexColCenter">
                Customer Satisfaction
              </span>
            </div>
            <div className="flexColStart a-right innerWidth">
              <p className="textWrap flexColEnd secondaryText lineHeight">
                At Agora International Incorporated, your satisfaction is our
                top priority. We understand that exceptional customer
                experiences are the foundation of long-lasting partnerships. Our
                dedicated customer service team is always ready to assist you,
                ensuring that your needs are met promptly and efficiently. Your
                success is our success, and we go the extra mile to exceed your
                expectations.
              </p>
            </div>
            <div className=" flexColCenter a-left innerWidth">
              <span className="orangeText ">Customer Satisfaction</span>
            </div>
          </motion.div>
          <Slider />
        </div>
      </div>
      {/* Your Home page content */}
      <Footer />
    </div>
  );
}

export default About;
