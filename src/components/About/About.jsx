import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./About.css";
import Slider from "./Slider";


function About() {
  return (
    <div>
      <Navbar />
      <div className="a-wrapper">
        <div className="a-container paddings innerWidth flexCenter">
          <div className="flexCenter paddings innerWidth first">
            <div className="flexColCenter a-left innerWidth">
              <span className="orangeText ">About Us</span>
              <span className="primaryTextWhite ">Who we are?</span>
            </div>
            <div className="flexColEnd a-right innerWidth">
              <p className="textWrap flexColEnd secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque, dolorem doloribus exercitationem tempora saepe quos. Est
                laudantium vel doloribus maxime, placeat consequatur quae non!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque, dolorem doloribus exercitationem tempora saepe quos. Est
                laudantium vel doloribus maxime, placeat consequatur quae non!
              </p>
              <p className="textWrap flexColEnd secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque, dolorem doloribus exercitationem tempora saepe quos. Est
                laudantium vel doloribus maxime, placeat consequatur quae non!
              </p>
              <p className="textWrap flexColEnd secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque, dolorem doloribus exercitationem tempora saepe quos. Est
                laudantium vel doloribus maxime, placeat consequatur quae non!
              </p>
            </div>
          </div>
          <div className="flexCenter paddings innerWidth second">
            <div className=" flexColCenter a-left innerWidth displayNone">
              <span className="orangeText flexColCenter">About Us</span>
              <span className="primaryTextWhite flexColCenter">
                Who we are?
              </span>
            </div>
            <div className="flexColStart a-right innerWidth">
              <p className="textWrap flexColEnd secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque, dolorem doloribus exercitationem tempora saepe quos. Est
                laudantium vel doloribus maxime, placeat consequatur quae non!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque, dolorem doloribus exercitationem tempora saepe quos. Est
                laudantium vel doloribus maxime, placeat consequatur quae non!
              </p>
              <p className="textWrap flexColEnd secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque, dolorem doloribus exercitationem tempora saepe quos. Est
                laudantium vel doloribus maxime, placeat consequatur quae non!
              </p>
              <p className="textWrap flexColEnd secondaryText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque, dolorem doloribus exercitationem tempora saepe quos. Est
                laudantium vel doloribus maxime, placeat consequatur quae non!
              </p>
            </div>
            <div className=" flexColCenter a-left innerWidth">
              <span className="orangeText ">About Us</span>
              <span className="primaryTextWhite ">Who we are?</span>
            </div>
          </div>
          <Slider />
        </div>
      </div>
      {/* Your Home page content */}
      <Footer />
    </div>
  );
}

export default About;

