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
    const interval = setInterval(changeImage, 5000);
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
              <h2 className="primaryTextOrange">
                {images[currentImageIndex].title}
              </h2>
              <h5 className="secondaryTextWhite">
                {images[currentImageIndex].description}
              </h5>
              <p className="textWrap secondaryTextWhite">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                corporis hic neque saepe, eos, aspernatur atque sint .
              </p>
              <div className="flexStart buttonSpace">
                <Link to="/product" className="navbar-link-bc">
                  <button className="buttonWhite">Product</button>
                </Link>
                <a href="mailto:shakibvakili@gmail.com">
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
              <span className="primaryTextWhite">Who we are?</span>
              <span className="secondaryText textWrap">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                non, rerum tempore nisi aspernatur minus? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Neque provident, dignissimos
                veniam officiis optio beatae natus nihil voluptatibus
                perspiciatis tempora?
              </span>
              <span className="secondaryText textWrap">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                non, rerum tempore nisi aspernatur minus? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Neque provident, dignissimos
                veniam officiis optio beatae natus nihil voluptatibus
                perspiciatis tempora?
              </span>
              <div className="flexStart buttonSpace">
                <Link to="/about" className="navbar-link">
                  <button className="button">Who we are?</button>
                </Link>
                <a href="mailto:shakibvakili@gmail.com">
                  {" "}
                  <button className="buttonWhite">Contact</button>
                </a>
              </div>
            </div>
            <div className="flexColEnd rightAbout">
              <div className="image-container">
                <img src="./heroImage1.jpg" alt="" />
              </div>
            </div>
          </div>
          {/* product */}
          <div className="productHome-container flexCenter innerWidth mt-8">
            <div className="flexColCenter productText">
              <span className="orangeText">Our Product</span>
              <span className="primaryText">Which industry we are?</span>
            </div>
            <div className="flexCenter galleryImg">
              <div className="gallerDiv">
                <img className="border-radius" src="heroImage1.jpg" alt="" />
                <div className="textDiv">
                  <span className="primaryTextWhite">service title</span>
                  <p className="textWrap secondaryText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae molestiae eveniet recusandae, fuga consequuntur
                    quisquam.
                  </p>
                </div>
                <Link to="/product" className="navbar-link-bc">
                  <button className="button galleryBtn">
                    More Info &rarr;
                  </button>
                </Link>
              </div>
              <div className="gallerDiv">
                <img className="border-radius" src="heroImage1.jpg" alt="" />
                <div className="textDiv">
                  <span className="primaryTextWhite">service title</span>
                  <p className="textWrap secondaryText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae molestiae eveniet recusandae, fuga consequuntur
                    quisquam.
                  </p>
                </div>
                <Link to="/product" className="navbar-link-bc">
                  <button className="button galleryBtn">
                    More Info &rarr;
                  </button>
                </Link>{" "}
              </div>
              <div className="gallerDiv">
                <img className="border-radius" src="heroImage1.jpg" alt="" />
                <div className="textDiv">
                  <span className="primaryTextWhite">service title</span>
                  <p className="textWrap secondaryText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae molestiae eveniet recusandae, fuga consequuntur
                    quisquam.
                  </p>
                </div>
                <Link to="/product" className="navbar-link-bc">
                  <button className="button galleryBtn">
                    More Info &rarr;
                  </button>
                </Link>{" "}
              </div>
              <div className="gallerDiv">
                <img className="border-radius" src="heroImage1.jpg" alt="" />
                <div className="textDiv">
                  <span className="primaryTextWhite">service title</span>
                  <p className="textWrap secondaryText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae molestiae eveniet recusandae, fuga consequuntur
                    quisquam.
                  </p>
                </div>
                <Link to="/product" className="navbar-link-bc">
                  <button className="button galleryBtn">
                    More Info &rarr;
                  </button>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
