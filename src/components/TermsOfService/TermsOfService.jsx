import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./TermsOfService.css";
import { motion } from "framer-motion";

function TermsOfService() {
  return (
    <div>
      <Navbar />
      <div className="tos-wrapper">
        <motion.div
          initial={{ x: "5rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className="tos-container paddings innerWidth flexColCenter"
        >
          <h5 className="primaryTextOrange h5Headers flexEnd">
            Terms Of Service
          </h5>
          <div className="flexColEnd tos-text secondaryTextGray lineHeight">
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
              debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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

export default TermsOfService;
