import React from "react";
import styles from "./Partners.module.scss";

import HomeNavbar from "../../components/HomeNavbar";

import partners from "./assets/partners.svg";
import cart from "./assets/cart.svg";
import mobile from "./assets/9mobile.svg";
import mtn from "./assets/MTN.svg";
import netflix from "./assets/netflix.svg";
import playstation from "./assets/playstation.svg";
import user from "./assets/user.svg";
import quote_right from "./assets/quote_right.svg";
import quote_left from "./assets/quote_left.svg";

const Partners = () => {
  return (
    <>
      <HomeNavbar />
      <div className={styles.section_container}>
        <div className={styles.hero_section}>
          <div className={styles.content_one}>
            <h1>Join the Pentria Partnership Program</h1>
            <p>
              Take advantage of our recreation marketing solution to optimize
              and scale your business or brand. Become the go-to recreation
              service provider in your area, only on Pentria.
            </p>
            <form>
              <input type="email" name="email" />
              <input type="submit" value="Join" />
            </form>
            <div className={styles.users}>
              <div>
                <p>1000+</p>
                <p>Active users since 2022</p>
              </div>
              <div>
                <p>20+</p>
                <p>Active partners since 2022</p>
              </div>
            </div>
          </div>
          <div className={styles.content_two}>
            <img src={partners} alt="partners" />
          </div>
        </div>

        <div className={styles.partners_company}>
          <div>
            <img src={netflix} alt="netflix" />
          </div>
          <div>
            <img src={playstation} alt="playstation" />
          </div>
          <div>
            <img src={mtn} alt="mtn" />
          </div>
          <div>
            <img src={mobile} alt="mobile" />
          </div>
          <div>
            <img src={netflix} alt="netflix" />
          </div>
          <div>
            <img src={playstation} alt="playstation" />
          </div>
          <div>
            <img src={mtn} alt="mtn" />
          </div>
          <div>
            <img src={mobile} alt="mobile" />
          </div>
        </div>

        <div className={styles.section}>
          <h1>Why use Pentria?</h1>
          <div>
            <div className={styles.sec_cont}>
              <img src={cart} alt="cart" />
              <h3>Value-Added Spaces</h3>
              <p>
                Do you own a facility or property which could be used for
                recreation purposes? Add value to such by listing it on Pentria.
              </p>
            </div>
            <div className={styles.sec_cont}>
              <img src={cart} alt="cart" />
              <h3>Increased Exposure</h3>
              <p>
                Become visible to thousands of potential customers who are eager
                to get the unique experiences you offer.
              </p>
            </div>
            <div className={styles.sec_cont}>
              <img src={cart} alt="cart" />
              <h3>Seamless & Safe Bookings</h3>
              <p>
                Our intuitive UI/UX design and strict online security measures
                ensure a simple and secure booking experience for real customers
                to keep ‘em coming.
              </p>
            </div>
            <div className={styles.sec_cont}>
              <img src={cart} alt="cart" />
              <h3>Marketing Conversions</h3>
              <p>
                Generate more sales using Pentria via targeted marketing
                campaigns on our email lists, website and social media channels.
              </p>
            </div>
            <div className={styles.sec_cont}>
              <img src={cart} alt="cart" />
              <h3>Revenue Tracking</h3>
              <p>
                Know how much you’re making per time. Visualize your income
                progress, gauge your returns, and level up your business.
              </p>
            </div>
            <div className={styles.sec_cont}>
              <img src={cart} alt="cart" />
              <h3>Free Withdrawals</h3>
              <p>
                Withdraw your earnings at anytime from your Pentria wallet to
                your local bank account. Get credited within minutes. And smile;
                it’s free!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
