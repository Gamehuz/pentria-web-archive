import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import InputField from "../InputField";
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg";
import {
  ReactComponent as Twitter,
  ReactComponent as WhiteLinkedin,
  ReactComponent as WhiteTwitter,
} from "./assets/twitter.svg";
import { ReactComponent as Youtube } from "./assets/youtube.svg";
import styles from "./footer.module.scss";

// example bg for purple background = <Footer bg={styles.bg} purple={true}/>
// bg {
//     background-color: var(--secondary-color);
//     color: white;

//     p,
//     a,
//     h2 {
//         color: white !important;
//     }
// }

const Footer = ({ bg, purple }) => {
  const [subscribe, setSubscribe] = useState("");

  return (
    <footer className={bg ? bg : styles.footer}>
      <div className={styles.footercontainer}>
        <h2>Pentria</h2>
        <div className={styles.info}>
          <span className={styles.subscribe}>Subscribe to our Newsletter</span>
          <div className={styles.inputGroup}>
            <InputField
              name="subscribe"
              type={"text"}
              placeholder={"Enter your email"}
              value={subscribe}
              onChange={(e) => setSubscribe(e.target.value)}
            />
            <Button type={"button"} bg={styles.button} text={"SUBSCRIBE"} />
          </div>
          <div className={styles.pageLinks}>
            <div>
              <span>About</span>
              <Link to="/about-us">About us</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/enquiries">Contact us</Link>
            </div>
            <div>
              <span>Legal</span>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/termsofuse">Terms of use</Link>
            </div>
            <div>
              <span>Social</span>
              <a>
                {purple ? <WhiteTwitter /> : <Twitter />}
                <p>Twitter</p>
              </a>
              <a>
                {purple ? <WhiteLinkedin /> : <LinkedIn />}
                <p>LinkedIn</p>
              </a>
              <a>
                <Youtube />
                <p>Youtube</p>
              </a>
            </div>
          </div>
          <p className={styles.copy}>
            © Copyright 2023 by Gamehauz, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  bg: PropTypes.object.isRequired,
  purple: PropTypes.bool.isRequired,
};

export default Footer;
