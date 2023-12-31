import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css"; // Import a CSS file for styling
import { Link } from "react-router-dom";
import data from "./imgData.json";
import { motion } from "framer-motion";

function Home() {
  const [images, setImages] = useState([
    {
      src: "defaultImage.jpg",
      title: "Default Image",
      description: "This is a default image description.",
    },
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInfo = data;

    setImages(imageInfo);
  }, []); // Empty dependency array, as this effect should run once

  const changeImage = useCallback(() => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  }, [currentImageIndex, images]);

  useEffect(() => {
    const interval = setInterval(changeImage, 3000);
    return () => clearInterval(interval);
  }, [changeImage]);

  return (
    <div>
      <Navbar />
      <div className="home-wrapper">
        <div className="innerWidth paddings flexCenter home-container">
          <motion.div
            initial={{ x: "5rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="hero-section mt-2 "
          >
            <img
              className="hero-image "
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].title}
            />
            <div className="hero-text flexColStart">
              <h4 className="primaryTextOrange">
                {/* {images[currentImageIndex].title} */}
                Welcome to Agora International Incorporated
              </h4>
              <h5 className="secondaryTextWhite lineHeight">
                {/* {images[currentImageIndex].description} */}
                Your trusted partner in the world of international trade.
              </h5>
              <p className="textWrap secondaryTextWhite lineHeight ">
                We specialize in trading a diverse range of products, including:
                Commodities, Industrial Machine Spare Parts, Construction Materials and Food Industry. Our
                commitment to excellence and customer satisfaction drives us to
                deliver top-quality products and services.
              </p>
              <div className="flexStart buttonSpace">
                <Link to="/product" className="navbar-link-bc">
                  <button className="buttonWhite">Product</button>
                </Link>
                <a href="mailto:info@internationalagora.com">
                  {" "}
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </motion.div>
          {/* about us */}
          <div className="aboutHome-container flexCenter mt-8">
            <div className="flexColStart leftAbout">
              <span className="orangeText">About Us</span>
              <span className="primaryTextWhite">Who are we</span>
              <span className="secondaryText textWrap lineHeight">
                At Agora International Incorporated, we take pride in our
                extensive network of partners and suppliers, enabling us to
                provide you with the best solutions in the industry. With years
                of experience, we have established a reputation for reliability,
                integrity, and innovation.
              </span>
              <span className="secondaryText textWrap lineHeight">
                Explore our website to discover our product offerings, industry
                insights, and the values that guide our business. Whether you're
                a business looking for industrial components, a food industry
                player, or someone interested in the world of commodities, we
                have something for everyone.
              </span>
              <div className="flexStart buttonSpace">
                <Link to="/about" className="navbar-link">
                  <button className="button">Who we are?</button>
                </Link>
                <a href="mailto:info@internationalagora.com">
                  {" "}
                  <button className="buttonWhite">Contact</button>
                </a>
              </div>
            </div>
            <div className="flexColEnd rightAbout">
              <img
                src="./test17.png"
                alt=""
                className="image-container-home-about"
              />
            </div>
          </div>
          {/* product */}
          <div className="productHome-container flexColCenter mt-8">
            <div className="flexColCenter productText">
              <span className="orangeText">Our Product</span>
              <span className="primaryText">Which industry we are?</span>
            </div>
            <div className="flexCenter home-galleryImg">
              <div class="card-container">
                <div class="card">
                  <div class="front-content">
                  <img src="test25.jpeg" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">Soft Commodities</p>
                    
                  </div>
                </div>
              </div>
              <div class="card-container">
                <div class="card">
                  <div class="front-content">
                  <img src="test22.webp" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">Machinery</p>
                    
                  </div>
                </div>
              </div>
              <div class="card-container">
                <div class="card">
                  <div class="front-content">
                  <img src="test14.jpg" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">Construction Materials</p>
                    
                  </div>
                </div>
              </div>
              <div class="card-container">
                <div class="card">
                  <div class="front-content">
                  <img src="test13.jpg" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">Hard Commodities</p>
                    
                  </div>
                </div>
              </div>


            </div>
                <Link to="/product" className="navbar-link-bc">
                  <button className="button galleryBtn">
                    More Info &rarr;
                  </button>
                </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
