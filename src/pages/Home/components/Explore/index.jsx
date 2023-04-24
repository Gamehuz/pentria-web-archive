import { useQuery } from "@apollo/client";
import ALL_SPACES from "../../../../graphql/queries/spaces";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
// import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
import ButtonSpinner from "../../../../components/ButtonSpiner";
import ExploreSpaces from "./components/exploreSpaces";
import UpcomingSpaces from "./components/upcomingSpaces";
import styles from "./explore.module.scss";
import { useEffect, useState } from "react";

const Explore = () => {
  const { data, loading } = useQuery(ALL_SPACES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUpcomingIndex, setCurrentUpcomingIndex] = useState(0);
  const [dimension, setDimension] = useState({width: 0});
  const articleToShow = dimension.width < 768 ? 1 : dimension.width < 1100 ? 2 : 3;

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
  console.log(dimension.width)

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

  console.log(data);
  return (
    <section className={styles.explore}>
      <span>
        <div></div>
        EXPLORE
      </span>
      <div className={styles.exploreHeader}>
        <h2>Spaces to Go</h2>
        <span>Explore All</span>
      </div>
      <div className={styles.arrows}>
        <LeftArrow onClick={() => handlePrev()} />
        <RightArrow onClick={() => handleNext()}/>
      </div>
      <div className={styles.spaces}>
        <LeftArrow className={styles.desktopLArrow} onClick={() => handlePrev()}/>
        {loading ? (
          // <div className={styles.spinner}>
          //   <div></div>
          //   <div></div>
          //   <div></div>
          //   <div></div>
          //   <div></div>
          //   <div></div>
          //   <div></div>
          //   <div></div>
          //   <div></div>
          //   <div></div>
          //   <div></div>
          //   <div></div>
          // </div>
          <ButtonSpinner />
        ) : (
          ""
        )}
        {/* <Swiper navigation={true} modules={[Navigation]}>
          {data &&
            data?.spaces.map((space) => {
              return (
                <SwiperSlide key={space._id}>
                  <ExploreSpaces space={space} key={space._id} />
                </SwiperSlide>
              );
            })}
        </Swiper> */}
        {renderSpaces()}
        <RightArrow className={styles.desktopRArrow} onClick={() => handleNext()}/>
      </div>
      <div className={styles.upcoming}>
        <span>Upcoming Events</span>
        <div className={styles.arrows}>
          <LeftArrow onClick={() => handleUpcomingPrev()}/>
          <RightArrow onClick={() => handleUpcomingNext()}/>
        </div>
        <div>
          <LeftArrow className={styles.desktopLArrow} onClick={() => handleUpcomingPrev()}/>
          {loading ? (
            // <div className={styles.spinner}>
            //   <div></div>
            //   <div></div>
            //   <div></div>
            //   <div></div>
            //   <div></div>
            //   <div></div>
            //   <div></div>
            //   <div></div>
            //   <div></div>
            //   <div></div>
            //   <div></div>
            //   <div></div>
            // </div>
            <ButtonSpinner />
          ) : (
            ""
          )}
          {/* <Swiper navigation={true} modules={[Navigation]}>
            {data &&
              data?.spaces.map((space) => {
                return (
                  <SwiperSlide key={space._id}>
                    <UpcomingSpaces space={space} key={space._id} />
                  </SwiperSlide>
                );
              })}
          </Swiper> */}
          {renderUpcomingSpaces()}
          <RightArrow className={styles.desktopRArrow} onClick={() => handleUpcomingNext()}/>
        </div>
      </div>
    </section>
  );
};

export default Explore;
