import React from 'react'
import styles from "./Enquiries.module.scss"

import phone from "./assets/phone.svg"
import mail from "./assets/email.svg"
import location from "./assets/location.svg"
import Img from "./assets/contact.svg"

const Enquiries = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero_section}>
        <div className={styles.sec_one}>
          <h1>Contact Us</h1>
          <div>
            <img src={phone} alt="phone" />
            <p>+2348058092806, +2348065786845</p>
          </div>
          <div>
            <img src={mail} alt="phone" />
            <p>hello@gamehauz.com</p>
          </div>
          <div>
            <img src={location} alt="location" />
            <p>2 Okuta Ave., 500102, Port Harcourt, Nigeria </p>
          </div>
        </div>
              <div className={styles.sec_two}>
                  <img src={Img} alt="group" />
        </div>
          </div>
          
          <hr />
    </div>
  );
}

export default Enquiries