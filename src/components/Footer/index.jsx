import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg";
import {
  ReactComponent as Twitter,
} from "./assets/twitter.svg";
import {
  ReactComponent as WhiteTwitter,
} from "./assets/whiteTwitter.svg";
import {
  ReactComponent as WhiteLinkedin,
} from "./assets/whiteLinkedin.svg";

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

  // console.log(bg)

  return (
    <footer className='py-16 px-4'>
      <div className='lg:flex justify-around'>
        <h2 className={purple ? "text-white font-bold text-[38px]" : "text-primaryColor font-bold text-[38px]"}>Pentria</h2>
        <div className={styles.info}>
          <div className={purple ? 'flex justify-between lg:w-[500px] text-white' : 'flex justify-between lg:w-[500px]'}>
            <div className="">
              <h2 className="font-semibold text-[18px]">About</h2>
              <ul>
                <li className='pt-5'>
                  <Link to="/about-us">About us</Link>
                </li>
                <li className='pt-5'>
                  <Link to="/blog">Blog</Link>
                </li>
                <li className='pt-5'>
                  <Link to="/enquiries">Contact us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-[18px]">Legal</h2>
              <ul>
                <li className='pt-5'>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className='pt-5'>
                  <Link to="/termsofuse">Terms of use</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-[18px]">Social</h2>
              <ul>
                <li className='pt-5'>
                  <a className="flex">
                    {purple ? <WhiteTwitter  /> : <Twitter />}
                    <p>Twitter</p>
                  </a>
                </li>
                <li className='pt-5'>
                  
                  <a className="flex">
                    {purple ? <WhiteLinkedin /> : <LinkedIn />}
                    <p>LinkedIn</p>
                  </a>
                </li>
                <li className='pt-5'>

                  <a className="flex">
                    <Youtube />
                    <p>Youtube</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
          <p className={purple ? 'text-center text-white mt-14 lg:mt-32': 'text-center mt-14 lg:mt-32'}>
            © Copyright 2023 by Gamehauz, Inc. All rights reserved.
          </p>
    </footer>
  );
};

Footer.propTypes = {
  bg: PropTypes.object.isRequired,
  purple: PropTypes.bool.isRequired,
};

export default Footer;
