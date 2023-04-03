import { useQuery } from "@apollo/client";
import React from "react";
import ALL_SPACES from "../../../../graphql/queries/spaces";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import ExploreSpaces from "./components/exploreSpaces";
import UpcomingSpaces from "./components/upcomingSpaces";
import styles from "./explore.module.scss";
// import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css';

const Explore = () => {
  const { data, loading } = useQuery(ALL_SPACES);

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
        <LeftArrow />
        <RightArrow />
      </div>
      <div className={styles.spaces}>
        <LeftArrow className={styles.desktopLArrow} />
        {loading ? (
          <div className={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          ""
        )}
        {/* <Swiper> */}
        {data &&
          data?.spaces.map((space) => {
            return (
              // <SwiperSlide key={spaces._id}>
              <ExploreSpaces space={space} key={space._id} />
              // </SwiperSlide>
            );
          })}
        {/* </Swiper> */}
        <RightArrow className={styles.desktopRArrow} />
      </div>
      <div className={styles.upcoming}>
        <span>Upcoming Events</span>
        <div className={styles.arrows}>
          <LeftArrow />
          <RightArrow />
        </div>
        <div>
          <LeftArrow className={styles.desktopLArrow} />
          {loading ? (
            <div className={styles.spinner}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            ""
          )}
          {data &&
            data?.spaces.map((space) => {
              return <UpcomingSpaces space={space} key={space._id} />;
            })}
          <RightArrow className={styles.desktopRArrow} />
        </div>
      </div>
    </section>
  );
};

export default Explore;
