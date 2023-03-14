import React from "react";
import { Link } from "react-router-dom";
import styles from "./SectionStories.module.scss";

const SectionStories = ({ smallHeader, mainHeader, mainContent }) => {
  return (
    <>
      <div className={styles.SectionStories}>
        <section className={styles.heading}>
          <div className={styles.heading_top}>
            <svg
              width="61"
              height="1"
              viewBox="0 0 61 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="61" y2="0.5" stroke="black" />
            </svg>
            <p>{smallHeader}</p>
          </div>
          <h2>{mainHeader}</h2>
        </section>
        <section className={styles.content}>
          {mainContent.map((story) => {
            return (
              <Link className={styles.card}>
                <div className={styles.card__imgWrap}>
                  <img src={story.img} alt="" />
                </div>
                <h3>{story.title}</h3>
                <p>{story.desc}</p>
              </Link>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default SectionStories;
