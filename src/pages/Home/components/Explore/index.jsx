import { useQuery } from "@apollo/client";
import ALL_SPACES from "../../../../graphql/queries/spaces";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import "swiper/css";
import "swiper/css/navigation";
import ButtonSpinner from "../../../../components/ButtonSpiner";
import ExploreSpaces from "./components/exploreSpaces";
import UpcomingSpaces from "./components/upcomingSpaces";
import styles from "./explore.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const { data, loading } = useQuery(ALL_SPACES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUpcomingIndex, setCurrentUpcomingIndex] = useState(0);
  const [dimension, setDimension] = useState({width: 0});
  const articleToShow = dimension.width < 750 ? 1 : dimension.width < 1100 ? 2 : 3;
  const navigate = useNavigate();

  const resize = () => {
    setDimension({
      width: window.innerWidth
    })
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();

    return () => {
        window.removeEventListener("resize", resize);
    };
}, []);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(data?.spaces.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === data?.spaces.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleUpcomingPrev = () => {
    if (currentUpcomingIndex === 0) {
      setCurrentUpcomingIndex(data?.spaces.length - 1);
    } else {
      setCurrentUpcomingIndex(currentUpcomingIndex - 1);
    }
  };

  const handleUpcomingNext = () => {
    if (currentUpcomingIndex === data?.spaces.length - 1) {
      setCurrentUpcomingIndex(0);
    } else {
      setCurrentUpcomingIndex(currentUpcomingIndex + 1);
    }
  };

  const renderSpaces = () => {
    const startIndex = currentIndex > 1 ? currentIndex - 1 : 0;
    const endIndex = startIndex + articleToShow > data?.spaces.length ? data?.spaces.length : startIndex + articleToShow;

    return data?.spaces.slice(startIndex, endIndex).map((space) => (
      <ExploreSpaces key={space._id} space={space} />
    ));
  };

  const renderUpcomingSpaces = () => {
    const startIndex = currentUpcomingIndex > 1 ? currentUpcomingIndex - 1 : 0;
    const endIndex = startIndex + articleToShow > data?.spaces.length ? data?.spaces.length : startIndex + articleToShow;

    return data?.spaces.slice(startIndex, endIndex).map((space) => (
      <UpcomingSpaces key={space._id} space={space} />
    ));
  };

  return (
    <section className={styles.explore}>
      <span>
        <div></div>
        EXPLORE
      </span>
      <div className={styles.exploreHeader}>
        <h2>Spaces to Go</h2>
        <span onClick={() => navigate("/explore")}>Explore All</span>
      </div>
      {/* className={`slide ${index === currentSlide ? 'current' : ''}`}
          style={{ left: `${index * 100}%` }} */}
      <div className={styles.spaces}>
        <LeftArrow className={styles.desktopLArrow} onClick={() => handlePrev()}/>
        {loading ? (
          <ButtonSpinner />
        ) : (
          ""
        )}
        {renderSpaces()}
        <RightArrow className={styles.desktopRArrow} onClick={() => handleNext()}/>
      </div>
      <p className={styles.page}>{currentIndex + 1} of {data?.spaces.length}...</p>
      <div className={styles.upcoming}>
        <span>Upcoming Events</span>
        <div>
          <LeftArrow className={styles.desktopLArrow} onClick={() => handleUpcomingPrev()}/>
          {loading ? (
            <ButtonSpinner />
          ) : (
            ""
          )}
          {renderUpcomingSpaces()}
          <RightArrow className={styles.desktopRArrow} onClick={() => handleUpcomingNext()}/>
        </div>
        <p className={styles.page} style={{ color: "white" }}>{currentUpcomingIndex + 1} of {data?.spaces.length}...</p>
      </div>
    </section>
  );
};

export default Explore;
