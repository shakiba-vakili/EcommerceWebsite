import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css"; // Import a CSS file for styling

function Home() {
  const [images, setImages] = useState([
    {
      src: "defaultImage.jpg",
      title: "Default Image",
      description: "This is a default image description.",
    }
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInfo = [
      {
        src: "heroImage1.jpg",
        title: "Image 1",
        description: "This is the first image description.",
      },
      {
        src: "heroImage2.jpg",
        title: "Image 2",
        description: "This is the second image description.",
      },
      {
        src: "heroImage3.jpg",
        title: "Image 3",
        description: "This is the third image description.",
      },
    ];

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
          <div className="hero-section">
            <img
              className="hero-image "
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].title}
            />
            <div className="hero-text flexColStart">
              <h2 className="primaryTextWhite">{images[currentImageIndex].title}</h2>
              <h5 className="secondaryTextWhite">{images[currentImageIndex].description}</h5>
              <p className="textWrap secondaryTextWhite">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis hic neque saepe, eos, aspernatur atque sint .</p>
            </div>
          </div>
          {/* Your Home page content */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
