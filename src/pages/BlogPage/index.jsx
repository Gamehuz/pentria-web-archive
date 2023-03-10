import React, { useState } from "react";
import styles from "./BlogPage.module.scss";
import HomeNavbar from "../../components/HomeNavbar";
import SectionStories from "./components/SectionStories";
import { Link } from "react-router-dom";
import heroImage from "./assets/pexels-rodnae-productions-6224736 3.png";

const BlogPage = () => {
  const staticPropsArray = [
    {
      smallHeader: "BLOG",
      mainHeader: "Latest Stories",
      mainContent: [
        {
          contentHeader: "How to Create a Pentria Business Account in Seconds",
          contentBody:
            "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
        },
        {
          contentHeader: "How to Create a Pentria Business Account in Seconds",
          contentBody:
            "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
        },
        {
          contentHeader: "How to Create a Pentria Business Account in Seconds",
          contentBody:
            "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
        },
      ],
    },
    {
      smallHeader: "LEARN",
      mainHeader: "Resources",
      mainContent: [
        {
          contentHeader: "How to Create a Pentria Business Account in Seconds",
          contentBody:
            "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
        },
        {
          contentHeader: "How to Create a Pentria Business Account in Seconds",
          contentBody:
            "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
        },
        {
          contentHeader: "How to Create a Pentria Business Account in Seconds",
          contentBody:
            "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
        },
      ],
    },
    {
      smallHeader: "GALLERY",
      mainHeader: "Photo Splash",
      mainContent: [
        {
          contentHeader: "How to Create a Pentria Business Account in Seconds",
          contentBody:
            "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
        },
        {
          contentHeader: "How to Create a Pentria Business Account in Seconds",
          contentBody:
            "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
        },
        {
          contentHeader: "How to Create a Pentria Business Account in Seconds",
          contentBody:
            "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
        },
      ],
    },
  ];

  return (
    <>
      <div className={styles.BlogPage}>
        <HomeNavbar />
        <main>
          <header>
            <div className={styles.left_hero}>
              <h1>Pentria Raises $50,000 in First Pre-Seed Round</h1>
              <p>
                A highly electric pitch deck presentation by Brand Ambassador,
                Melvin Yates, is well rewarded with half a hundred thousand
                dollars for Pentria, Africa’s leading recreation marketplace.
              </p>
              <Link className={styles.Link}>
                <p>Read Story</p>
                <svg
                  width="68"
                  height="8"
                  viewBox="0 0 68 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.3536 4.35356C67.5488 4.1583 67.5488 3.84171 67.3536 3.64645L64.1716 0.464472C63.9763 0.269209 63.6597 0.269209 63.4645 0.464472C63.2692 0.659734 63.2692 0.976316 63.4645 1.17158L66.2929 4.00001L63.4645 6.82843C63.2692 7.02369 63.2692 7.34028 63.4645 7.53554C63.6597 7.7308 63.9763 7.7308 64.1716 7.53554L67.3536 4.35356ZM-4.37114e-08 4.5L67 4.50001L67 3.50001L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                    fill="#373737"
                  />
                </svg>
              </Link>
            </div>
            <img src={heroImage} alt="" />
          </header>

          <section className={styles.sectionStories}>
            {staticPropsArray.map((content, index) => {
              return (
                <SectionStories
                  key={index}
                  smallHeader={content.smallHeader}
                  mainHeader={content.mainHeader}
                  mainContent={content.mainContent}
                />
              );
            })}
          </section>
        </main>
      </div>
    </>
  );
};

export default BlogPage;
