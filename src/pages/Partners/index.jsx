import styles from "./Partners.module.scss";
import HomeNavbar from "../../components/HomeNavbar";
import Footer from "../../components/Footer";
import Subscribe from "../../components/subscribe/subscribe";
import mobile from "./assets/9mobile.svg";
import cart from "./assets/cart.svg";
import mtn from "./assets/MTN.svg";
import netflix from "./assets/netflix.svg";
import partners from "./assets/partners.svg";
import playstation from "./assets/playstation.svg";
import quote_left from "./assets/quote_left.svg";
import quote_right from "./assets/quote_right.svg";
import rating from "./assets/rating.svg";
import user from "./assets/user.svg";

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
              <input
                type="email"
                name="email"
                placeholder="john.doe@gmail.com"
              />
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
          <hr className={styles.hr} />
        </div>

        <div className={styles.reveiw_section}>
          <div className={styles.review_header}>
            <img src={quote_left} alt="" />
            <div>
              <hr />
              <p>Partner Reviews</p>
              <hr />
            </div>
            <img src={quote_right} alt="" />
          </div>

          <div className={styles.testimony}>
            <h1>What Are They Saying?</h1>
            <p>Hear from verified business owners using Pentria</p>

            <div className={styles.user_testimony}>
              <div className={styles.testimony_container}>
                <img src={user} alt="user" />
                <div>
                  <p>
                    Amazing platform, didn’t know how I could get more customers
                    easily until I found Pentria.
                  </p>
                  <div>
                    <img src={rating} alt="rating" />
                    <p>4.0 rating</p>
                  </div>
                  <p>Victoria Ekpo (Hugly Ent., Lagos)</p>
                </div>
              </div>

              <div className={styles.testimony_container}>
                <img src={user} alt="user" />
                <div>
                  <p>
                    Disruptive indeed! Now, we have a database to help keep up
                    with our regular customers, thanks to Pentria.
                  </p>
                  <div>
                    <img src={rating} alt="rating" />
                    <p>4.0 rating</p>
                  </div>
                  <p>Desmond Ugo (Cubana, Owerri)</p>
                </div>
              </div>

              <div className={styles.testimony_container}>
                <img src={user} alt="user" />
                <div>
                  <p>
                    Less crowd and queue of customers waiting for their turn to
                    use the facility. Less stress for me too. Feels good!
                  </p>
                  <div>
                    <img src={rating} alt="rating" />
                    <p>4.0 rating</p>
                  </div>
                  <p>Mike V. (Alpha Paintball, PH City) </p>
                </div>
              </div>

              <div className={styles.testimony_container}>
                <img src={user} alt="user" />
                <div>
                  <p>
                    Pentria has helped me launch and maintain a cool membership
                    package for my clients. And everyone’s happy.
                  </p>
                  <div>
                    <img src={rating} alt="rating" />
                    <p>4.0 rating</p>
                  </div>
                  <p>Olumide Sogo (KO Gym & Spa, Abuja) </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer bg={undefined} purple={true} />
    </>
  );
};

export default Partners;
