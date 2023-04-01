import React, { useState } from "react";
import Button from "../../../../components/Button";
import styles from "./space.module.scss";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import ADD_TO_FAVORITES from "../../../../graphql/mutations/addToFavorites";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as NoStar } from "../../assets/no-star.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg"

const Space = ({ space }) => {
    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(!favorite)
    };

    const [addToFavorites] = useMutation(ADD_TO_FAVORITES, {
        variables: {
            spaceId: space._id
        }
    });
    return (
        <article key={space._id} className={styles.cards}>
            <img src={space.image} alt="spaces arena" />
            <div className={styles.price}>
                <span><p>{space.currency}{space.price}</p>/hr</span>
                <div className={favorite ? styles.favorite : styles.unfavorite} onClick={() => {
                    toggleFavorite();
                    addToFavorites()
                }}>
                    <Heart />
                </div>
            </div>
            <h3>{space.facilityType}</h3>
            <p className={styles.location}>{space.location}</p>
            <div className={styles.reviews}>
                <div className={styles.ratings}>
                    <div>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <NoStar />
                    </div>
                    <p>{space.reviews[0].rating} Ratings</p>
                </div>
                <Button type={'button'} text={'GET TICKET'} />
            </div>
        </article>
    )
};

Space.propTypes = {
    space: PropTypes.object.isRequired
}

export default Space;