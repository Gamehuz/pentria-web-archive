import Footer from "../../components/Footer";
import HomeNavbar from "../../components/HomeNavbar";
import EntryHome from "./components/EntryHomePage";
import Explore from "./components/Explore";
import PartnersAndFAQ from "./components/PartnersAndFAQ.jsx";
import Subscribe from "../../components/subscribe/subscribe";
import styles from "./home.module.scss";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <HomeNavbar />
      <EntryHome />
      <Explore />
      <PartnersAndFAQ />
      <Subscribe />
      <Footer bg={styles.footer} purple={true} />
    </div>
  );
};

export default Homepage;
