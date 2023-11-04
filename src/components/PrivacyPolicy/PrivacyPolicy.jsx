import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import './PrivacyPolicy.css'
function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="pp-wrapper">
        <motion.div
          initial={{ x: "5rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className="pp-container paddings innerWidth flexColCenter"
        >
          <h5 className="primaryTextOrange h5Headers flexEnd">Privacy Policy</h5>
          <div className="flexColEnd pp-text secondaryTextGray">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos aliquid rem fuga placeat sequi, fugiat dolor illo!
              Dolores odio perspiciatis, ea et vero doloribus, quae aperiam
              similique vitae iusto excepturi exercitationem commodi recusandae
              quaerat assumenda repellat fugit, labore nihil praesentium
              asperiores natus atque a voluptate deleniti? Minus ea fuga
              debitis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos aliquid rem fuga placeat sequi, fugiat dolor illo!
              Dolores odio perspiciatis, ea et vero doloribus, quae aperiam
              similique vitae iusto excepturi exercitationem commodi recusandae
              quaerat assumenda repellat fugit, labore nihil praesentium
              asperiores natus atque a voluptate deleniti? Minus ea fuga
              debitis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos aliquid rem fuga placeat sequi, fugiat dolor illo!
              Dolores odio perspiciatis, ea et vero doloribus, quae aperiam
              similique vitae iusto excepturi exercitationem commodi recusandae
              quaerat assumenda repellat fugit, labore nihil praesentium
              asperiores natus atque a voluptate deleniti? Minus ea fuga
              debitis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos aliquid rem fuga placeat sequi, fugiat dolor illo!
              Dolores odio perspiciatis, ea et vero doloribus, quae aperiam
              similique vitae iusto excepturi exercitationem commodi recusandae
              quaerat assumenda repellat fugit, labore nihil praesentium
              asperiores natus atque a voluptate deleniti? Minus ea fuga
              debitis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos aliquid rem fuga placeat sequi, fugiat dolor illo!
              Dolores odio perspiciatis, ea et vero doloribus, quae aperiam
              similique vitae iusto excepturi exercitationem commodi recusandae
              quaerat assumenda repellat fugit, labore nihil praesentium
              asperiores natus atque a voluptate deleniti? Minus ea fuga
              debitis.
            </p>
          </div>
        </motion.div>
      </div>
      {/* Your Home page content */}
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
