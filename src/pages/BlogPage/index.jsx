import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import HomeNavbar from "../../components/HomeNavbar";
import bang from "./assets/bang.png";
import cruize from "./assets/cruize.png";
import heroImage from "./assets/pexels-rodnae-productions-6224736 3.png";
import styles from "./BlogPage.module.scss";
import SectionStories from "./components/SectionStories";
import Subscribe from "../../components/subscribe/subscribe";

const BlogPage = () => {
  const staticPropsArray = [
    {
      id: 1,
      smallHeader: "BLOG",
      mainHeader: "Latest Stories",
      mainContent: [
        {
          title: "AstroTurf Bang",
          desc: "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
          img: "https://images.unsplash.com/photo-1519519336991-cf2dc8897ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
        },
        {
          title: "Lagos AstroTurf 2023",
          desc: "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
          img: cruize,
        },
        {
          title: "Road Show Ends with a Bang",
          desc: "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
          img: bang,
        },
      ],
    },
    {
      id: 2,
      smallHeader: "LEARN",
      mainHeader: "Resources",
      mainContent: [
        {
          title: "How to Create a Pentria Business Account in Seconds",
          desc: "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
          img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          title: "How to Withdraw Earnings from Your Pentria Wallet",
          desc: "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
          img: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          title: "Steps to Cancel A Paid Reservation on Pentria",
          desc: "Despite it raining cats and dogs in Victoria Island, Lagos, a sea of fans gathered at the...",
          img: "https://images.unsplash.com/photo-1634234498573-29224acf2907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
      ],
    },
    {
      smallHeader: "GALLERY",
      mainHeader: "Photo Splash",
      mainContent: [
        {
          title: "",
          desc: "",
          img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          title: "",
          desc: "",
          img: "https://images.unsplash.com/photo-1537963447914-dbc04b81de27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
        },
        {
          title: "",
          desc: "",
          img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80",
        },
      ],
    },
  ];

  return (
    <>
      <HomeNavbar />
      <div className={styles.BlogPage}>
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
            <div className={styles.img_wrap}>
              <img src={heroImage} alt="" />
            </div>
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
      <Subscribe />
      <Footer bg={styles.footer} purple={true} />
    </>
  );
};

export default BlogPage;
