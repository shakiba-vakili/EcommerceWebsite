import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";

const data = [
  {
    src: "heroImage1.jpg",
    title: "Image 1",
    headLine: "This is the first image.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque autem ipsa culpa esse omnis eaque sapiente fuga ullam quidem, sunt optio mollitia sequi accusantium ipsum voluptatibus sint obcaecati non laborum vitae cupiditate a qui. Eius quod at animi odio!",
  },
  {
    src: "heroImage2.jpg",
    title: "Image 2",
    headLine: "This is the second image.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque autem ipsa culpa esse omnis eaque sapiente fuga ullam quidem, sunt optio mollitia sequi accusantium ipsum voluptatibus sint obcaecati non laborum vitae cupiditate a qui. Eius quod at animi odio!",
  },
  {
    src: "heroImage3.jpg",
    title: "Image 3",
    headLine: "This is the third image.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque autem ipsa culpa esse omnis eaque sapiente fuga ullam quidem, sunt optio mollitia sequi accusantium ipsum voluptatibus sint obcaecati non laborum vitae cupiditate a qui. Eius quod at animi odio!",
  },
  {
    src: "heroImage1.jpg",
    title: "Image 4",
    headLine: "This is the four image.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque autem ipsa culpa esse omnis eaque sapiente fuga ullam quidem, sunt optio mollitia sequi accusantium ipsum voluptatibus sint obcaecati non laborum vitae cupiditate a qui. Eius quod at animi odio!",
  },
  {
    src: "heroImage2.jpg",
    title: "Image 5",
    headLine: "This is the five image.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque autem ipsa culpa esse omnis eaque sapiente fuga ullam quidem, sunt optio mollitia sequi accusantium ipsum voluptatibus sint obcaecati non laborum vitae cupiditate a qui. Eius quod at animi odio!",
  },
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
          // swipeable={true} // Enable swipe support

        >
          {data.map((card, index) => (
            <div key={index} className="slider-div flexCenter">
              <div className="slider-left flexStart">
                <img src={card.src} alt={card.title} />
              </div>

              <div className="slider-right flexColStart">
                <h2 className="primaryText">{card.title}</h2>
                <h5 className="orangeText">{card.headLine}</h5>
                <p className="textWrap secondaryTexBlue lineHeight">{card.description}</p>
                <p className="textWrap secondaryTexBlue lineHeight">{card.description}</p>
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
