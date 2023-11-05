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
              1. Acceptance of Terms: By accessing, browsing, or using any of
              Agora International Incorporated's services, including our website
              and related platforms, you agree to be bound by these Terms and
              Conditions. If you do not agree to these terms, please refrain
              from using our services. 2. Use of Services: Agora International
              grants you a non-exclusive, non-transferable, revocable license to
              use our services for your personal or business purposes. You must
              comply with all applicable laws and regulations while using our
              services. 3. Privacy: Your use of our services is also governed by
              our Privacy Policy. By using our services, you consent to the
              collection, use, and sharing of your information as described in
              our Privacy Policy. 4. Intellectual Property: All content on our
              services, including text, graphics, logos, images, and software,
              is the property of Agora International or its content suppliers
              and is protected by copyright and other intellectual property
              laws. 5. Restrictions: You are prohibited from: Reproducing,
              distributing, or modifying our content without our express
              consent. Engaging in any activity that disrupts or interferes with
              our services. Using our services for any illegal or unauthorized
              purpose. 6. Liability: Agora International Incorporated is not
              liable for any direct, indirect, incidental, special,
              consequential, or punitive damages resulting from the use or
              inability to use our services. 7. Indemnification: You agree to
              indemnify and hold Agora International, its affiliates, officers,
              agents, and employees harmless from any claims, damages, and
              expenses arising from your use of our services. 8. Termination:
              Agora International may terminate or suspend your access to our
              services at its sole discretion, without notice, for any violation
              of these Terms and Conditions. 9. Governing Law: These Terms and
              Conditions are governed by and construed in accordance with the
              laws of [Insert Jurisdiction]. Any disputes will be subject to the
              exclusive jurisdiction of the courts in [Insert Jurisdiction]. 10.
              Changes to Terms: Agora International may update these Terms and
              Conditions at any time. You are responsible for reviewing the
              latest version before using our services.
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
