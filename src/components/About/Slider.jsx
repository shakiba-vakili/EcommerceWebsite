import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";

const data = [
  {
    src: "heroImage1.jpg",
    title: "Soft Commodities",
    description:
    "At Agora International Incorporated, we're unwavering in our commitment to quality and trust in trading soft commodities. We recognize the vital role soft commodities play in the global supply chain, and we take great pride in our meticulous selection process, ensuring our soft commodities, such as grains, oilseeds, and coffee, meet the highest quality and ethical standards. Our rigorous quality control processes and adherence to industry best practices assure you that when you choose us as your trading partner, you're selecting excellence, integrity, and trust for your soft commodity needs."

    ,
  },
  {
    src: "heroImage2.jpg",
    title: "Machinery",
    description:
    "Agora International Incorporated is your top choice in the world of food industry machinery. We're deeply committed to sourcing and trading high-quality equipment designed to meet the industry's demanding standards. From processing and packaging machinery to refrigeration solutions, we're dedicated to excellence and quality. Your trust in us is earned through the consistent delivery of top-tier machinery that powers your success."

    ,
  },
  {
    src: "heroImage3.jpg",
    title: "Construction Material",
    description:
    "Agora International Incorporated is your reliable partner in construction materials. We understand that quality materials are the foundation of any successful project, and that's precisely what we provide. With a strong commitment to excellence, we trade a wide range of construction materials, from chalk to pitch and rebar. Our dedication to sourcing the highest-quality materials ensures your trust in us is well-placed. We meticulously scrutinize every product for quality, guaranteeing that when you choose Agora International, you're selecting materials that not only meet but often exceed industry standards. Trust in your construction materials is crucial, and we're here to offer you that peace of mind."

    ,
  },
  {
    src: "heroImage1.jpg",
    title: "Hard Commodities",
    description:
    "Agora International Incorporated is your trusted source for high-quality hard commodities. We're committed to excellence, ensuring that the commodities we trade, from metals to energy resources, meet the highest standards. Our portfolio offers diverse hard commodities that not only meet but often surpass industry benchmarks. Your trust in us is well-placed."

    ,
  }
];

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < data.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-container flexCenter">
        <Carousel
          showArrows={false}
          showThumbs={false}
          selectedItem={currentSlide}
          onChange={handleSlideChange}
        >
          {data.map((card, index) => (
            <div key={index} className="slider-div flexCenter">
              <div className="slider-left flexStart">
                <img src={card.src} alt={card.title} />
              </div>

              <div className="slider-right flexColStart">
                <h2 className="primaryText">{card.title}</h2>
                {/* <h5 className="orangeText">{card.headLine}</h5> */}
                <p className="textWrap secondaryTexBlue lineHeight">{card.description}</p>
                {/* <p className="textWrap secondaryTexBlue lineHeight">{card.description}</p> */}
                <div className="slider-buttons flexEnd">
                  <button className="button" onClick={prevSlide} disabled={currentSlide === 0}>
                &lsaquo;
                  </button>
                  <button className="button"
                    onClick={nextSlide}
                    disabled={currentSlide === data.length - 1}
                  >
                    &rsaquo;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default App;
