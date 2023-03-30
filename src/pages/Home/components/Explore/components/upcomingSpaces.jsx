import { ReactComponent as Heart } from "../assets/heart.svg"
import { ReactComponent as NoStar } from "../../../assets/no-star.svg";
import { ReactComponent as Star } from "../../../assets/star.svg";
import Button from '../../../../../components/Button';
import styles from "../explore.module.scss"
import React, { useState } from "react";
import moment from "moment"
import { useMutation } from "@apollo/client";
import ADD_TO_FAVORITES from "../../../../../graphql/mutations/addToFavorites";
import PropTypes from "prop-types";

const UpcomingSpaces = ({ space }) => {
    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(!favorite)
    };
    
    const spaceCreatedAt = new Date(Number(space.createdAt));
    const spaceDate = moment(spaceCreatedAt).format("MMM DD, YYYY");
    const spaceTime = moment(spaceCreatedAt).format("HH:mm");

    const [addToFavorites] = useMutation(ADD_TO_FAVORITES, {
        variables: {
            spaceId: space._id
        }
    });

    return (
        <article key={space._id}>
        <img src={space.image} alt="spaces arena"/>
        <div className={styles.price}>
            <span><p>{space.currency}{space.price}</p>/hr</span>
            <div className={favorite ? styles.favorite : styles.unfavorite} onClick={() => {toggleFavorite(); addToFavorites()}}>
                <Heart />
            </div>
        </div>
        <h3>{space.name}</h3>
        <p>{space.location}</p>
        <div>
            <div>
                <Star />
                <Star />
                <Star />
                <Star />
                <NoStar />
            </div>
            <div className={styles.eventDate}>
            <span>{spaceDate}</span>
            <p>{spaceTime}</p>
            </div>
            <Button className={styles.button} type={'button'} text={'GET TICKET'}/>
        </div>
    </article>
    )
};

UpcomingSpaces.propTypes = {
    space: PropTypes.object.isRequired
}

export default UpcomingSpaces;