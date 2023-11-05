import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Product.css";
import { motion } from "framer-motion";

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
];

function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-wrapper">
        <div className="p-container paddings innerWidth flexCenter">
          <h5 className="primaryTextOrange h5Headers flexCenter">Product & Services</h5>
          {data.map((card, index) => (
            <div
              key={index}
              className={`product-div paddings flexCenter product-${
                index % 2 === 0 ? "even" : "odd"
              }`}
            >
              <motion.div
                initial={{ x: "5rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
                className={`product-${
                  index % 2 === 0 ? "right" : "left"
                } flexCenter image-container`}
              >
                <img src={card.src} alt={card.title} />
              </motion.div>

              <div
                className={`product-${
                  index % 2 === 0 ? "left" : "right"
                } flexColStart`}
              >
                <h2 className="primaryText">{card.title}</h2>
                <h5 className="orangeText">{card.headLine}</h5>
                <p className="textWrap secondaryTexBlue lineHeight">{card.description}</p>
                <p className="textWrap secondaryTexBlue lineHeight">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
