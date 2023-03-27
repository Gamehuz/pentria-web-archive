import React from "react";
import Button from "../../../components/Button";
import locationIcon from "./assets/locationIcon.svg";
import star from "./assets/star.svg";
import starGray from "./assets/starGray.svg";
import styles from "./favorites.module.scss";

const UserFavorites = () => {
  return (
    <div className={styles.userfavoritesPage}>
      <div className={styles.favoritesHeader}>
        <div className={styles.favoritesHeader__balance}>
          <h1>COMING SOON </h1>
          <p>Legacy parts</p>
        </div>
        <div className={styles.favoritesHeader__withdraw}>
          <Button
            type="button"
            bg={styles.favoritesHeader__withdraw__redeem}
            text="REDEEM"
          />
        </div>
      </div>
      <div className={styles.createfavorites}>
        <h3>My Favorites</h3>
        {/* <Link to="/user/new-listing" className={styles.createfavorites__button}>
          <img src={plusBtn} alt="" />
          <p>Create new listing</p>
        </Link> */}
      </div>
      <div className={styles.favorites}>
        <div className={styles.favorites__hr} />
        {[1, 2, 3, 4].map((itm) => (
          <>
            <div className={styles.favorites__itemContainer}>
              <div className={styles.favorites__item}>
                <div className={styles.favorites__item__img}>
                  <img src="https://picsum.photos/200" alt="" />
                </div>
                <div className={styles.favorites__item__details}>
                  <h3>Pleasure Pack</h3>
                  <div className={styles.favorites__item__details__location}>
                    <img src={locationIcon} alt="location pin" />
                    <p>2933 Lekki Phase One, Lagos</p>
                  </div>
                  <div className={styles.favorites__item__details__rating}>
                    {[1, 2, 3, 4].map((itm) => (
                      <img src={star} key={itm} alt="" />
                    ))}
                    <img src={starGray} alt="" />
                    <p>4.0 Ratings </p>
                  </div>
                </div>
              </div>
              <div className={styles.favorites__itemContainer__buttons}>
                <Button
                  type="button"
                  text="Visit"
                  bg={styles.favorites__itemContainer__buttons__visit}
                />
                <Button
                  type="button"
                  text="Remove"
                  bg={styles.favorites__itemContainer__buttons__remove}
                />
              </div>
            </div>
            <div className={styles.favorites__hr} />
          </>
        ))}
      </div>
    </div>
  );
};

export default UserFavorites;
