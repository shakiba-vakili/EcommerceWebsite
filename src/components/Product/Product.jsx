import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Product.css";
import { motion } from "framer-motion";

const data = [
  {
    src: "test23.jpg",
    title: "Soft Commodities",
    description:
      "Our dedication to trading soft commodities is a testament to our unwavering commitment to quality and trust. We understand that soft commodities play a vital role in the global supply chain, and the reliability and integrity of our trading practices are central to the success of our partners and clients.",
    description2:
      "We take immense pride in our meticulous selection of soft commodities, including agricultural products like Grains, Oilseeds, Coffee, Tobacco and more. Our global network of suppliers and partners is carefully vetted to ensure that the commodities we trade meet the highest quality standards. Rigorous quality control processes are a cornerstone of our operations, guaranteeing that the soft commodities we offer are not only of the finest quality but also ethically and sustainably sourced. Our commitment to transparency and adherence to industry best practices are reasons you can trust Agora International as your trading partner. We are dedicated to ensuring that your soft commodity needs are met with excellence, integrity, and a steadfast focus on quality and trust.",
  },
  {
    src: "heroImage2.jpg",
    title: "Machinery",
    description:
      "We understand that in the food sector, precision, reliability, and efficiency are non-negotiable factors. That's why we're deeply committed to sourcing and trading the highest quality food machinery, designed to meet the rigorous demands of the industry. At Agora International, our reputation is built on an unwavering dedication to quality and trust in every piece of machinery we offer.",
    description2: "Our portfolio boasts a diverse range of food industry machinery, from food processing and packaging equipment to quality control systems and refrigeration solutions. We're more than just traders; we're purveyors of excellence. Every machine we source undergoes meticulous quality checks to ensure it meets the stringent industry standards. When you choose Agora International for your food machinery needs, you're making a choice for quality, precision, and a commitment to excellence.",
  },
  {
    src: "heroImage3.jpg",
    title: "Construction Material",
    description:"Agora International Incorporated is your dependable partner in the realm of construction materials. We understand that quality construction materials are the bedrock of every successful project, and that's precisely what we offer. With a deep commitment to excellence, we trade a comprehensive range of construction materials, including Chalk, Pitch, Rebar, and more. Our dedication to sourcing only the highest-quality materials ensures that your trust in us is well-placed.",
    description2: "In the complex world of construction, trust is fundamental. Agora International has earned its reputation through an unrelenting commitment to quality and reliability. When you opt for us as your source for construction materials, you're not only choosing quality, but also trust. Trust in the excellence of our materials, trust in our impeccable service, and trust in our unwavering dedication to your project's success. Make Agora International your first choice for dependable, top-quality construction materials you can rely on.",
  },
  {
    src: "heroImage1.jpg",
    title: "Hard Commodities",
    description:
      "We understand the critical role that Hard Commodities play in various industries, and our commitment to excellence is central to every transaction we undertake. Whether it's Metals, Minerals, or Energy Resources, our rigorous selection process ensures that the commodities we trade meet the highest quality standards, assuring you that your trust in us is well-founded.",
    description2: "Our portfolio encompasses a diverse range of hard commodities, catering to the unique needs of various industries. We don't merely trade commodities; we diligently scrutinize and validate the quality of each product we offer. Quality assurance and unwavering integrity are the cornerstones of our operations, ensuring that when you choose Agora International as your trading partner, you're choosing commodities that are not only reliable but often surpass industry benchmarks. In the ever-evolving world of commodities, trust is paramount. At Agora International, trust is not just an expectation; it's a commitment we live up to with the consistent delivery of top-tier hard commodities.",
  },
];

function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-wrapper">
        <div className="p-container paddings innerWidth flexCenter">
          <h5 className="primaryTextOrange h5Headers flexCenter">
            Product & Services
          </h5>
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
                {/* <h5 className="orangeText">{card.headLine}</h5> */}
                <p className="textWrap secondaryTexBlue lineHeight">
                  {card.description}
                </p>
                <p className="textWrap secondaryTexBlue lineHeight">
                  {card.description2}
                </p>
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
