import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SectionStories.module.scss";
import contentImage from "../assets/unsplash_b0dCy17Zaoo.png";

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
                <img src={contentImage} alt="" />
                <h3>{story.contentHeader}</h3>
                <p>{story.contentBody}</p>
              </Link>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default SectionStories;
