import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import "./PrivacyPolicy.css";
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
          <h5 className="primaryTextOrange h5Headers flexEnd">
            Privacy Policy
          </h5>
          <div className="flexColEnd pp-text secondaryTextGray lineHeight">
            <p>
              Agora International Incorporated ("Agora," "we," "us," or "our")
              values your privacy and is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information. By accessing or using
              our services, you consent to the practices described in this
              Privacy Policy.
            </p>
            <div>
              <span>Information We Collect:</span>
              <p>
                We may collect various types of information, including but not
                limited to: Personal Information: Name, contact details, job
                title, and other identifiers. Financial Information: Payment
                details and transaction history. Technical Information: IP
                address, browser type, device information, and usage data.
                Communications: Records of your interactions with us, including
                emails, chat, and telephone conversations.
              </p>
              <br/>
              <p>
                {" "}
                How We Use Your Information: We may use your information for the
                following purposes: To provide, maintain, and improve our
                products and services. To process and fulfill your orders and
                transactions. To communicate with you, respond to inquiries, and
                provide customer support. To send updates, newsletters, and
                promotional materials. To comply with legal obligations and
                protect our rights. Sharing Your Information: We may share your
                information with: Service Providers: Third-party service
                providers who assist us in delivering our services.
              </p>
            </div>
            <div>
              <span>Business Partners:</span>
              <p>
                Trusted partners and affiliates with whom we collaborate. Legal
                Compliance: When required to comply with legal obligations or
                protect our interests.
              </p>
            </div>
            <div>
              <span> Your Choices:</span>
              <p>
                You have choices regarding your personal information, including:
                Access and Correction: You may request access to, correction, or
                deletion of your information.
              </p>
            </div>
            <div>
              <span>Marketing Communications: </span>
              <p>
                You can opt-out of receiving marketing communications from us.
                Cookies: You can manage your cookie preferences through your
                browser settings.
              </p>
            </div>
            <div>
              <span>Security: </span>
              <p>
                We employ industry-standard security measures to protect your
                information. However, no method of transmission or storage is
                entirely secure, and we cannot guarantee absolute security.
              </p>
            </div>
            <div>
              <span>Children's Privacy:</span>
              <p>
                Our services are not intended for individuals under the age of
                13. We do not knowingly collect information from children.
              </p>
            </div>
            <div>
              <span>Changes to this Privacy Policy: </span>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for legal compliance. We will notify
                you of any significant updates.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Your Home page content */}
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
