import React from "react";
import styles from "./Enquiries.module.scss";

import HomeNavbar from "../../components/HomeNavbar";

import phone from "./assets/phone.svg";
import mail from "./assets/email.svg";
import location from "./assets/location.svg";
import Img from "./assets/contact.svg";

const Enquiries = () => {
  return (
    <>
      <HomeNavbar />
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

        <div className={styles.faq}>
          <h1>Frequently Asked Questions</h1>
          <div className={styles.question}>
            <div className={styles.tag}>
              <h4>How can I reserve playtime in one-click?</h4>
              <p>
                You can reserve playtime by purchasing entry tickets to
                recreation spaces listed on the Pentria website. Simply search
                or click on a space of your choice. Choose an available game or
                facility from the given menu. Select your game time and number
                of tickets you want to purchase. Sign up or sign in to continue.
                Confirm or edit your ticket details, then click on “book now” to
                make payment. After payment, you may print or download your
                ticket, and use it to access the facility at your reserved
                playtime
              </p>
            </div>

            <div className={styles.tag}>
              <h4>Why should I pay online? Is the amount cheaper offline?</h4>
              <p>
                Thanks to our valuable partners, all prices listed on our
                website are indeed slightly cheaper than their offline rates.
                Pentria offers you the best rates you can get to reserve
                playtime in one-click at your own convenience. Save money for
                fun sake. Eliminate waiting time. Beat the offline queue by
                booking ahead for your favorite game times on the Pentria
                website. Work smart, play smart!
              </p>
            </div>

            <div className={styles.tag}>
              <h4>What payment methods can I use?</h4>
              <p>
                You can make payments via the Paystack portal using your Naira
                debit card. Alternatively, you can complete your booking by
                making a direct cash transfer to the company account provided
                upon checkout.
              </p>
            </div>

            <div className={styles.tag}>
              <h4>Can I cancel my booking or resell my ticket?</h4>
              <p>
                Yes, you can cancel your booking and get a refund, provided it
                is done at least 2 hours before your reserved playtime is to
                start. However, you will only be refunded 50% of your ticket
                amount upon cancellation at any point in time. Please note that
                tickets purchased on Pentria are NOT transferable, and so, you
                cannot resell your ticket offline to someone else to use on your
                behalf. To cancel your booking, simply go to the “History” menu
                on your dashboard. Select the active ticket you wish to cancel,
                enter your bank details, and then click on “cancel”.
              </p>
            </div>

            <div className={styles.tag}>
              <h4>What else can I do on Pentria?</h4>
              <p>
                Apart from reserving playtime at recreation spaces, you can also
                purchase tickets to upcoming events nearest to you. Simply click
                on the Events category on the homepage to get started. Coming
                soon: join membership clubs (e.g. gym, yoga, car race, sport
                clubs, cooking or swimming classes, etc.), find a hangout mate,
                get legacy points and more. Expect more custom solutions to all
                your recreation needs only on Pentria.
              </p>
            </div>

            <div className={styles.tag}>
              <h4>
                I own or manage a recreation space. How does Pentria help?
              </h4>
              <p>
                If you own or manage a recreation space in Nigeria, you can
                become one of our highly esteemed partners. As a partner, you
                get to list your facilities for free on the Pentria website, as
                well as receive benefits such as more visibility to your target
                customers, more conversions, and improved business experience.
                More information on the “partners” page. Contact us to get
                started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiries;
