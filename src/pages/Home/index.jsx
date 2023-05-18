import Footer from "../../components/Footer";
import HomeNavbar from "../../components/HomeNavbar";
// import MobileNavbar from '../../components/Nav/Mobile'
import EntryHome from "./components/EntryHomePage";

import Subscribe from "../../components/subscribe/subscribe";

const Homepage = () => {
  return (
    <div>
      <HomeNavbar />
      {/* <MobileNavbar /> */}
      <EntryHome />

      

      <Subscribe />
      <Footer purple={true} />
    </div>
  );
};

export default Homepage;
